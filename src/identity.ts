import type { PublicClient, WalletClient } from 'viem'
import { IDENTITY_ABI } from './abis'
import { getAddresses } from './addresses'
import type { AgentIdentity, Hash } from './types'

function registryAddress(client: PublicClient) {
  return getAddresses(client.chain!.id).identityRegistryV2
}

export async function getAgent(client: PublicClient, tokenId: bigint): Promise<AgentIdentity> {
  const addr = registryAddress(client)
  const [agentWallet, name, registeredAt, , active] = await client.readContract({
    address: addr,
    abi: IDENTITY_ABI,
    functionName: 'getIdentity',
    args: [tokenId],
  }) as [string, string, bigint, string, boolean]

  const owner = await client.readContract({
    address: addr,
    abi: IDENTITY_ABI,
    functionName: 'ownerOf',
    args: [tokenId],
  }) as string

  return {
    tokenId,
    name,
    owner,
    agentWallet,
    registeredAt: Number(registeredAt),
    active,
    registry: 'v2',
  }
}

export async function getAgentByName(client: PublicClient, name: string): Promise<AgentIdentity> {
  const addr = registryAddress(client)
  const tokenId = await client.readContract({
    address: addr,
    abi: IDENTITY_ABI,
    functionName: 'tokenIdByName',
    args: [name],
  }) as bigint
  return getAgent(client, tokenId)
}

export async function getAgentsByOwner(client: PublicClient, owner: `0x${string}`): Promise<AgentIdentity[]> {
  const addr = registryAddress(client)
  const balance = await client.readContract({
    address: addr,
    abi: IDENTITY_ABI,
    functionName: 'balanceOf',
    args: [owner],
  }) as bigint

  const tokenIds = await Promise.all(
    Array.from({ length: Number(balance) }, (_, i) =>
      client.readContract({
        address: addr,
        abi: IDENTITY_ABI,
        functionName: 'tokenOfOwnerByIndex',
        args: [owner, BigInt(i)],
      }) as Promise<bigint>
    )
  )

  return Promise.all(tokenIds.map((id) => getAgent(client, id)))
}

export async function totalAgents(client: PublicClient): Promise<number> {
  const addr = registryAddress(client)
  const total = await client.readContract({
    address: addr,
    abi: IDENTITY_ABI,
    functionName: 'totalSupply',
  }) as bigint
  return Number(total)
}

export async function registerAgent(
  walletClient: WalletClient,
  agentURI: string,
  fee = 0n
): Promise<Hash> {
  const addr = getAddresses(walletClient.chain!.id).identityRegistryV2
  return walletClient.writeContract({
    address: addr,
    abi: IDENTITY_ABI,
    functionName: 'register',
    args: [agentURI],
    value: fee,
    account: walletClient.account!,
    chain: walletClient.chain,
  })
}

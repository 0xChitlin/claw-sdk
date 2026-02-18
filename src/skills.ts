import type { PublicClient, WalletClient } from 'viem'
import { SKILL_REGISTRY_ABI } from './abis'
import { getAddresses } from './addresses'
import type { Skill, Hash } from './types'

function registryAddress(client: PublicClient | WalletClient) {
  return getAddresses(client.chain!.id).skillRegistry
}

export async function getSkill(client: PublicClient, skillAddress: `0x${string}`): Promise<Skill> {
  const [name, skillURI, fee, author, active] = await client.readContract({
    address: registryAddress(client),
    abi: SKILL_REGISTRY_ABI,
    functionName: 'getSkill',
    args: [skillAddress],
  }) as [string, string, bigint, string, boolean]

  return { skillAddress, name, description: skillURI, version: '1.0.0', author, fee, active }
}

export async function getInstalledSkills(client: PublicClient, agentId: bigint): Promise<Skill[]> {
  const addresses = await client.readContract({
    address: registryAddress(client),
    abi: SKILL_REGISTRY_ABI,
    functionName: 'getInstalledSkills',
    args: [agentId],
  }) as `0x${string}`[]

  return Promise.all(addresses.map((addr) => getSkill(client, addr)))
}

export async function installSkill(
  walletClient: WalletClient,
  skillAddress: `0x${string}`,
  fee = 500000000000000n // 0.0005 ETH default
): Promise<Hash> {
  return walletClient.writeContract({
    address: getAddresses(walletClient.chain!.id).skillRegistry,
    abi: SKILL_REGISTRY_ABI,
    functionName: 'installSkill',
    args: [skillAddress],
    value: fee,
    account: walletClient.account!,
    chain: walletClient.chain,
  })
}

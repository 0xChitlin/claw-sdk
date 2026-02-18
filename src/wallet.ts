import type { PublicClient, WalletClient } from 'viem'
import { WALLET_FACTORY_ABI } from './abis'
import { getAddresses } from './addresses'
import type { Hash } from './types'

export async function getWallet(client: PublicClient, agentId: bigint): Promise<`0x${string}` | null> {
  const addr = getAddresses(client.chain!.id).walletFactory
  const wallet = await client.readContract({
    address: addr,
    abi: WALLET_FACTORY_ABI,
    functionName: 'getWallet',
    args: [agentId],
  }) as `0x${string}`
  return wallet === '0x0000000000000000000000000000000000000000' ? null : wallet
}

export async function createWallet(walletClient: WalletClient, agentId: bigint): Promise<Hash> {
  const addr = getAddresses(walletClient.chain!.id).walletFactory
  return walletClient.writeContract({
    address: addr,
    abi: WALLET_FACTORY_ABI,
    functionName: 'createWallet',
    args: [agentId],
    account: walletClient.account!,
    chain: walletClient.chain,
  })
}

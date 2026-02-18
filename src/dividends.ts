import type { PublicClient, WalletClient } from 'viem'
import { DIVIDENDS_ABI } from './abis'
import { getAddresses } from './addresses'
import type { Hash } from './types'

export async function getPendingDividends(client: PublicClient, owner: `0x${string}`): Promise<bigint> {
  const addr = getAddresses(client.chain!.id).dividends
  if (!addr) return 0n
  return client.readContract({
    address: addr,
    abi: DIVIDENDS_ABI,
    functionName: 'pendingDividends',
    args: [owner],
  }) as Promise<bigint>
}

export async function getTotalDistributed(client: PublicClient): Promise<bigint> {
  const addr = getAddresses(client.chain!.id).dividends
  if (!addr) return 0n
  return client.readContract({
    address: addr,
    abi: DIVIDENDS_ABI,
    functionName: 'totalDistributed',
  }) as Promise<bigint>
}

export async function claimDividends(walletClient: WalletClient): Promise<Hash> {
  const addr = getAddresses(walletClient.chain!.id).dividends
  if (!addr) throw new Error('@claw/sdk: ClawDividends not deployed on this chain')
  return walletClient.writeContract({
    address: addr,
    abi: DIVIDENDS_ABI,
    functionName: 'claim',
    account: walletClient.account!,
    chain: walletClient.chain,
  })
}

import type { PublicClient, WalletClient } from 'viem';
import type { Hash } from './types';
export declare function getWallet(client: PublicClient, agentId: bigint): Promise<`0x${string}` | null>;
export declare function createWallet(walletClient: WalletClient, agentId: bigint): Promise<Hash>;
//# sourceMappingURL=wallet.d.ts.map
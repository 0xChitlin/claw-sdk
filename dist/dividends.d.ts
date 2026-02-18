import type { PublicClient, WalletClient } from 'viem';
import type { Hash } from './types';
export declare function getPendingDividends(client: PublicClient, owner: `0x${string}`): Promise<bigint>;
export declare function getTotalDistributed(client: PublicClient): Promise<bigint>;
export declare function claimDividends(walletClient: WalletClient): Promise<Hash>;
//# sourceMappingURL=dividends.d.ts.map
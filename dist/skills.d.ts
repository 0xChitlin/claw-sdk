import type { PublicClient, WalletClient } from 'viem';
import type { Skill, Hash } from './types';
export declare function getSkill(client: PublicClient, skillAddress: `0x${string}`): Promise<Skill>;
export declare function getInstalledSkills(client: PublicClient, agentId: bigint): Promise<Skill[]>;
export declare function installSkill(walletClient: WalletClient, skillAddress: `0x${string}`, fee?: bigint): Promise<Hash>;
//# sourceMappingURL=skills.d.ts.map
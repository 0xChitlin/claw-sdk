import type { PublicClient, WalletClient } from 'viem';
import type { AgentIdentity, Hash } from './types';
export declare function getAgent(client: PublicClient, tokenId: bigint): Promise<AgentIdentity>;
export declare function getAgentByName(client: PublicClient, name: string): Promise<AgentIdentity>;
export declare function getAgentsByOwner(client: PublicClient, owner: `0x${string}`): Promise<AgentIdentity[]>;
export declare function totalAgents(client: PublicClient): Promise<number>;
export declare function registerAgent(walletClient: WalletClient, agentURI: string, fee?: bigint): Promise<Hash>;
//# sourceMappingURL=identity.d.ts.map
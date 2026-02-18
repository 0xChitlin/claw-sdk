/**
 * @claw/sdk — Shared Types
 */
export interface AgentIdentity {
    tokenId: bigint;
    name: string;
    owner: string;
    agentWallet: string;
    registeredAt: number;
    active: boolean;
    registry: 'v1' | 'v2';
}
export interface Skill {
    skillAddress: string;
    name: string;
    description: string;
    version: string;
    author: string;
    fee: bigint;
    active: boolean;
}
export type Address = `0x${string}`;
export type Hash = `0x${string}`;
//# sourceMappingURL=types.d.ts.map
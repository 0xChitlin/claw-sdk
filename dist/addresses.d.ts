/**
 * @claw/sdk — Contract Addresses by Chain ID
 */
import type { Address } from './types';
export interface ChainAddresses {
    identityRegistryV2: Address;
    identityRegistryV1?: Address;
    skillRegistry: Address;
    walletFactory: Address;
    paymaster: Address;
    dividends?: Address;
    pinchToken?: Address;
}
export declare const ADDRESSES: Record<number, ChainAddresses>;
/**
 * Get contract addresses for a given chain ID.
 * Throws if the chain is not supported.
 */
export declare function getAddresses(chainId: number): ChainAddresses;
//# sourceMappingURL=addresses.d.ts.map
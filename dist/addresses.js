"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ADDRESSES = void 0;
exports.getAddresses = getAddresses;
exports.ADDRESSES = {
    // Abstract Mainnet
    2741: {
        identityRegistryV2: '0x01949e45FabCD684bcD4747966145140aB4778E5',
        identityRegistryV1: '0x4EFffaBBeBAaF9cA76e08635a5D89901A2BF2146',
        skillRegistry: '0xb9913F4fceA83fF3F9c7D56339Abc196408Cf21b',
        walletFactory: '0xf6B945dBf532D376A475E31be32F51972915B1cc',
        paymaster: '0x7BBBBbDaCE3EA19Fe317e620CbD89F1040F2ddAf',
        dividends: '0x3441aa2Bf84EDF9f44A2ad3b93BDCce7D801Fb06',
        pinchToken: '0xF8e86087dc452a52aA5d1bb66FaE56F869C33412',
    },
    // Abstract Testnet
    11124: {
        identityRegistryV2: '0xdc3D5b2E6c67CD3e695e53105604Cf0799Dc0AB3',
        skillRegistry: '0x3E1B5b8baC6d88652e695E7C60eb3BB20D58f078',
        walletFactory: '0x32dA970c0578CFFAa2D71233dAC06219a8e0058F',
        paymaster: '0x4E743bDc0a236316c0bd5A7DC4F86629Bdd3ad9E',
    },
};
/**
 * Get contract addresses for a given chain ID.
 * Throws if the chain is not supported.
 */
function getAddresses(chainId) {
    const addrs = exports.ADDRESSES[chainId];
    if (!addrs) {
        throw new Error(`@claw/sdk: Unsupported chain ID ${chainId}. ` +
            `Supported chains: ${Object.keys(exports.ADDRESSES).join(', ')}`);
    }
    return addrs;
}
//# sourceMappingURL=addresses.js.map
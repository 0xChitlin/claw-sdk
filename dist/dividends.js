"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPendingDividends = getPendingDividends;
exports.getTotalDistributed = getTotalDistributed;
exports.claimDividends = claimDividends;
const abis_1 = require("./abis");
const addresses_1 = require("./addresses");
async function getPendingDividends(client, owner) {
    const addr = (0, addresses_1.getAddresses)(client.chain.id).dividends;
    if (!addr)
        return 0n;
    return client.readContract({
        address: addr,
        abi: abis_1.DIVIDENDS_ABI,
        functionName: 'pendingDividends',
        args: [owner],
    });
}
async function getTotalDistributed(client) {
    const addr = (0, addresses_1.getAddresses)(client.chain.id).dividends;
    if (!addr)
        return 0n;
    return client.readContract({
        address: addr,
        abi: abis_1.DIVIDENDS_ABI,
        functionName: 'totalDistributed',
    });
}
async function claimDividends(walletClient) {
    const addr = (0, addresses_1.getAddresses)(walletClient.chain.id).dividends;
    if (!addr)
        throw new Error('@claw/sdk: ClawDividends not deployed on this chain');
    return walletClient.writeContract({
        address: addr,
        abi: abis_1.DIVIDENDS_ABI,
        functionName: 'claim',
        account: walletClient.account,
        chain: walletClient.chain,
    });
}
//# sourceMappingURL=dividends.js.map
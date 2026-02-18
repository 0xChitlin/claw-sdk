"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWallet = getWallet;
exports.createWallet = createWallet;
const abis_1 = require("./abis");
const addresses_1 = require("./addresses");
async function getWallet(client, agentId) {
    const addr = (0, addresses_1.getAddresses)(client.chain.id).walletFactory;
    const wallet = await client.readContract({
        address: addr,
        abi: abis_1.WALLET_FACTORY_ABI,
        functionName: 'getWallet',
        args: [agentId],
    });
    return wallet === '0x0000000000000000000000000000000000000000' ? null : wallet;
}
async function createWallet(walletClient, agentId) {
    const addr = (0, addresses_1.getAddresses)(walletClient.chain.id).walletFactory;
    return walletClient.writeContract({
        address: addr,
        abi: abis_1.WALLET_FACTORY_ABI,
        functionName: 'createWallet',
        args: [agentId],
        account: walletClient.account,
        chain: walletClient.chain,
    });
}
//# sourceMappingURL=wallet.js.map
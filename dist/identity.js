"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAgent = getAgent;
exports.getAgentByName = getAgentByName;
exports.getAgentsByOwner = getAgentsByOwner;
exports.totalAgents = totalAgents;
exports.registerAgent = registerAgent;
const abis_1 = require("./abis");
const addresses_1 = require("./addresses");
function registryAddress(client) {
    return (0, addresses_1.getAddresses)(client.chain.id).identityRegistryV2;
}
async function getAgent(client, tokenId) {
    const addr = registryAddress(client);
    const [agentWallet, name, registeredAt, , active] = await client.readContract({
        address: addr,
        abi: abis_1.IDENTITY_ABI,
        functionName: 'getIdentity',
        args: [tokenId],
    });
    const owner = await client.readContract({
        address: addr,
        abi: abis_1.IDENTITY_ABI,
        functionName: 'ownerOf',
        args: [tokenId],
    });
    return {
        tokenId,
        name,
        owner,
        agentWallet,
        registeredAt: Number(registeredAt),
        active,
        registry: 'v2',
    };
}
async function getAgentByName(client, name) {
    const addr = registryAddress(client);
    const tokenId = await client.readContract({
        address: addr,
        abi: abis_1.IDENTITY_ABI,
        functionName: 'tokenIdByName',
        args: [name],
    });
    return getAgent(client, tokenId);
}
async function getAgentsByOwner(client, owner) {
    const addr = registryAddress(client);
    const balance = await client.readContract({
        address: addr,
        abi: abis_1.IDENTITY_ABI,
        functionName: 'balanceOf',
        args: [owner],
    });
    const tokenIds = await Promise.all(Array.from({ length: Number(balance) }, (_, i) => client.readContract({
        address: addr,
        abi: abis_1.IDENTITY_ABI,
        functionName: 'tokenOfOwnerByIndex',
        args: [owner, BigInt(i)],
    })));
    return Promise.all(tokenIds.map((id) => getAgent(client, id)));
}
async function totalAgents(client) {
    const addr = registryAddress(client);
    const total = await client.readContract({
        address: addr,
        abi: abis_1.IDENTITY_ABI,
        functionName: 'totalSupply',
    });
    return Number(total);
}
async function registerAgent(walletClient, agentURI, fee = 0n) {
    const addr = (0, addresses_1.getAddresses)(walletClient.chain.id).identityRegistryV2;
    return walletClient.writeContract({
        address: addr,
        abi: abis_1.IDENTITY_ABI,
        functionName: 'register',
        args: [agentURI],
        value: fee,
        account: walletClient.account,
        chain: walletClient.chain,
    });
}
//# sourceMappingURL=identity.js.map
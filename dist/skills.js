"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSkill = getSkill;
exports.getInstalledSkills = getInstalledSkills;
exports.installSkill = installSkill;
const abis_1 = require("./abis");
const addresses_1 = require("./addresses");
function registryAddress(client) {
    return (0, addresses_1.getAddresses)(client.chain.id).skillRegistry;
}
async function getSkill(client, skillAddress) {
    const [name, skillURI, fee, author, active] = await client.readContract({
        address: registryAddress(client),
        abi: abis_1.SKILL_REGISTRY_ABI,
        functionName: 'getSkill',
        args: [skillAddress],
    });
    return { skillAddress, name, description: skillURI, version: '1.0.0', author, fee, active };
}
async function getInstalledSkills(client, agentId) {
    const addresses = await client.readContract({
        address: registryAddress(client),
        abi: abis_1.SKILL_REGISTRY_ABI,
        functionName: 'getInstalledSkills',
        args: [agentId],
    });
    return Promise.all(addresses.map((addr) => getSkill(client, addr)));
}
async function installSkill(walletClient, skillAddress, fee = 500000000000000n // 0.0005 ETH default
) {
    return walletClient.writeContract({
        address: (0, addresses_1.getAddresses)(walletClient.chain.id).skillRegistry,
        abi: abis_1.SKILL_REGISTRY_ABI,
        functionName: 'installSkill',
        args: [skillAddress],
        value: fee,
        account: walletClient.account,
        chain: walletClient.chain,
    });
}
//# sourceMappingURL=skills.js.map
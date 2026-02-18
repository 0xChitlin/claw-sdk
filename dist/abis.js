"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DIVIDENDS_ABI = exports.WALLET_FACTORY_ABI = exports.SKILL_REGISTRY_ABI = exports.IDENTITY_ABI = void 0;
const viem_1 = require("viem");
exports.IDENTITY_ABI = (0, viem_1.parseAbi)([
    'function register(string agentURI) payable returns (uint256)',
    'function tokenIdByName(string name) view returns (uint256)',
    'function ownerOf(uint256 tokenId) view returns (address)',
    'function getIdentity(uint256 tokenId) view returns (address agentWallet, string name, uint256 registeredAt, address creator, bool active)',
    'function totalSupply() view returns (uint256)',
    'function tokenOfOwnerByIndex(address owner, uint256 index) view returns (uint256)',
    'function balanceOf(address owner) view returns (uint256)',
    'event Registered(uint256 indexed tokenId, address indexed owner, string agentURI)',
]);
exports.SKILL_REGISTRY_ABI = (0, viem_1.parseAbi)([
    'function registerSkill(string name, string skillURI, uint256 fee) payable',
    'function installSkill(address skillAddress) payable',
    'function getSkill(address skillAddress) view returns (string name, string skillURI, uint256 fee, address author, bool active)',
    'function getInstalledSkills(uint256 agentId) view returns (address[])',
    'function isInstalled(uint256 agentId, address skillAddress) view returns (bool)',
    'event SkillRegistered(address indexed skillAddress, address indexed author, string name)',
    'event SkillInstalled(uint256 indexed agentId, address indexed skillAddress)',
]);
exports.WALLET_FACTORY_ABI = (0, viem_1.parseAbi)([
    'function createWallet(uint256 agentId) returns (address)',
    'function getWallet(uint256 agentId) view returns (address)',
    'event WalletCreated(uint256 indexed agentId, address indexed wallet)',
]);
exports.DIVIDENDS_ABI = (0, viem_1.parseAbi)([
    'function claim() nonpayable',
    'function pendingDividends(address account) view returns (uint256)',
    'function totalDistributed() view returns (uint256)',
    'event DividendsClaimed(address indexed account, uint256 amount)',
]);
//# sourceMappingURL=abis.js.map
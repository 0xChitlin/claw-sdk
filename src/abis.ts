import { parseAbi } from 'viem'

export const IDENTITY_ABI = parseAbi([
  'function register(string agentURI) payable returns (uint256)',
  'function tokenIdByName(string name) view returns (uint256)',
  'function ownerOf(uint256 tokenId) view returns (address)',
  'function getIdentity(uint256 tokenId) view returns (address agentWallet, string name, uint256 registeredAt, address creator, bool active)',
  'function totalSupply() view returns (uint256)',
  'function tokenOfOwnerByIndex(address owner, uint256 index) view returns (uint256)',
  'function balanceOf(address owner) view returns (uint256)',
  'event Registered(uint256 indexed tokenId, address indexed owner, string agentURI)',
])

export const SKILL_REGISTRY_ABI = parseAbi([
  'function registerSkill(string name, string skillURI, uint256 fee) payable',
  'function installSkill(address skillAddress) payable',
  'function getSkill(address skillAddress) view returns (string name, string skillURI, uint256 fee, address author, bool active)',
  'function getInstalledSkills(uint256 agentId) view returns (address[])',
  'function isInstalled(uint256 agentId, address skillAddress) view returns (bool)',
  'event SkillRegistered(address indexed skillAddress, address indexed author, string name)',
  'event SkillInstalled(uint256 indexed agentId, address indexed skillAddress)',
])

export const WALLET_FACTORY_ABI = parseAbi([
  'function createWallet(uint256 agentId) returns (address)',
  'function getWallet(uint256 agentId) view returns (address)',
  'event WalletCreated(uint256 indexed agentId, address indexed wallet)',
])

export const DIVIDENDS_ABI = parseAbi([
  'function claim() nonpayable',
  'function pendingDividends(address account) view returns (uint256)',
  'function totalDistributed() view returns (uint256)',
  'event DividendsClaimed(address indexed account, uint256 amount)',
])

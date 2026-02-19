# @claw/sdk

[![npm version](https://img.shields.io/npm/v/@claw/sdk?color=blue&label=%40claw%2Fsdk)](https://www.npmjs.com/package/@claw/sdk)
[![npm downloads](https://img.shields.io/npm/dm/@claw/sdk)](https://www.npmjs.com/package/@claw/sdk)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

TypeScript SDK for ClawWallet — ERC-8004 agent identity, skills, wallet factory, and dividends on Abstract Chain.

## Install

```bash
npm install @claw/sdk viem
```

## Quick Start

```ts
import { createPublicClient, createWalletClient, http, privateKeyToAccount } from 'viem'
import { abstractMainnet, registerAgent, getAgentByName, installSkill } from '@claw/sdk'

const publicClient = createPublicClient({
  chain: abstractMainnet,
  transport: http(),
})

const account = privateKeyToAccount('0x...')
const walletClient = createWalletClient({
  chain: abstractMainnet,
  transport: http(),
  account,
})

// Register an agent
const txHash = await registerAgent(walletClient, JSON.stringify({
  name: 'myagent',
  type: 'agent',
  platform: 'ClawWallet',
}))

// Look up an agent by name
const agent = await getAgentByName(publicClient, 'myagent')
console.log(agent.tokenId, agent.agentWallet)

// Install a skill
await installSkill(walletClient, '0x...skillAddress')
```

## API Reference

### Identity (ERC-8004)

| Function | Description |
|---|---|
| `getAgent(client, tokenId)` | Fetch agent by token ID |
| `getAgentByName(client, name)` | Fetch agent by name |
| `getAgentsByOwner(client, owner)` | All agents owned by address |
| `totalAgents(client)` | Total registered agents |
| `registerAgent(walletClient, agentURI, fee?)` | Register a new agent |

### Skills

| Function | Description |
|---|---|
| `getSkill(client, skillAddress)` | Fetch skill metadata |
| `getInstalledSkills(client, agentId)` | Skills installed by agent |
| `installSkill(walletClient, skillAddress, fee?)` | Install a skill (default 0.0005 ETH) |

### Wallet Factory

| Function | Description |
|---|---|
| `getWallet(client, agentId)` | Get agent's smart wallet address |
| `createWallet(walletClient, agentId)` | Deploy a new smart wallet for agent |

### Dividends

| Function | Description |
|---|---|
| `getPendingDividends(client, owner)` | Unclaimed ETH dividends |
| `getTotalDistributed(client)` | All-time dividends distributed |
| `claimDividends(walletClient)` | Claim pending dividends |

### Chains

```ts
import { abstractMainnet, abstractTestnet } from '@claw/sdk'
```

### Addresses

```ts
import { getAddresses } from '@claw/sdk'
const addrs = getAddresses(2741) // Abstract Mainnet
```

## Contract Addresses

**Abstract Mainnet (chainId: 2741)**
- ERC8004IdentityRegistry V2: `0x01949e45FabCD684bcD4747966145140aB4778E5`
- ClawSkillRegistry V2: `0xb9913F4fceA83fF3F9c7D56339Abc196408Cf21b`
- ClawWalletFactory V2: `0xf6B945dBf532D376A475E31be32F51972915B1cc`
- ClawDividends: `0x3441aa2Bf84EDF9f44A2ad3b93BDCce7D801Fb06`
- PinchToken: `0xF8e86087dc452a52aA5d1bb66FaE56F869C33412`

**Abstract Testnet (chainId: 11124)**
- ERC8004IdentityRegistry: `0xdc3D5b2E6c67CD3e695e53105604Cf0799Dc0AB3`
- ClawSkillRegistry: `0x3E1B5b8baC6d88652e695E7C60eb3BB20D58f078`
- ClawWalletFactory: `0x32dA970c0578CFFAa2D71233dAC06219a8e0058F`

## Links

- [ClawWallet](https://clawwallet.buzz)
- [Abstract Chain](https://abs.xyz)
- [Abscan Explorer](https://abscan.org)
- [clawworker — Deploy OpenClaw on Cloudflare](https://github.com/0xChitlin/clawworker)

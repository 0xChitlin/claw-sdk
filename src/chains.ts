/**
 * @claw/sdk — Abstract Chain configs for viem
 */
import { type Chain } from 'viem'

export const abstractMainnet: Chain = {
  id: 2741,
  name: 'Abstract',
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://api.mainnet.abs.xyz'],
      webSocket: ['wss://api.mainnet.abs.xyz/ws'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Abscan',
      url: 'https://abscan.org',
    },
  },
  contracts: {
    multicall3: {
      address: '0xcA11bde05977b3631167028862bE2a173976CA11',
    },
  },
}

export const abstractTestnet: Chain = {
  id: 11124,
  name: 'Abstract Testnet',
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://api.testnet.abs.xyz'],
      webSocket: ['wss://api.testnet.abs.xyz/ws'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Abscan Testnet',
      url: 'https://sepolia.abscan.org',
    },
  },
  testnet: true,
  contracts: {
    multicall3: {
      address: '0xcA11bde05977b3631167028862bE2a173976CA11',
    },
  },
}

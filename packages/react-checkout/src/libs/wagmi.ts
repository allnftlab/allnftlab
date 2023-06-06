import { createClient, mainnet, goerli, Chain } from 'wagmi'
import { getDefaultClient } from 'connectkit'

const localChain = {
  id: 1337,
  network: 'local',
  name: 'Local',
  nativeCurrency: {
    name: 'Local Ether',
    symbol: 'ETH',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['http://127.0.0.1:8545'],
    },
    public: {
      http: ['http://127.0.0.1:8545'],
    },
  },
} as Chain

const chains = [goerli, mainnet]

if (process.env.NODE_ENV === 'development') {
  chains.unshift(localChain)
}

const alchemyId = process.env.ALCHEMY_ID

const client = createClient(
  getDefaultClient({
    appName: 'Zico: The Legacy Collection',
    alchemyId,
    chains,
  }),
)

export { client }

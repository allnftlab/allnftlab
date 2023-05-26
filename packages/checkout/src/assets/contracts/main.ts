import { Address } from 'wagmi'

import { abi } from './abi'

export const CONTRACT_ADDRESS = process.env
  .NEXT_PUBLIC_CONTRACT_ADDRESS! as Address
export const CHAIN_ID = process.env.NEXT_PUBLIC_CHAIN_ID!

export const ABI = abi

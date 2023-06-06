import { Address } from 'wagmi'
import { create } from 'zustand'

type Customer = {
  name: string
  email: string
  country: string
  phone: string
  document: string
  address?: Address
}

export type Item = {
  quantity: number
  id: number
}

interface CheckoutStore {
  items: Item[]
  setItems: (items: Item[]) => void
  updateItemQuantity: (id: number, quantity: number) => void
  customer: Customer
  setCustomer: (customer: Customer) => void
}

const useCheckout = create<CheckoutStore>()((set) => ({
  items: [
    {
      id: 1,
      quantity: 2,
    },
  ],
  setItems: (items) => set((state) => ({ ...state, items })),
  updateItemQuantity: (id, quantity) =>
    set((state) => ({
      ...state,
      items: state.items.map((item) =>
        item.id === id ? { id, quantity: item.quantity + quantity } : item,
      ),
    })),
  customer: {
    name: '',
    email: '',
    country: '',
    phone: '',
    document: '',
    address: undefined,
  },
  setCustomer: (customer) => set((state) => ({ ...state, customer })),
}))

export { useCheckout }

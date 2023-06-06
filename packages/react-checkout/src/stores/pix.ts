import { create } from 'zustand'

type Pix = PagarmeTransaction

interface CheckoutStore {
  pix: Pix
  setPix: (pix: Pix) => void
}

const usePix = create<CheckoutStore>()((set) => ({
  pix: {
    qr_code: '',
    qr_code_url: '',
    expires_at: '',
    expires_in: '',
    created_at: '',
    amount: 0,
  },
  setPix: (pix) => set((state) => ({ ...state, pix })),
}))

export { usePix }

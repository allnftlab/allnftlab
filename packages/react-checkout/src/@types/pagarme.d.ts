declare type PagarmeItem = {
  id?: string
  type?: string
  description?: string
  amount?: number
  quantity?: number
  status?: string
}

declare type PagarmeCustomer = {
  id?: string
  name: string
  email: string
  document: string
  type: 'individual'
  phones: {
    home_phone: {
      country_code: string
      number: string
      area_code: string
    }
  }
}

declare type PagarmeTransaction = {
  id?: string
  qr_code: string
  qr_code_url: string
  expires_at: string
  expires_in?: string
  created_at?: string
  amount: number
  status?: string
}

declare type PagarmeCharge = {
  customer: PagarmeCustomer
  last_transaction: PagarmeTransaction
}

// Pendência
declare type PagarmeOrder = {
  id: string
  items: PagarmeItem[]
  customer: PagarmeCustomer
  charges: PagarmeCharge[]
}

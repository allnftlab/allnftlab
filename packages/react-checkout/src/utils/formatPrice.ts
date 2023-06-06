const priceFormatter = Intl.NumberFormat(['pt-br'], {
  currency: 'BRL',
  style: 'currency',
  minimumFractionDigits: 2,
})

export { priceFormatter }

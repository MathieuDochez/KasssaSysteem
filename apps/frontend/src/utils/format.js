const euro = new Intl.NumberFormat('nl-BE', { style: 'currency', currency: 'EUR' })
const decimal = new Intl.NumberFormat('nl-BE', { maximumFractionDigits: 1 })

export const formatPrice = (value) => euro.format(value)
export const formatAbv = (abv) => `${decimal.format(abv)}%`
export const formatSize = (cl) => `${decimal.format(cl)} cl`

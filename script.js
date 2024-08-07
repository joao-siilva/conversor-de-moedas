const form = document.querySelector('form')
const amount = document.getElementById('amount')
const currency = document.getElementById('currency')

amount.addEventListener('input', () => {
  const hasCaractersRegex = /\D+/g
  amount.value = amount.value.replace(hasCaractersRegex, '')
})

const USD = 4.87
const EUR = 5.32
const GBP = 6.08

form.onsubmit = (event) => {
  event.preventDefault()

  switch (currency.value) {
    case 'USD':
      convertCurrency(amount.value, USD, 'US$')
      break

    case 'EUR':
      convertCurrency(amount.value, EUR, '€')
      break

    case 'GBP':
      convertCurrency(amount.value, GBP, '£')
      break

    default:
      break
  }
}

function convertCurrency(amount, price, symbol) {
  console.log(amount, price, symbol)
}
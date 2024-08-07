const amount = document.getElementById('amount')

amount.addEventListener('input', () => {
  const hasCaractersRegex = /\D+/g
  amount.value = amount.value.replace(hasCaractersRegex, '')
})

export function phoneFormat(value: string) {
  let inputValue = value

  inputValue = inputValue.replace(/\D/g, '')
  inputValue = inputValue.replace(/(^\d{2})(\d)/, '($1) $2')
  inputValue = inputValue.replace(/(\d{4,5})(\d{4}$)/, '$1-$2')

  return inputValue
}

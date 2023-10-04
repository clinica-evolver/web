export const maskDate = (value: string) => {
  const date = value.replace(/\D/g, '').slice(0, 10)
  if (date.length >= 5) {
    return `${date.slice(0, 2)}/${date.slice(2, 4)}/${date.slice(4)}`
  } else if (date.length >= 3) {
    return `${date.slice(0, 2)}/${date.slice(2)}`
  }

  return date
}

export const formatDateToISO = (value: string) => {
  const [day, month, year] = value.split('/')
  const formattedDay = String(Number(day) + 1)
  const convertedDay =
    formattedDay.length === 1 ? `0${formattedDay}` : formattedDay

  return `${year}-${month}-${convertedDay}T00:00:00Z`
}

export const formatIsoToDate = (value: string) => {
  const [year, month, day] = value.split('-')
  const [splittedDay] = day.split('T')

  return `${splittedDay}/${month}/${year}`
}

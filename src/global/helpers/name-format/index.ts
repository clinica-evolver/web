export function formatName(name: string) {
  const completeName = name.split(' ')

  const firstName = completeName[0]
  const lastName = completeName[completeName.length - 1]

  const nameAcronym = firstName[0] + lastName[0]

  return { resumedName: `${firstName} ${lastName}`, nameAcronym }
}

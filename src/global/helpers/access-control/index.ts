import { Access } from '@enums/access'

interface AccessControlParams {
  userAccess: number
  requiredAccess: Access[]
}

export function hasAccess({
  userAccess,
  requiredAccess,
}: AccessControlParams): boolean {
  return requiredAccess.includes(userAccess)
}

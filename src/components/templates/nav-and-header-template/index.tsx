import React, { useMemo } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

import { NavAndHeaderContainer } from './styles'
import { RoutesPath } from '@enums/routes'
import { Logo } from '@atoms/logo'
import { Button } from '@atoms/button'
import { useTheme } from 'styled-components'
import { useLoginStore } from '@modules/login/store'
import { formatName } from '@helpers/name-format'
import { Access } from '@enums/access'
import { hasAccess } from '@helpers/access-control'

const navigationOptions = [
  {
    label: 'Administrativo',
    path: RoutesPath.ADMIN,
    access: [Access.ADMIN],
  },
  {
    label: 'Profissionais',
    path: RoutesPath.EMPLOYEE,
    access: [Access.EMPLOYEE, Access.ADMIN],
  },
  {
    label: 'Pacientes',
    path: RoutesPath.PATIENT,
    access: [Access.EMPLOYEE, Access.ADMIN],
  },
]

export function NavAndHeaderTemplate(): React.JSX.Element {
  const { color } = useTheme()
  const { logout, user } = useLoginStore()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate(RoutesPath.LOGIN)
  }

  const { resumedName, nameAcronym } = useMemo(() => {
    if (!user) {
      return { resumedName: '', nameAcronym: '' }
    }

    return formatName(user.name)
  }, [])

  const pages = useMemo(() => {
    return navigationOptions.filter((option) => {
      return hasAccess({
        requiredAccess: option.access,
        userAccess: user!.access,
      })
    })
  }, [])

  console.log(pages, user?.access)

  return (
    <NavAndHeaderContainer>
      <nav>
        <div className="container-logo">
          <Logo />
        </div>

        <ul>
          {pages.map((page) => (
            <li key={page.path}>
              <Link to={page.path}>{page.label}</Link>
            </li>
          ))}
        </ul>

        <div className="container-user">
          <section>
            <span className="initials">{nameAcronym}</span>
            <span className="name">{resumedName}</span>
          </section>

          <Button
            backgroundColor={color.red500}
            type="button"
            marginTop={20}
            onClick={handleLogout}
          >
            Sair
          </Button>
        </div>
      </nav>
      <div className="template-content">
        <Outlet />
      </div>
    </NavAndHeaderContainer>
  )
}

import React from 'react'
import { Link, Outlet } from 'react-router-dom'

import { NavAndHeaderContainer } from './styles'
import { RoutesPath } from '@enums/routes'
import { Logo } from '@atoms/logo'

const navigationOptions = [
  {
    label: 'Administrativo',
    path: RoutesPath.ADMIN,
  },
  {
    label: 'Profissionais',
    path: RoutesPath.EMPLOYEE,
  },
  {
    label: 'Pacientes',
    path: RoutesPath.PATIENT,
  },
]

export function NavAndHeaderTemplate(): React.JSX.Element {
  return (
    <NavAndHeaderContainer>
      <nav>
        <div className="container-logo">
          <Logo />
        </div>

        <ul>
          {navigationOptions.map((option) => (
            <li key={option.path}>
              <Link to={option.path}>{option.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="template-content">
        <Outlet />
      </div>
    </NavAndHeaderContainer>
  )
}

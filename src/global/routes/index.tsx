import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Login } from '@modules/login/screen'
import { Admin } from '@modules/admin/screen'
import { Patient } from '@modules/patient/screen'
import { Employee } from '@modules/employee/screen'
import { NavAndHeaderTemplate } from '@templates/nav-and-header-template'
import { RoutesPath } from '@enums/routes'

export const router = createBrowserRouter([
  {
    path: RoutesPath.LOGIN,
    element: <Login />,
  },
  {
    path: RoutesPath.PRIVATE,
    element: <NavAndHeaderTemplate />,
    children: [
      {
        path: RoutesPath.ADMIN,
        element: <Admin />,
      },
      {
        path: RoutesPath.EMPLOYEE,
        element: <Employee />,
      },
      {
        path: RoutesPath.PATIENT,
        element: <Patient />,
      },
    ],
  },
])

export function Routes(): React.JSX.Element {
  return <RouterProvider router={router} />
}

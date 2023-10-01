import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Login } from '../../modules/login/screen'
import { Admin } from '../../modules/admin/screen'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/admin',
    element: <Admin />,
  },
])

export function Routes(): React.JSX.Element {
  return <RouterProvider router={router} />
}

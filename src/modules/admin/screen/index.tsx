import React, { useMemo, useState } from 'react'

import { Wrapper } from './styles'
import { useAdminStore } from '../store/store'

export function Admin(): React.JSX.Element {
  const { getAdmins, admins } = useAdminStore()

  const [loading, setLoading] = useState(true)

  const response = useMemo(async () => {
    try {
      await getAdmins()
      return admins
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
      }
    } finally {
      setLoading(false)
    }
  }, [])

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <Wrapper>
      <h1>Admin</h1>
    </Wrapper>
  )
}

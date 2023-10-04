import React, { useEffect, useState } from 'react'
import { useTheme } from 'styled-components'

import { Wrapper } from './styles'
import { useAdminStore } from '../store/store'
import { Title } from '../../../components/atoms/title'
import { SubTitle } from '../../../components/atoms/sub-title'
import { Input } from '../../../components/molecules/input'
import { Button } from '../../../components/atoms/button'
import { IconButton } from '../../../components/atoms/icon-button'
import editIMG from '../../../assets/icons/pencil.png'
import deleteIMG from '../../../assets/icons/trash.png'
import viewIMG from '../../../assets/icons/see.png'
import { DrawerCreateAdmin } from '../components/drawer-create-admin'

export function Admin(): React.JSX.Element {
  const { getAdmins, admins } = useAdminStore()
  const { color } = useTheme()

  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [createAdminDrawer, setCreateAdminDrawer] = useState(false)

  useEffect(() => {
    getAdmins()
      .catch((error) => {
        if (error instanceof Error) {
          console.log(error.message)
        }
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (!admins) {
    return <h1>Nenhum admin encontrado</h1>
  }

  return (
    <Wrapper>
      <Title>Admin</Title>

      <section className="action-area">
        <div className="search">
          <SubTitle>Buscar</SubTitle>
          <Input
            placeholder="Digite o nome do admin"
            value={search}
            onChange={(inputProps) => setSearch(inputProps.target.value)}
          />
        </div>

        <div className="buttons">
          <Button type="button" onClick={() => setCreateAdminDrawer(true)}>
            Criar admin
          </Button>
        </div>
      </section>

      <section className="table-area">
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Função</th>
              <th>Telefone</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            {admins.map((admin) => (
              <tr key={admin.id}>
                <td>{admin.name}</td>
                <td>{admin.email}</td>
                <td>{admin.role}</td>
                <td>{admin.phone}</td>
                <td className="action-buttons">
                  <IconButton image={editIMG} />
                  <IconButton
                    image={deleteIMG}
                    backgroundcolor={color.red500}
                  />
                  <IconButton image={viewIMG} backgroundcolor={color.gray300} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <DrawerCreateAdmin
        onClose={() => setCreateAdminDrawer(false)}
        isOpen={createAdminDrawer}
      />
    </Wrapper>
  )
}

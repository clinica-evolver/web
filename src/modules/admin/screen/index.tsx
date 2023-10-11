import React, { useEffect, useState } from 'react'
import { useTheme } from 'styled-components'

import { Title } from '@atoms/title'
import { Button } from '@atoms/button'
import { Input } from '@molecules/input'
import { SubTitle } from '@atoms/sub-title'
import { IconButton } from '@atoms/icon-button'
import viewIMG from '@assets/icons/see.png'
import editIMG from '@assets/icons/pencil.png'
import deleteIMG from '@assets/icons/trash.png'
import { useAdminStore } from '../store'
import { DrawerCreateAdmin } from '../components/drawer-create-admin'
import { DrawerSeeDetails } from '../components/drawer-see-details'
import { DrawerDeleteAmdin } from '../components/drawer-delete-admin'
import { DrawerEditAdmin } from '../components/drawer-edit-admin'
import { Wrapper } from './styles'

export function Admin(): React.JSX.Element {
  const { getAdmins, admins } = useAdminStore()
  const { color } = useTheme()

  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [createAdminDrawer, setCreateAdminDrawer] = useState(false)
  const [seeDetailsDrawer, setSeeDetailsDrawer] = useState(false)
  const [deleteAmdinDrawer, setDeleteAmdinDrawer] = useState(false)
  const [editAdminDrawer, setEditAdminDrawer] = useState(false)
  const [selectedAdmin, setSelectedAdmin] =
    useState<Admin.Store.AdminListParams>()

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

  const handleSeeDetails = (admin: Admin.Store.AdminListParams) => {
    setSeeDetailsDrawer(true)
    setSelectedAdmin(admin)
  }

  const handleDeleteAmdin = (admin: Admin.Store.AdminListParams) => {
    setDeleteAmdinDrawer(true)
    setSelectedAdmin(admin)
  }

  const handleEditAdmin = (admin: Admin.Store.AdminListParams) => {
    setEditAdminDrawer(true)
    setSelectedAdmin(admin)
  }

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (!admins) {
    return <h1>Nenhum admin encontrado</h1>
  }

  return (
    <Wrapper>
      <Title>Administrativo</Title>

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
                  <IconButton
                    image={editIMG}
                    onClick={() => handleEditAdmin(admin)}
                  />
                  <IconButton
                    image={deleteIMG}
                    backgroundcolor={color.red500}
                    onClick={() => handleDeleteAmdin(admin)}
                  />
                  <IconButton
                    image={viewIMG}
                    backgroundcolor={color.gray300}
                    onClick={() => handleSeeDetails(admin)}
                  />
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
      {selectedAdmin && (
        <DrawerSeeDetails
          selectedAdmin={selectedAdmin}
          onClose={() => setSeeDetailsDrawer(false)}
          isOpen={seeDetailsDrawer}
        />
      )}
      {selectedAdmin && (
        <DrawerDeleteAmdin
          selectedAdmin={selectedAdmin}
          onClose={() => setDeleteAmdinDrawer(false)}
          isOpen={deleteAmdinDrawer}
        />
      )}
      {selectedAdmin && (
        <DrawerEditAdmin
          selectedAdmin={selectedAdmin}
          onClose={() => setEditAdminDrawer(false)}
          isOpen={editAdminDrawer}
        />
      )}
    </Wrapper>
  )
}

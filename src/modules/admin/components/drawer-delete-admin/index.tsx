import React, { useState } from 'react'
import { toast } from 'react-toastify'

import { Drawer } from '@molecules/drawer'
import { Button } from '@atoms/button'
import { useAdminStore } from '../../store'
import { ContainerText } from './styles'

interface DrawerDeleteAmdinProps {
  onClose: () => void
  isOpen: boolean
  selectedAdmin: Admin.Store.AdminListParams
}

export function DrawerDeleteAmdin({
  onClose,
  isOpen,
  selectedAdmin,
}: DrawerDeleteAmdinProps): React.JSX.Element {
  const { deleteAdmin } = useAdminStore()

  const [isLoading, setIsLoading] = useState(false)

  const handleDeleteAmdin = async () => {
    setIsLoading(true)

    try {
      await deleteAdmin(selectedAdmin.id)
      toast.success('Admin exluido com sucesso')
      onClose()
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message)
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Drawer title="Deletar admin" onClose={onClose} isOpen={isOpen}>
      <ContainerText>
        <p>Tem certeza que deseja excluir esse admin ({selectedAdmin.name})?</p>

        <p>
          Essa ação é irreversível e você precisará criar o usuário de novo se
          precisar dele.
        </p>
      </ContainerText>

      <Button type="button" onClick={handleDeleteAmdin} loading={isLoading}>
        Sim, Excluir!
      </Button>
    </Drawer>
  )
}

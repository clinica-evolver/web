import React, { useState } from 'react'
import { toast } from 'react-toastify'

import { Drawer } from '@molecules/drawer'
import { Button } from '@atoms/button'
import { useEmployeeStore } from '../../store'
import { ContainerText } from './styles'

interface DrawerDeleteEmployeeProps {
  onClose: () => void
  isOpen: boolean
  selectedEmployee: Employee.Store.EmployeeListParams
}

export function DrawerDeleteEmployee({
  onClose,
  isOpen,
  selectedEmployee,
}: DrawerDeleteEmployeeProps): React.JSX.Element {
  const { deleteEmployee } = useEmployeeStore()

  const [isLoading, setIsLoading] = useState(false)

  const handleDeleteEmployee = async () => {
    setIsLoading(true)

    try {
      await deleteEmployee(selectedEmployee.id)
      toast.success('Profissional exluido com sucesso')
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
    <Drawer title="Deletar profissional" onClose={onClose} isOpen={isOpen}>
      <ContainerText>
        <p>
          Tem certeza que deseja excluir esse profissional (
          {selectedEmployee.name})?
        </p>

        <p>
          Essa ação é irreversível e você precisará criar o usuário de novo se
          precisar dele.
        </p>
      </ContainerText>

      <Button type="button" onClick={handleDeleteEmployee} loading={isLoading}>
        Sim, Excluir!
      </Button>
    </Drawer>
  )
}

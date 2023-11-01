import React, { useState } from 'react'
import { toast } from 'react-toastify'

import { Drawer } from '@molecules/drawer'
import { Button } from '@atoms/button'
import { usePatientStore } from '../../store'
import { ContainerText } from './styles'

interface DrawerDeletePatientProps {
  onClose: () => void
  isOpen: boolean
  selectedPatient: Patient.Store.PatientListParams
}

export function DrawerDeletePatient({
  onClose,
  isOpen,
  selectedPatient,
}: DrawerDeletePatientProps): React.JSX.Element {
  const { deletePatient } = usePatientStore()

  const [isLoading, setIsLoading] = useState(false)

  const handleDeletePatient = async () => {
    setIsLoading(true)

    try {
      await deletePatient(selectedPatient.id)
      toast.success('Paciente exluido com sucesso')
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
    <Drawer title="Deletar paciente" onClose={onClose} isOpen={isOpen}>
      <ContainerText>
        <p>
          Tem certeza que deseja excluir esse paciente ({selectedPatient.name})?
        </p>

        <p>
          Essa ação é irreversível e você precisará criar o usuário de novo se
          precisar dele.
        </p>
      </ContainerText>

      <Button type="button" onClick={handleDeletePatient} loading={isLoading}>
        Sim, Excluir!
      </Button>
    </Drawer>
  )
}

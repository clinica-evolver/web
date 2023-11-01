import React, { useState } from 'react'
import { toast } from 'react-toastify'

import { Drawer } from '@molecules/drawer'
import { Input } from '@molecules/input'
import { Button } from '@atoms/button'
import { phoneFormat } from '@helpers/phone-format'
import { usePatientStore } from '../../store'
import { Form } from './styles'

interface DrawerEditPatientProps {
  onClose: () => void
  isOpen: boolean
  selectedPatient: Patient.Store.PatientListParams
}

export function DrawerEditPatient({
  onClose,
  isOpen,
  selectedPatient,
}: DrawerEditPatientProps): React.JSX.Element {
  const { editPatient } = usePatientStore()

  const [email, setEmail] = useState(selectedPatient.email)
  const [phone, setPhone] = useState(selectedPatient.phone)
  const [address, setAddress] = useState(selectedPatient.address)
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleEditPatient = async (event: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true)
    event.preventDefault()

    if (password !== confirmPassword) {
      return toast.error('As senhas precisam ser iguais')
    }

    const data = {
      id: selectedPatient.id,
      email,
      phone,
      access: 3,
      address,
    }

    if (password.length) {
      Object.assign(data, { password })
    }

    try {
      await editPatient(data)
      toast.success('Paciente editado com sucesso')
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
    <Drawer title="Editar um paciente" onClose={onClose} isOpen={isOpen}>
      <Form onSubmit={handleEditPatient}>
        <div className="scroll">
          <Input
            type="email"
            marginbottom={1}
            label="E-mail"
            value={email}
            onChange={(inputProps) => setEmail(inputProps.target.value)}
          />
          <Input
            maxLength={15}
            marginbottom={1}
            label="Telefone"
            value={phone}
            onChange={(inputProps) =>
              setPhone(phoneFormat(inputProps.target.value))
            }
          />
          <Input
            marginbottom={1}
            label="Endereço"
            value={address}
            onChange={(inputProps) => setAddress(inputProps.target.value)}
          />
          <div className="password-area">
            <Input
              marginbottom={1}
              type="password"
              label="Senha"
              value={password}
              onChange={(inputProps) => setPassword(inputProps.target.value)}
            />
            <Input
              marginbottom={1}
              type="password"
              label="Confirmar senha"
              value={confirmPassword}
              onChange={(inputProps) =>
                setConfirmPassword(inputProps.target.value)
              }
            />
          </div>
          <Button type="submit" loading={isLoading}>
            Salvar
          </Button>
        </div>
      </Form>
    </Drawer>
  )
}

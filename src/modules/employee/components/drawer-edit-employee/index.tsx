import React, { useState } from 'react'
import { toast } from 'react-toastify'

import { Drawer } from '@molecules/drawer'
import { Input } from '@molecules/input'
import { Button } from '@atoms/button'
import { phoneFormat } from '@helpers/phone-format'
import { useEmployeeStore } from '../../store'
import { Form } from './styles'

interface DrawerEditEmployeeProps {
  onClose: () => void
  isOpen: boolean
  selectedEmployee: Employee.Store.EmployeeListParams
}

export function DrawerEditEmployee({
  onClose,
  isOpen,
  selectedEmployee,
}: DrawerEditEmployeeProps): React.JSX.Element {
  const { editEmployee } = useEmployeeStore()

  const [email, setEmail] = useState(selectedEmployee.email)
  const [phone, setPhone] = useState(selectedEmployee.phone)
  const [role, setRole] = useState(selectedEmployee.role)
  const [descriptionRole, setDescriptionRole] = useState(
    selectedEmployee.descriptionRole,
  )
  const [address, setAddress] = useState(selectedEmployee.address)
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleEditEmployee = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    setIsLoading(true)
    event.preventDefault()

    if (password !== confirmPassword) {
      return toast.error('As senhas precisam ser iguais')
    }

    const data = {
      id: selectedEmployee.id,
      email,
      phone,
      access: 3,
      role,
      descriptionRole,
      address,
    }

    if (password.length) {
      Object.assign(data, { password })
    }

    try {
      await editEmployee(data)
      toast.success('Profissional editado com sucesso')
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
    <Drawer title="Editar um Profissional" onClose={onClose} isOpen={isOpen}>
      <Form onSubmit={handleEditEmployee}>
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
            label="Função"
            value={role}
            onChange={(inputProps) => setRole(inputProps.target.value)}
          />
          <Input
            marginbottom={1}
            label="Descrição da função"
            value={descriptionRole}
            onChange={(inputProps) =>
              setDescriptionRole(inputProps.target.value)
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

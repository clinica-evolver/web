import React, { useState } from 'react'
import { toast } from 'react-toastify'

import { Form } from './styles'
import { Drawer } from '../../../../components/molecules/drawer'
import { Input } from '../../../../components/molecules/input'
import { Button } from '../../../../components/atoms/button'
import { useAdminStore } from '../../store/store'
import {
  formatDateToISO,
  maskDate,
} from '../../../../global/helpers/dateFormat'
import { phoneFormat } from '../../../../global/helpers/phoneFormat'
import { Select } from '../../../../components/molecules/select'

interface DrawerCreateAdminProps {
  onClose: () => void
  isOpen: boolean
}

export function DrawerCreateAdmin({
  onClose,
  isOpen,
}: DrawerCreateAdminProps): React.JSX.Element {
  const { createAdmin } = useAdminStore()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [phone, setPhone] = useState('')
  const [role, setRole] = useState('')
  const [descriptionRole, setDescriptionRole] = useState('')
  const [registerCode, setRegisterCode] = useState('')
  const [address, setAddress] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [gender, setGender] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleCreateAdmin = async (event: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true)
    event.preventDefault()

    if (password !== confirmPassword) {
      return toast.error('As senhas precisam ser iguais')
    }

    try {
      await createAdmin({
        name,
        email,
        dateBirth: formatDateToISO(dateOfBirth),
        phone,
        access: 1,
        gender,
        role,
        descriptionRole,
        registerCode,
        address,
        password,
      })
      onClose()
      toast.success('Admin criado com sucesso')
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message)
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Drawer title="Criar um Admin" onClose={onClose} isOpen={isOpen}>
      <Form onSubmit={handleCreateAdmin}>
        <div className="scroll">
          <Input
            marginbottom={1}
            label="Nome"
            value={name}
            onChange={(inputProps) => setName(inputProps.target.value)}
          />
          <Input
            type="email"
            marginbottom={1}
            label="E-mail"
            value={email}
            onChange={(inputProps) => setEmail(inputProps.target.value)}
          />
          <Input
            maxLength={10}
            marginbottom={1}
            label="Data de nascimento"
            value={dateOfBirth}
            onChange={(inputProps) =>
              setDateOfBirth(maskDate(inputProps.target.value))
            }
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
          <Select
            marginbottom={1}
            label="Sexo"
            options={[
              { value: 'male', label: 'Masculino' },
              { value: 'female', label: 'Feminino' },
            ]}
            onChange={setGender}
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
            label="Código de registro"
            value={registerCode}
            onChange={(inputProps) => setRegisterCode(inputProps.target.value)}
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
            Criar
          </Button>
        </div>
      </Form>
    </Drawer>
  )
}

import React, { useState } from 'react'
import { toast } from 'react-toastify'

import { Drawer } from '@molecules/drawer'
import { Select } from '@molecules/select'
import { Input } from '@molecules/input'
import { Button } from '@atoms/button'
import { formatDateToISO, maskDate } from '@helpers/date-format'
import { phoneFormat } from '@helpers/phone-format'
import { usePatientStore } from '../../store'
import { Form } from './styles'

interface DrawerCreatePatientProps {
  onClose: () => void
  isOpen: boolean
}

export function DrawerCreatePatient({
  onClose,
  isOpen,
}: DrawerCreatePatientProps): React.JSX.Element {
  const { createPatient } = usePatientStore()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [gender, setGender] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleCreatePatient = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    setIsLoading(true)
    event.preventDefault()

    if (password !== confirmPassword) {
      return toast.error('As senhas precisam ser iguais')
    }

    try {
      await createPatient({
        name,
        email,
        dateBirth: formatDateToISO(dateOfBirth),
        phone,
        access: 3,
        gender,
        address,
        password,
      })
      onClose()
      toast.success('Pacient criado com sucesso')
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message)
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Drawer title="Criar um pacient" onClose={onClose} isOpen={isOpen}>
      <Form onSubmit={handleCreatePatient}>
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

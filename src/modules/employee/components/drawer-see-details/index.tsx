import React from 'react'

import { Drawer } from '@molecules/drawer'
import { InfoAndValue } from '@molecules/InfoAndValue'
import { formatIsoToDate } from '@helpers/date-format'
import { genderFormat } from '@helpers/gender-format'
import { DetailsSection } from './styles'

interface DrawerSeeDetailsProps {
  onClose: () => void
  isOpen: boolean
  selectedEmployee: Employee.Store.EmployeeListParams
}

export function DrawerSeeDetails({
  onClose,
  isOpen,
  selectedEmployee,
}: DrawerSeeDetailsProps): React.JSX.Element {
  const gender = genderFormat(selectedEmployee.gender) || 'Não informado'

  return (
    <Drawer title="Ver detalhes do admin" onClose={onClose} isOpen={isOpen}>
      <DetailsSection>
        <InfoAndValue title="Nome" value={selectedEmployee.name} />
        <InfoAndValue
          title="Data de nascimento"
          value={formatIsoToDate(selectedEmployee.dateBirth)}
        />
        <InfoAndValue title="Endereço" value={selectedEmployee.address} />
        <InfoAndValue title="E-mail" value={selectedEmployee.email} />
        <InfoAndValue title="Telefone" value={selectedEmployee.phone} />
        <InfoAndValue title="Sexo" value={gender} />
        <InfoAndValue title="Função" value={selectedEmployee.role} />
        <InfoAndValue
          title="Descrição da função"
          value={selectedEmployee.descriptionRole}
        />
        <InfoAndValue
          title="Código de registro"
          value={selectedEmployee.registerCode}
        />
        <InfoAndValue
          title="Data de criação"
          value={formatIsoToDate(selectedEmployee.createdAt)}
        />
        <InfoAndValue
          title="Ultima atualização"
          value={formatIsoToDate(selectedEmployee.updatedAt)}
        />
      </DetailsSection>
    </Drawer>
  )
}

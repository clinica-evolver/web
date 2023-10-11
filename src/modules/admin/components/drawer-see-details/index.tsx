import React from 'react'

import { Drawer } from '@molecules/drawer'
import { InfoAndValue } from '@molecules/InfoAndValue'
import { formatIsoToDate } from '@helpers/date-format'
import { genderFormat } from '@helpers/gender-format'
import { DetailsSection } from './styles'

interface DrawerSeeDetailsProps {
  onClose: () => void
  isOpen: boolean
  selectedAdmin: Admin.Store.AdminListParams
}

export function DrawerSeeDetails({
  onClose,
  isOpen,
  selectedAdmin,
}: DrawerSeeDetailsProps): React.JSX.Element {
  const gender = genderFormat(selectedAdmin.gender) || 'Não informado'

  return (
    <Drawer title="Ver detalhes do admin" onClose={onClose} isOpen={isOpen}>
      <DetailsSection>
        <InfoAndValue title="Nome" value={selectedAdmin.name} />
        <InfoAndValue
          title="Data de nascimento"
          value={formatIsoToDate(selectedAdmin.dateBirth)}
        />
        <InfoAndValue title="Endereço" value={selectedAdmin.address} />
        <InfoAndValue title="E-mail" value={selectedAdmin.email} />
        <InfoAndValue title="Telefone" value={selectedAdmin.phone} />
        <InfoAndValue title="Sexo" value={gender} />
        <InfoAndValue title="Função" value={selectedAdmin.role} />
        <InfoAndValue
          title="Descrição da função"
          value={selectedAdmin.descriptionRole}
        />
        <InfoAndValue
          title="Código de registro"
          value={selectedAdmin.registerCode}
        />
        <InfoAndValue
          title="Data de criação"
          value={formatIsoToDate(selectedAdmin.createdAt)}
        />
        <InfoAndValue
          title="Ultima atualização"
          value={formatIsoToDate(selectedAdmin.updatedAt)}
        />
      </DetailsSection>
    </Drawer>
  )
}

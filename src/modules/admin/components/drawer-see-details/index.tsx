import React from 'react'

import { Drawer } from '../../../../components/molecules/drawer'
import { InfoAndValue } from '../../../../components/molecules/InfoAndValue'
import { formatIsoToDate } from '../../../../global/helpers/dateFormat'
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
        <InfoAndValue title="Sexo" value={selectedAdmin.gender} />
        <InfoAndValue title="Função" value={selectedAdmin.role} />
        <InfoAndValue
          title="Descrição da função"
          value={selectedAdmin.descriptionRole}
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

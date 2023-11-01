import React from 'react'

import { Drawer } from '@molecules/drawer'
import { InfoAndValue } from '@molecules/InfoAndValue'
import { formatIsoToDate } from '@helpers/date-format'
import { genderFormat } from '@helpers/gender-format'
import { DetailsSection } from './styles'

interface DrawerSeeDetailsProps {
  onClose: () => void
  isOpen: boolean
  selectedPatient: Patient.Store.PatientListParams
}

export function DrawerSeeDetails({
  onClose,
  isOpen,
  selectedPatient,
}: DrawerSeeDetailsProps): React.JSX.Element {
  const gender = genderFormat(selectedPatient.gender) || 'Não informado'

  return (
    <Drawer title="Ver detalhes do admin" onClose={onClose} isOpen={isOpen}>
      <DetailsSection>
        <InfoAndValue title="Nome" value={selectedPatient.name} />
        <InfoAndValue
          title="Data de nascimento"
          value={formatIsoToDate(selectedPatient.dateBirth)}
        />
        <InfoAndValue title="Endereço" value={selectedPatient.address} />
        <InfoAndValue title="E-mail" value={selectedPatient.email} />
        <InfoAndValue title="Telefone" value={selectedPatient.phone} />
        <InfoAndValue title="Sexo" value={gender} />
        <InfoAndValue
          title="Data de criação"
          value={formatIsoToDate(selectedPatient.createdAt)}
        />
        <InfoAndValue
          title="Ultima atualização"
          value={formatIsoToDate(selectedPatient.updatedAt)}
        />
      </DetailsSection>
    </Drawer>
  )
}

import React, { useEffect, useState } from 'react'
import { useTheme } from 'styled-components'

import { Button } from '@atoms/button'
import { Input } from '@molecules/input'
import { SubTitle } from '@atoms/sub-title'
import { IconButton } from '@atoms/icon-button'
import { Header } from '@molecules/header'
import viewIMG from '@assets/icons/see.png'
import editIMG from '@assets/icons/pencil.png'
import deleteIMG from '@assets/icons/trash.png'
import { DataNotFoundTemplate } from '@templates/data-not-found'
import { usePatientStore } from '../store'
import { DrawerCreatePatient } from '../components/drawer-create-patient'
import { DrawerSeeDetails } from '../components/drawer-see-details'
import { DrawerDeletePatient } from '../components/drawer-delete-patient'
import { DrawerEditPatient } from '../components/drawer-edit-patient'
import { Wrapper } from './styles'

export function Patient(): React.JSX.Element {
  const { getPatients, patients } = usePatientStore()
  const { color } = useTheme()

  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [createPatientDrawer, setCreatePatientDrawer] = useState(false)
  const [seeDetailsDrawer, setSeeDetailsDrawer] = useState(false)
  const [deletePatientDrawer, setDeletePatientDrawer] = useState(false)
  const [editPatientDrawer, setEditPatientDrawer] = useState(false)
  const [selectPatient, setSelectPatient] =
    useState<Patient.Store.PatientListParams>()

  useEffect(() => {
    getPatients()
      .catch((error) => {
        if (error instanceof Error) {
          console.log(error.message)
        }
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  const handleSeeDetails = (patient: Patient.Store.PatientListParams) => {
    setSeeDetailsDrawer(true)
    setSelectPatient(patient)
  }

  const handleDeletePatient = (patient: Patient.Store.PatientListParams) => {
    setDeletePatientDrawer(true)
    setSelectPatient(patient)
  }

  const handleEditPatient = (patient: Patient.Store.PatientListParams) => {
    setEditPatientDrawer(true)
    setSelectPatient(patient)
  }

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <Wrapper>
      <Header title="Pacientes" />

      <section className="action-area">
        <div className="search">
          <SubTitle>Buscar</SubTitle>
          <Input
            placeholder="Digite o nome do pacientes"
            value={search}
            onChange={(inputProps) => setSearch(inputProps.target.value)}
          />
        </div>

        <div className="buttons">
          <Button type="button" onClick={() => setCreatePatientDrawer(true)}>
            Criar paciente
          </Button>
        </div>
      </section>

      {!patients ? (
        <DataNotFoundTemplate
          title="Nenhum paciente encontrado"
          message="Tente criar um novo paciente"
        />
      ) : (
        <section className="table-area">
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Telefone</th>
                <th>Ações</th>
              </tr>
            </thead>

            <tbody>
              {patients.map((patient) => (
                <tr key={patient.id}>
                  <td>{patient.name}</td>
                  <td>{patient.email}</td>
                  <td>{patient.phone}</td>
                  <td className="action-buttons">
                    <IconButton
                      image={editIMG}
                      onClick={() => handleEditPatient(patient)}
                    />
                    <IconButton
                      image={deleteIMG}
                      backgroundcolor={color.red500}
                      onClick={() => handleDeletePatient(patient)}
                    />
                    <IconButton
                      image={viewIMG}
                      backgroundcolor={color.gray300}
                      onClick={() => handleSeeDetails(patient)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}

      <DrawerCreatePatient
        onClose={() => setCreatePatientDrawer(false)}
        isOpen={createPatientDrawer}
      />
      {selectPatient && (
        <DrawerSeeDetails
          selectedPatient={selectPatient}
          onClose={() => setSeeDetailsDrawer(false)}
          isOpen={seeDetailsDrawer}
        />
      )}
      {selectPatient && (
        <DrawerDeletePatient
          selectedPatient={selectPatient}
          onClose={() => setDeletePatientDrawer(false)}
          isOpen={deletePatientDrawer}
        />
      )}
      {selectPatient && (
        <DrawerEditPatient
          selectedPatient={selectPatient}
          onClose={() => setEditPatientDrawer(false)}
          isOpen={editPatientDrawer}
        />
      )}
    </Wrapper>
  )
}

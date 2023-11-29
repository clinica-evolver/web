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
import { useEmployeeStore } from '../store'
import { DrawerCreateEmployee } from '../components/drawer-create-employee'
import { DrawerSeeDetails } from '../components/drawer-see-details'
import { DrawerDeleteEmployee } from '../components/drawer-delete-employee'
import { DrawerEditEmployee } from '../components/drawer-edit-employee'
import { Wrapper } from './styles'
import { DataNotFoundTemplate } from '@templates/data-not-found'

export function Employee(): React.JSX.Element {
  const { getEmployees, employees } = useEmployeeStore()
  const { color } = useTheme()

  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [createEmployeeDrawer, setCreateEmployeeDrawer] = useState(false)
  const [seeDetailsDrawer, setSeeDetailsDrawer] = useState(false)
  const [deleteEmployeeDrawer, setDeleteEmployeeDrawer] = useState(false)
  const [editEmployeeDrawer, setEditEmployeeDrawer] = useState(false)
  const [selectEmployee, setSelectEmployee] =
    useState<Employee.Store.EmployeeListParams>()

  useEffect(() => {
    getEmployees()
      .catch((error) => {
        if (error instanceof Error) {
          console.log(error.message)
        }
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  const handleSeeDetails = (employee: Employee.Store.EmployeeListParams) => {
    setSeeDetailsDrawer(true)
    setSelectEmployee(employee)
  }

  const handleDeleteEmployee = (
    employee: Employee.Store.EmployeeListParams,
  ) => {
    setDeleteEmployeeDrawer(true)
    setSelectEmployee(employee)
  }

  const handleEditEmployee = (employee: Employee.Store.EmployeeListParams) => {
    setEditEmployeeDrawer(true)
    setSelectEmployee(employee)
  }

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <Wrapper>
      <Header title="Profissionais" />

      <section className="action-area">
        <div className="search">
          <SubTitle>Buscar</SubTitle>
          <Input
            placeholder="Digite o nome do profissionais"
            value={search}
            onChange={(inputProps) => setSearch(inputProps.target.value)}
          />
        </div>

        <div className="buttons">
          <Button type="button" onClick={() => setCreateEmployeeDrawer(true)}>
            Criar profissional
          </Button>
        </div>
      </section>

      {!employees?.length ? (
        <DataNotFoundTemplate
          title="Nenhum profissional encontrado"
          message="Tente criar um novo profissional"
        />
      ) : (
        <section className="table-area">
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Função</th>
                <th>Telefone</th>
                <th>Ações</th>
              </tr>
            </thead>

            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.name}</td>
                  <td>{employee.email}</td>
                  <td>{employee.role}</td>
                  <td>{employee.phone}</td>
                  <td className="action-buttons">
                    <IconButton
                      image={editIMG}
                      onClick={() => handleEditEmployee(employee)}
                    />
                    <IconButton
                      image={deleteIMG}
                      backgroundcolor={color.red500}
                      onClick={() => handleDeleteEmployee(employee)}
                    />
                    <IconButton
                      image={viewIMG}
                      backgroundcolor={color.gray300}
                      onClick={() => handleSeeDetails(employee)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}

      <DrawerCreateEmployee
        onClose={() => setCreateEmployeeDrawer(false)}
        isOpen={createEmployeeDrawer}
      />
      {selectEmployee && (
        <DrawerSeeDetails
          selectedEmployee={selectEmployee}
          onClose={() => setSeeDetailsDrawer(false)}
          isOpen={seeDetailsDrawer}
        />
      )}
      {selectEmployee && (
        <DrawerDeleteEmployee
          selectedEmployee={selectEmployee}
          onClose={() => setDeleteEmployeeDrawer(false)}
          isOpen={deleteEmployeeDrawer}
        />
      )}
      {selectEmployee && (
        <DrawerEditEmployee
          selectedEmployee={selectEmployee}
          onClose={() => setEditEmployeeDrawer(false)}
          isOpen={editEmployeeDrawer}
        />
      )}
    </Wrapper>
  )
}

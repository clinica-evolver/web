declare namespace Employee {
  namespace Store {
    interface Employee {
      email: string
      name: string
      dateBirth: string
      address: string
      phone: string
      role: string
      descriptionRole: string
      registerCode: string
      gender: string
      access: number
    }

    interface EmployeeListParams extends Employee {
      id: string
      createdAt: string
      updatedAt: string
    }

    interface EmployeeCreateParams extends Employee {
      password: string
    }

    interface EmployeeEditParams {
      id: string
      email: string
      password?: string
      phone: string
      access: number
      role: string
      descriptionRole: string
      address: string
    }

    interface Action {
      getEmployees: () => Promise<void>
      createEmployee: (params: EmployeeCreateParams) => Promise<void>
      editEmployee: (params: EmployeeEditParams) => Promise<void>
      deleteEmployee: (id: string) => Promise<void>
    }

    interface State {
      employees?: EmployeeListParams[]
    }

    type Props = State & Action
  }
}

declare namespace Patient {
  namespace Store {
    interface Patient {
      email: string
      name: string
      dateBirth: string
      address: string
      phone: string
      gender: string
      access: number
    }

    interface PatientListParams extends Patient {
      id: string
      createdAt: string
      updatedAt: string
    }

    interface PatientCreateParams extends Patient {
      password: string
    }

    interface PatientEditParams {
      id: string
      email: string
      password?: string
      phone: string
      access: number
      address: string
    }

    interface Action {
      getPatients: () => Promise<void>
      createPatient: (params: PatientCreateParams) => Promise<void>
      editPatient: (params: PatientEditParams) => Promise<void>
      deletePatient: (id: string) => Promise<void>
    }

    interface State {
      patients?: PatientListParams[]
    }

    type Props = State & Action
  }
}

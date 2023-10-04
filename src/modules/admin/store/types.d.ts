declare namespace Admin {
  namespace Store {
    interface Admin {
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

    interface AdminListParams extends Admin {
      id: string
      createdAt: string
      updatedAt: string
    }

    interface AdminCreateParams extends Admin {
      password: string
    }

    interface AdminEditParams {
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
      getAdmins: () => Promise<void>
      createAdmin: (params: AdminCreateParams) => Promise<void>
      editAdmin: (params: AdminEditParams) => Promise<void>
      deleteAdmin: (id: string) => Promise<void>
    }

    interface State {
      admins?: AdminListParams[]
    }

    type Props = State & Action
  }
}

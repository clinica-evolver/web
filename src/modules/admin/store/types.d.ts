declare namespace Admin {
  namespace Store {
    interface Admin {
      id: string
      email: string
      name: string
      dateBirth: string
      address: string
      phone: string
      role: string
      descriptionRole: string
      registerCode: string
      gender: 'male' | 'female'
      accessId: number
    }

    interface AdminListParams extends Admin {
      createdAt: string
      updatedAt: string
    }

    interface AdminCreateParams extends Admin {
      password: string
    }

    interface AdminEditParams {
      id: string
      email: string
      password: string
      phone: string
      access: number
      role: string
      descriptionRole: string
      address: string
    }

    interface Action {
      getAdmins: () => Promise<void>
      createAdmin: (params: AdminCreate) => Promise<void>
      editAdmin: (params: AdminEditParams) => Promise<void>
      deleteAdmin: (id: string) => Promise<void>
    }

    interface State {
      admins?: Admin
    }

    type Props = State & Action
  }
}

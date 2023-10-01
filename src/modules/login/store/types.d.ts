declare namespace Login {
  namespace Store {
    interface Auth {
      token: string
    }

    interface LoginParams {
      email: string
      password: string
    }

    interface Action {
      login: (params: LoginParams) => Promise<void>
      logout: () => Promise<void>
    }

    interface State {
      auth?: Auth
    }

    type Props = State & Action
  }
}

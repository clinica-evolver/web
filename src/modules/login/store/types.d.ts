declare namespace Login {
  namespace Store {
    interface DecodedToken {
      id: string
      email: string
      name: string
      access: number
      iat: number
      exp: number
    }
    interface Auth {
      token: string
    }

    interface LoginParams {
      email: string
      password: string
    }

    interface Action {
      login: (params: LoginParams) => Promise<void>
      logout: () => void
    }

    interface State {
      auth?: Auth
      user?: DecodedToken
    }

    type Props = State & Action
  }
}

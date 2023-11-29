import { StateCreator } from 'zustand'
import { jwtDecode } from 'jwt-decode'

import { api } from '@services/api'

const initialSlice: Login.Store.State = {
  auth: undefined,
  user: undefined,
}

export const createLoginSlice: StateCreator<
  Login.Store.State,
  [],
  [],
  Login.Store.Action
> = (set) => ({
  ...initialSlice,
  login: async (params) => {
    try {
      const { data } = await api.post('/login', params)

      const decodedToken = jwtDecode<Login.Store.DecodedToken>(data.token)

      set({
        auth: {
          token: data.token,
        },
        user: { ...decodedToken },
      })
    } catch (error) {
      throw new Error('Erro ao fazer login')
    }
  },
  logout: () => {
    set(initialSlice)
  },
})

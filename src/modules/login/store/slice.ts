import { StateCreator } from 'zustand'

import { api } from '@services/api'

const initialSlice: Login.Store.State = {
  auth: undefined,
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

      set({ auth: data.token })
    } catch (error) {
      throw new Error('Erro ao fazer login')
    }
  },
  logout: async () => {},
})

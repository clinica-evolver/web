import { create } from 'zustand'
import { toast } from 'react-toastify'

import { api } from '../../../global/services/api'

export const useLoginStore = create<Login.Store.Props>()(() => ({
  auth: undefined,
  login: async (params) => {
    try {
      const { data } = await api.post('/login', params)

      console.log({ data })
    } catch (error) {
      toast.error('Erro ao fazer login')
    }
  },
  logout: async () => {},
}))

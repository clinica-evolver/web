import { StateCreator } from 'zustand'

import { api } from '../../../global/services/api'

const initialSlice: Admin.Store.State = {
  admins: undefined,
}

export const createAdminSlice: StateCreator<
  Admin.Store.State,
  [],
  [],
  Admin.Store.Action
> = (set) => ({
  ...initialSlice,
  getAdmins: async () => {
    try {
      const { data } = await api.get('/admin')

      set({ admins: data })
    } catch (error) {
      throw new Error('Erro ao buscar administradores')
    }
  },
  createAdmin: async (params: Admin.Store.AdminCreateParams) => {
    try {
      await api.post('/admin', params)
    } catch (error) {
      throw new Error('Erro ao criar administrador')
    }
  },
  editAdmin: async (params) => {
    try {
      await api.put(`/admin/${params.id}`, params)
    } catch (error) {
      throw new Error('Erro ao editar administrador')
    }
  },
  deleteAdmin: async (id) => {
    try {
      await api.delete(`/admin/${id}`)
    } catch (error) {
      throw new Error('Erro ao deletar administrador')
    }
  },
})

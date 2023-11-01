import { StateCreator } from 'zustand'

import { api } from '../../../global/services/api'

const initialSlice: Employee.Store.State = {
  employees: undefined,
}

export const createEmployeeSlice: StateCreator<
  Employee.Store.State,
  [],
  [],
  Employee.Store.Action
> = (set) => ({
  ...initialSlice,
  getEmployees: async () => {
    try {
      const { data } = await api.get('/employee')

      set({ employees: data })
    } catch (error) {
      throw new Error('Erro ao buscar profissionais')
    }
  },
  createEmployee: async (params: Admin.Store.AdminCreateParams) => {
    try {
      await api.post('/employee', params)
    } catch (error) {
      throw new Error('Erro ao criar profissional')
    }
  },
  editEmployee: async (params) => {
    try {
      await api.put('/employee', params)
    } catch (error) {
      throw new Error('Erro ao editar profissional')
    }
  },
  deleteEmployee: async (id) => {
    try {
      await api.delete(`/employee/${id}`)
    } catch (error) {
      throw new Error('Erro ao deletar profissional')
    }
  },
})

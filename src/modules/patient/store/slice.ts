import { StateCreator } from 'zustand'

import { api } from '../../../global/services/api'

const initialSlice: Patient.Store.State = {
  patients: undefined,
}

export const createPatientSlice: StateCreator<
  Patient.Store.State,
  [],
  [],
  Patient.Store.Action
> = (set) => ({
  ...initialSlice,
  getPatients: async () => {
    try {
      const { data } = await api.get('/patient')

      set({ patients: data })
    } catch (error) {
      throw new Error('Erro ao buscar pacientes')
    }
  },
  createPatient: async (params: Patient.Store.PatientCreateParams) => {
    try {
      await api.post('/patient', params)
    } catch (error) {
      throw new Error('Erro ao criar paciente')
    }
  },
  editPatient: async (params: Patient.Store.PatientEditParams) => {
    try {
      await api.put('/patient', params)
    } catch (error) {
      throw new Error('Erro ao editar paciente')
    }
  },
  deletePatient: async (id) => {
    try {
      await api.delete(`/patient/${id}`)
    } catch (error) {
      throw new Error('Erro ao deletar paciente')
    }
  },
})

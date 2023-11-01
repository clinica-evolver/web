import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import { createPatientSlice } from './slice'
import { Storage } from '../../../global/enums/storage'

export const usePatientStore = create<Patient.Store.Props>()(
  persist(
    (...storePros) => ({
      ...createPatientSlice(...storePros),
    }),
    {
      name: `${Storage.APP_KEY}:${Storage.PATIENT_KEY}`,
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
)

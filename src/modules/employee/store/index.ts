import { create } from 'zustand'

import { createJSONStorage, persist } from 'zustand/middleware'
import { createEmployeeSlice } from './slice'
import { Storage } from '../../../global/enums/storage'

export const useEmployeeStore = create<Employee.Store.Props>()(
  persist(
    (...storePros) => ({
      ...createEmployeeSlice(...storePros),
    }),
    {
      name: `${Storage.APP_KEY}:${Storage.EMPLOYEE_KEY}`,
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
)

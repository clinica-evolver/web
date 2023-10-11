import { create } from 'zustand'

import { createJSONStorage, persist } from 'zustand/middleware'
import { createAdminSlice } from './slice'
import { Storage } from '../../../global/enums/storage'

export const useAdminStore = create<Admin.Store.Props>()(
  persist(
    (...storePros) => ({
      ...createAdminSlice(...storePros),
    }),
    {
      name: `${Storage.APP_KEY}:${Storage.ADMIN_KEY}`,
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
)

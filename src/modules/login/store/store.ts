import { create } from 'zustand'

import { createJSONStorage, persist } from 'zustand/middleware'
import { createLoginSlice } from './slice'
import { Storage } from '../../../global/enums/storage'

export const useLoginStore = create<Login.Store.Props>()(
  persist(
    (...storePros) => ({
      ...createLoginSlice(...storePros),
    }),
    {
      name: `${Storage.APP_KEY}:${Storage.LOGIN_KEY}`,
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
)

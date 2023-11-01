import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import { Storage } from '@enums/storage'
import { createLoginSlice } from './slice'

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

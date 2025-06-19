import { create } from 'zustand'

type User = {
  email: string
  name: string
  role: string
  avatar: string
}

type UserStore = {
  user: User | null
  setUser: (user: User) => void
  logout: () => void
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user: User) => set({ user }),
  logout: () => {
    set({ user: null })
    localStorage.removeItem('user')
  },
}))

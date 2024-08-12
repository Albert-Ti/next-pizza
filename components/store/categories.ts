import {create} from 'zustand'

type State = {
  categoryName: string
}

type Action = {
  updateCategoryName: (value: string) => void
}

export const useCategoriesStore = create<State & Action>(set => ({
  categoryName: '',
  updateCategoryName: value => set(() => ({categoryName: value})),
}))

import { create } from 'zustand'
import { Champion } from '../types/Champion'

type Loading = {
  loading: boolean
  setLoading: (loading: boolean) => void
}

type RotationState = {
  allChampions: Champion[]
  setAllChampions: (champions: Champion[]) => void
  newChampions: Champion[]
  setNewChampions: (champions: Champion[]) => void
}

type MargeState = Loading & RotationState

export const useStateStore = create<MargeState>((set) => ({
  loading: false,
  allChampions: [],
  newChampions: [],
  setLoading: (loading) => set({ loading }),
  setAllChampions: (champions) => set({ allChampions: champions }),
  setNewChampions: (champions) => set({ newChampions: champions })
}))

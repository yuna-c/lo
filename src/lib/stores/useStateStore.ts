import { create } from 'zustand'
import { ChampionSkin } from '@/lib/types/Champion'

type Modal = {
  isModalOpen: boolean
  setIsModalOpen: (open: boolean) => void
}

type DetailState = {
  selectedSkin: ChampionSkin | null
  setSelectedSkin: (skin: ChampionSkin | null) => void
}

type MargeState = DetailState & Modal

export const useStateStore = create<MargeState>((set) => ({
  isModalOpen: false,
  setIsModalOpen: (open) => set({ isModalOpen: open }),
  selectedSkin: null,
  setSelectedSkin: (skin) => set({ selectedSkin: skin })
}))

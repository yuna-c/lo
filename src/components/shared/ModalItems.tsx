import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { ChampionDetail, ChampionSkin } from '@/lib/types/Champion'
import { apiUrl } from '@/lib/constants/constants'
import Image from 'next/image'

type Props = {
  selectedSkin: ChampionSkin | null
  isOpen: boolean
  onClose: () => void
  champion: ChampionDetail | null
}

export function ModalItems({ selectedSkin, isOpen, onClose, champion }: Props) {
  if (!isOpen || !selectedSkin || !champion) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{selectedSkin.name}</DialogTitle>
          <DialogDescription>아래에서 선택한 챔피언의 스킨을 확인하세요.</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center gap-4 py-4">
          <Image src={`${apiUrl}/cdn/img/champion/splash/${champion.id}_${selectedSkin.num}.jpg`} alt={selectedSkin.name} width={550} height={324} className="object-cover" quality={50} priority />
        </div>
        <DialogFooter>
          <Button type="button" onClick={onClose}>
            닫기
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

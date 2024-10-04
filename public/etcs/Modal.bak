import { useEffect, useState } from 'react'

type Props = {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export default function Modal({ isOpen, onClose, children }: Props) {
  const [show, setShow] = useState(isOpen)

  useEffect(() => {
    if (isOpen) {
      setShow(true)
      document.body.style.overflow = 'hidden'
    } else {
      const timer = setTimeout(() => setShow(false), 300)
      document.body.style.overflow = ''
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  if (!show) return null

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
      onClick={handleBackgroundClick}
    >
      <div className={`bg-white p-4 w-[80%] max-w-3xl mx-auto relative transition-transform duration-300 ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
        <button className="absolute top-2 right-2 text-sm text-black font-bold border rounded-full border-transparent w-6 h-6 bg-white" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  )
}

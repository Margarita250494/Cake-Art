import { useRef, useState } from 'react'

export const useSwitchingAnimation = (duration = 250) => {
  const [visible, setVisible] = useState(true)
  const timerRef = useRef<ReturnType<typeof setTimeout>>(null)

  const animate = (callback: () => void) => {
    if (timerRef.current) clearTimeout(timerRef.current)
    setVisible(false)
    timerRef.current = setTimeout(() => {
      callback()
      setVisible(true)
    }, duration)
  }

  return {visible, animate}
}
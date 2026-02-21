'use client'
import { useEffect } from 'react'

export default function InitialTransition() {
  useEffect(() => {
    const overlay = document.getElementById('page-transition-overlay')

    const timer = setTimeout(() => {
      overlay?.classList.remove('active')
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return null
}
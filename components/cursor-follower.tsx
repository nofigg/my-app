"use client"

import { useState, useEffect, useRef } from 'react'

export function CursorFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const followerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let animationFrameId: number

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const animateFollower = () => {
      if (followerRef.current) {
        const rect = followerRef.current.getBoundingClientRect()
        const followerX = rect.left + rect.width / 2
        const followerY = rect.top + rect.height / 2

        const dx = position.x - followerX
        const dy = position.y - followerY

        const newX = followerX + dx * 0.1
        const newY = followerY + dy * 0.1

        followerRef.current.style.transform = `translate(${newX - rect.width / 2}px, ${newY - rect.height / 2}px)`
      }

      animationFrameId = requestAnimationFrame(animateFollower)
    }

    window.addEventListener('mousemove', updatePosition)
    animationFrameId = requestAnimationFrame(animateFollower)

    return () => {
      window.removeEventListener('mousemove', updatePosition)
      cancelAnimationFrame(animationFrameId)
    }
  }, [position])

  // Only render on desktop
  if (typeof window !== 'undefined' && window.matchMedia('(min-width: 768px)').matches) {
    return (
      <>
        <div 
          ref={followerRef}
          className={`fixed pointer-events-none z-50 w-8 h-8 rounded-full transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 70%)',
            boxShadow: '0 0 10px rgba(255,255,255,0.5)',
          }}
        />
      </>
    )
  }

  return null
}

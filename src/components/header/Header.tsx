'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import DesktopNavigation from './DesktopNavigation'
import MobileMenu from './MobileMenu'
import MobileMenuButton from './MobileMenuButton'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Закрываем меню при изменении размера экрана
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { 
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header className="bg-gray-800 shadow-lg relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-gray-100">
              Kochka
            </Link>
          </div>

          <DesktopNavigation />
          <MobileMenuButton isOpen={isMenuOpen} onClick={toggleMenu} />
        </div>
      </div>

      <MobileMenu isOpen={isMenuOpen} onClose={toggleMenu} />
    </header>
  )
} 
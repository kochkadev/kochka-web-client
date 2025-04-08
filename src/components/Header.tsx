'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import MenuIcon from '@/assets/icons/menu.svg'
import CloseIcon from '@/assets/icons/close.svg'
import HomeIcon from '@/assets/icons/home.svg'
import WorkoutsIcon from '@/assets/icons/workouts.svg'
import ProfileIcon from '@/assets/icons/profile.svg'
import ArrowRightIcon from '@/assets/icons/arrow-right.svg'

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

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Главная
                </Link>
              </li>
              <li>
                <Link href="/workouts" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Тренировки
                </Link>
              </li>
              <li>
                <Link href="/profile" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Профиль
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Burger Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-300"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Открыть меню</span>
              {isMenuOpen ? (
                <CloseIcon className="h-6 w-6 transition-transform duration-300" />
              ) : (
                <MenuIcon className="h-6 w-6 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 backdrop-blur-[2px] z-40 transition-opacity duration-300 md:hidden ${
            isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={toggleMenu}
          style={{ zIndex: 40 }}
        />

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 w-72 h-full bg-gray-800 shadow-xl transform transition-transform duration-300 ease-in-out md:hidden ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ zIndex: 50 }}
        >
          <div className="flex flex-col h-full">
            <div className="p-4 border-b border-gray-700">
              <button
                onClick={toggleMenu}
                className="text-gray-300 hover:text-white focus:outline-none transition-colors duration-300 flex items-center gap-2"
              >
                <ArrowRightIcon className="h-5 w-5" />
                <span>Закрыть</span>
              </button>
            </div>
            <nav className="flex-1 px-4 py-6">
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="block px-4 py-3 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-300 flex items-center gap-3"
                    onClick={toggleMenu}
                  >
                    <HomeIcon className="h-5 w-5" />
                    Главная
                  </Link>
                </li>
                <li>
                  <Link
                    href="/workouts"
                    className="block px-4 py-3 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-300 flex items-center gap-3"
                    onClick={toggleMenu}
                  >
                    <WorkoutsIcon className="h-5 w-5" />
                    Тренировки
                  </Link>
                </li>
                <li>
                  <Link
                    href="/profile"
                    className="block px-4 py-3 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-300 flex items-center gap-3"
                    onClick={toggleMenu}
                  >
                    <ProfileIcon className="h-5 w-5" />
                    Профиль
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
} 
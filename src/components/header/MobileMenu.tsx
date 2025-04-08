import Link from 'next/link'
import CloseIcon from '@/assets/icons/close.svg'
import HomeIcon from '@/assets/icons/home.svg'
import WorkoutsIcon from '@/assets/icons/workouts.svg'
import ProfileIcon from '@/assets/icons/profile.svg'
import ArrowRightIcon from '@/assets/icons/arrow-right.svg'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <>
      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 backdrop-blur-[2px] z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        style={{ zIndex: 40 }}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-72 h-full bg-gray-800 shadow-xl transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ zIndex: 50 }}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-gray-700">
            <button
              onClick={onClose}
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
                  onClick={onClose}
                >
                  <HomeIcon className="h-5 w-5" />
                  Главная
                </Link>
              </li>
              <li>
                <Link
                  href="/workouts"
                  className="block px-4 py-3 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-300 flex items-center gap-3"
                  onClick={onClose}
                >
                  <WorkoutsIcon className="h-5 w-5" />
                  Тренировки
                </Link>
              </li>
              <li>
                <Link
                  href="/profile"
                  className="block px-4 py-3 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-300 flex items-center gap-3"
                  onClick={onClose}
                >
                  <ProfileIcon className="h-5 w-5" />
                  Профиль
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
} 
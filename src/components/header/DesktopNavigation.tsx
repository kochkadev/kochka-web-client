import Link from 'next/link'

export default function DesktopNavigation() {
  return (
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
  )
} 
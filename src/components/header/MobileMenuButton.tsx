import MenuIcon from '@/assets/icons/menu.svg'

interface MobileMenuButtonProps {
  isOpen: boolean
  onClick: () => void
}

export default function MobileMenuButton({ isOpen, onClick }: MobileMenuButtonProps) {
  return (
    <div className="md:hidden">
      <button
        onClick={onClick}
        className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-300"
        aria-expanded={isOpen}
      >
        <span className="sr-only">Открыть меню</span>
          <MenuIcon className="h-6 w-6 transition-transform duration-300" />
      </button>
    </div>
  )
} 
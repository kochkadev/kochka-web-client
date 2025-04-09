'use client'

import Link from 'next/link'
import ArrowLeftIcon from '@/assets/icons/arrow-left.svg'

interface BackButtonProps {
  href: string
  label: string
}

export default function BackButton({ href, label }: BackButtonProps) {
  return (
    <Link 
      href={href} 
      className="text-gray-400 hover:text-white flex items-center gap-2 mb-3 sm:mb-4 transition-colors"
    >
      <ArrowLeftIcon className="w-5 h-5" />
      <span className="text-sm sm:text-base">{label}</span>
    </Link>
  )
} 
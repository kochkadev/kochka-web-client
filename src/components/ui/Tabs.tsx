"use client"

import { ReactNode } from 'react'

interface TabsProps {
  items: {
    id: number
    label: string
  }[]
  selectedId: number
  onChange: (id: number) => void
}

export default function Tabs({ items, selectedId, onChange }: TabsProps) {
  return (
    <div className="flex gap-2">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => onChange(item.id)}
          className={`px-4 py-2 rounded-lg ${
            selectedId === item.id
              ? 'bg-blue-600 text-white'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  )
} 
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const routes = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/features', label: 'Features' },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="bg-white shadow-md">
      <ul className="flex justify-center space-x-4 p-4">
        {routes.map((route) => (
          <li key={route.path}>
            <Link
              href={route.path}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                pathname === route.path
                  ? 'bg-indigo-500 text-white'
                  : 'text-gray-700 hover:bg-indigo-100'
              }`}
            >
              {route.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}


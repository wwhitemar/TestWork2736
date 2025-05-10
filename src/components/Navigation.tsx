'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navigation = () => {
  const pathname = usePathname()

  return (
    <nav className="mb-4">
      <ul className="flex gap-4">
        <li>
          <Link 
            href="/" 
            className={`nav-link ${pathname === '/' ? 'active' : ''}`}
          >
            Погода
          </Link>
        </li>
        <li>
          <Link 
            href="/forecast" 
            className={`nav-link ${pathname === '/forecast' ? 'active' : ''}`}
          >
            Прогноз
          </Link>
        </li>
        <li>
          <Link 
            href="/favorites" 
            className={`nav-link ${pathname === '/favorites' ? 'active' : ''}`}
          >
            Избранное
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation 
'use client'

import { ToggleTheme } from './toggle-theme'
import { Anchor } from './anchor'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes'
import { BrandDark } from './icons/brand-dark'
import { BrandLight } from './icons/brand-light'
import { anchorList } from '@/utils/anchor'
import { usePathname } from 'next/navigation'

export function Header() {
  const [hasScrolled, setHasScrolled] = useState(false)
  const pathname = usePathname().substring(1)

  const { resolvedTheme } = useTheme()
  const theme = resolvedTheme?.split(' ')[0] === 'light'

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const scrollThreshold = 100

      setHasScrolled(scrollTop > scrollThreshold)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <header
      className={cn(
        'sticky top-0 z-40 bg-background w-full mx-auto lg:border-b transition-all duration-300',
        hasScrolled ? 'border-secondary' : 'border-transparent',
      )}
    >
      <nav className="px-4 md:px-6 py-3 max-w-[700px] mx-auto flex justify-between items-center gap-3">
        {theme ? <BrandLight /> : <BrandDark />}
        <ul className="flex gap-4 text-sm text-ring font-medium">
          {anchorList.map((anchor, idx) => (
            <Anchor
              key={idx}
              link={anchor.href}
              label={anchor.label}
              isActive={pathname === anchor.href}
            />
          ))}
        </ul>
        <div>
          <ToggleTheme />
        </div>
      </nav>
    </header>
  )
}

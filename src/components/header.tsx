'use client'

import { ToggleTheme } from './toggle-theme'
import { Anchor } from './anchor'
import brand from '../assets/brand-dark.svg'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export function Header() {
  const [hasScrolled, setHasScrolled] = useState(false)

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
        <div>
          <Image alt="Brand" src={brand} />
        </div>
        <ul className="flex gap-6 text-sm text-ring font-medium">
          <Anchor link="projects" label="Projects" />
          <Anchor link="blog" label="Blog" />
          <Anchor link="cv" label="CV" />
        </ul>
        <div>
          <ToggleTheme />
        </div>
      </nav>
    </header>
  )
}

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const links = [
  { href: '/espacos', label: 'Espaços' },
  { href: '/planos', label: 'Planos' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/contato', label: 'Contato' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-cobore-black/98 backdrop-blur-md border-b border-cobore-border'
          : 'bg-cobore-black/75 backdrop-blur-sm border-b border-cobore-border/40'
      )}
    >
      <div className="container-cobore">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img src="/img/logo-cobore.png" alt="COBORE" className="h-10 w-auto" />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-medium tracking-wide uppercase transition-colors duration-200',
                  pathname === link.href
                    ? 'text-cobore-gold'
                    : 'text-cobore-gray hover:text-cobore-offwhite'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/reservar" className="btn-primary text-xs py-3 px-6">
              Reservar
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-cobore-offwhite p-2"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-cobore-surface border-t border-cobore-border">
          <div className="container-cobore py-6 flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-cobore-offwhite text-lg font-medium py-2"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/reservar"
              className="btn-primary text-center mt-2"
              onClick={() => setOpen(false)}
            >
              Reservar
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

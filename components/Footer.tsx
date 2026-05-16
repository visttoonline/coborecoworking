import Link from 'next/link'
import { MapPin, Clock, Instagram, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-cobore-softblack border-t border-cobore-border">
      <div className="container-cobore py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <span className="font-display text-3xl font-bold gold-gradient tracking-tight">
              COBORE
            </span>
            <p className="mt-4 text-cobore-gray text-sm leading-relaxed max-w-xs">
              Mais que uma mesa de trabalho. O espaço estratégico para profissionais que querem produzir, receber e impressionar.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com/coboreworking"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cobore-gray hover:text-cobore-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com/company/cobore"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cobore-gray hover:text-cobore-gold transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="label-gold mb-4">Navegação</p>
            <ul className="space-y-3">
              {[
                { href: '/espacos', label: 'Espaços' },
                { href: '/planos', label: 'Planos & Preços' },
                { href: '/reservar', label: 'Reservar' },
                { href: '/sobre', label: 'Sobre o COBORE' },
                { href: '/contato', label: 'Contato' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cobore-gray hover:text-cobore-gold text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <p className="label-gold mb-4">Onde estamos</p>
            <div className="space-y-4">
              <div className="flex gap-3 text-sm text-cobore-gray">
                <MapPin size={16} className="text-cobore-gold mt-0.5 shrink-0" />
                <span>
                  Rua Barão de Santa Tecla, 466<br />
                  Centro — Pelotas/RS
                </span>
              </div>
              <div className="flex gap-3 text-sm text-cobore-gray">
                <Clock size={16} className="text-cobore-gold mt-0.5 shrink-0" />
                <span>
                  Seg–Sex: 8h às 21h<br />
                  Sábados: 9h às 16h
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cobore-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cobore-gray text-xs">
            © {new Date().getFullYear()} COBORE Coworking. Todos os direitos reservados.
          </p>
          <p className="text-cobore-gray text-xs">
            Pelotas/RS · coworking premium
          </p>
        </div>
      </div>
    </footer>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import { Calculadora } from '@/components/sections/Calculadora'
import { Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Planos e Preços',
  description: 'Veja todos os planos do COBORE: estações de trabalho, salas e estúdios. Use a calculadora para montar seu pacote ideal.',
}

const inclusos = [
  'Wi-Fi fibra 800Mb',
  'Cafezinho à disposição',
  'Cozinha equipada com armário com chave',
  'Ar-condicionado em todas as salas',
  'Acesso à área verde externa',
  'Sala Meet (cortesia)',
  'Recepção no horário comercial',
  'Segurança 24h',
]

export default function PlanosPage() {
  return (
    <div className="pt-20">
      <div className="relative h-72 w-full overflow-hidden">
        <img src="/img/Bertuol-12.jpg" alt="" className="w-full h-full object-cover object-center" style={{opacity:0.35}} />
        <div className="absolute inset-0" style={{background:"linear-gradient(to bottom, rgba(10,10,10,0.2), rgba(10,10,10,1))"}} />
      </div>
      <section className="section-padding bg-cobore-surface border-b border-cobore-border">
        <div className="container-cobore text-center">
          <p className="label-gold mb-4">Planos e Preços</p>
          <h1 className="font-display text-display-xl text-cobore-offwhite max-w-2xl mx-auto">
            Transparência no preço, premium na entrega.
          </h1>
        </div>
      </section>

      {/* Calculadora */}
      <Calculadora />

      {/* Grid de fotos */}
      <div className="grid grid-cols-3 gap-1 w-full" style={{height:'280px'}}>
        <div className="overflow-hidden">
          <img src="/img/Bertuol-11.jpg" alt="" className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden">
          <img src="/img/Bertuol-9.jpg" alt="" className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden">
          <img src="/img/Bertuol-1.jpg" alt="" className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500" />
        </div>
      </div>

      {/* O que está incluso em tudo */}
      <section className="section-padding bg-cobore-surface">
        <div className="container-cobore max-w-3xl text-center">
          <p className="label-gold mb-4">Em todos os planos</p>
          <h2 className="font-display text-display-md text-cobore-offwhite mb-10">
            Isso tudo sempre incluso, sem surpresa.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {inclusos.map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm text-cobore-gray">
                <Check size={16} className="text-cobore-gold shrink-0" />
                {item}
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/reservar" className="btn-primary">Fazer minha reserva</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

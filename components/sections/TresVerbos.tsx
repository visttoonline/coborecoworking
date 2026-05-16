'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Monitor, Handshake, Camera } from 'lucide-react'

const verbos = [
  {
    verb: 'PRODUZIR',
    icon: Monitor,
    title: 'O espaço que coloca você em modo foco.',
    description:
      'Estação ergonômica, Wi-Fi 800Mb de fibra, cozinha completa, área verde para respirar e uma comunidade que não incomoda. Tudo o que home office nunca vai ter.',
    cta: { label: 'Reservar estação', href: '/reservar?espaco=estacao' },
    image: '/img/open-space-6.jpg',
  },
  {
    verb: 'RECEBER',
    icon: Handshake,
    title: 'Sua primeira impressão começa antes de você abrir a boca.',
    description:
      'Sala de reunião fechada, recepcionista que anuncia seus clientes, cafezinho premium em bandeja — por R$35/hora. A percepção que você vende antes de falar.',
    cta: { label: 'Reservar sala', href: '/reservar?espaco=sala-reuniao' },
    image: '/img/recepcao.jpg',
  },
  {
    verb: 'IMPRESSIONAR',
    icon: Camera,
    title: 'Produza conteúdo de nível profissional sem montar um estúdio.',
    description:
      'Estúdio de fotos com iluminação profissional e 3 fundos. Sala de gravação completa para podcasts, cursos e vídeos institucionais. No mesmo endereço.',
    cta: { label: 'Reservar estúdio', href: '/reservar?espaco=estudio' },
    image: '/img/sala-gravacao-2.jpg',
  },
]

function VerbCard({
  verb,
  icon: Icon,
  title,
  description,
  cta,
  index,
}: (typeof verbos)[0] & { index: number; image: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
      className="card-surface group hover:border-cobore-gold/40 transition-colors duration-300 flex flex-col"
    >
      {/* Foto real do espaço */}
      <div className="h-56 bg-cobore-softblack relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-cobore-black/60 to-transparent z-10" />
        <Image
          src={image}
          alt={verb}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <div className="p-8 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full border border-cobore-gold/30 flex items-center justify-center">
            <Icon size={18} className="text-cobore-gold" />
          </div>
          <span className="label-gold">{verb}</span>
        </div>

        <h3 className="font-display text-xl font-semibold text-cobore-offwhite mb-3 leading-tight">
          {title}
        </h3>
        <p className="text-cobore-gray text-sm leading-relaxed flex-1">{description}</p>

        <Link
          href={cta.href}
          className="mt-6 inline-flex items-center text-cobore-gold text-sm font-semibold uppercase tracking-wide hover:gap-3 gap-2 transition-all duration-200 group"
        >
          {cta.label}
          <span className="text-cobore-gold transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </motion.div>
  )
}

export function TresVerbos() {
  return (
    <section id="tour" className="section-padding bg-cobore-black">
      <div className="container-cobore">
        <div className="text-center mb-16">
          <p className="label-gold mb-4">O que o COBORE oferece</p>
          <h2 className="font-display text-display-xl text-cobore-offwhite max-w-2xl mx-auto">
            Três verbos. Uma base estratégica.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {verbos.map((v, i) => (
            <VerbCard key={v.verb} {...v} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

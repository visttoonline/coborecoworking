'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowDown, Play } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Foto de fundo — open space */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/hero.jpg"
          alt="COBORE Coworking — Open Space"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cobore-black/80 via-cobore-black/60 to-cobore-black z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 container-cobore text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="label-gold mb-6">Pelotas/RS · Centro</p>
          <h1 className="font-display text-display-2xl text-cobore-offwhite mb-4 max-w-4xl mx-auto">
            Mais que uma{' '}
            <span className="gold-gradient">mesa de trabalho.</span>
          </h1>
          <p className="font-display text-display-lg text-cobore-gold/80 mb-8 max-w-2xl mx-auto">
            Produzir, receber e impressionar.
          </p>
          <p className="text-cobore-gray text-lg max-w-xl mx-auto mb-12 leading-relaxed">
            Coworking premium no centro de Pelotas. Estações de trabalho, sala de reunião, estúdio de fotos e sala de gravação — no mesmo lugar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/planos" className="btn-primary">
              Reservar minha mesa
            </Link>
            <button
              className="btn-outline flex items-center gap-2"
              onClick={() => {
                document.getElementById('tour')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <Play size={16} className="fill-current" />
              Fazer um tour
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ArrowDown size={20} className="text-cobore-gold/50" />
      </motion.div>
    </section>
  )
}

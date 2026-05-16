'use client'

import { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'

const fotos = [
  '/img/Bertuol-12.jpg',
  '/img/Bertuol-14.jpg',
  '/img/Bertuol-7.jpg',
  '/img/Bertuol-8.jpg',
  '/img/Bertuol-4 - cópia.jpg',
  '/img/Bertuol-3.jpg',
  '/img/Bertuol-1.jpg',
  '/img/Bertuol-9.jpg',
  '/img/Bertuol-10.jpg',
  '/img/Bertuol-15.jpg',
  '/img/Bertuol-17.jpg',
  '/img/Bertuol-22.jpg',
  '/img/Bertuol-18.jpg',
]

export function Carrossel() {
  const [current, setCurrent] = useState(0)
  const [offset, setOffset] = useState(0)
  const [transitioning, setTransitioning] = useState(false)

  const goNext = useCallback(() => {
    if (transitioning) return
    setTransitioning(true)
    setOffset(-100)
    setTimeout(() => {
      setCurrent(c => (c + 1) % fotos.length)
      setOffset(0)
      setTransitioning(false)
    }, 600)
  }, [transitioning])

  const goPrev = useCallback(() => {
    if (transitioning) return
    setTransitioning(true)
    setOffset(100)
    setTimeout(() => {
      setCurrent(c => (c - 1 + fotos.length) % fotos.length)
      setOffset(0)
      setTransitioning(false)
    }, 600)
  }, [transitioning])

  useEffect(() => {
    const t = setInterval(goNext, 4500)
    return () => clearInterval(t)
  }, [goNext])

  const prev = (current - 1 + fotos.length) % fotos.length
  const next = (current + 1) % fotos.length

  return (
    <section className="relative w-full bg-cobore-black overflow-hidden" style={{height: '540px'}}>

      {/* Foto anterior (entrando da esquerda quando vai para prev) */}
      <div
        className="absolute inset-0"
        style={{
          transform: `translateX(${offset === 100 ? 0 : -100}%)`,
          transition: transitioning ? 'transform 0.6s cubic-bezier(0.77,0,0.18,1)' : 'none',
        }}
      >
        <Image src={fotos[offset > 0 ? prev : next]} alt="" fill className="object-cover object-center" sizes="100vw" />
        <div className="absolute inset-0 bg-cobore-black/25" />
      </div>

      {/* Foto atual */}
      <div
        className="absolute inset-0"
        style={{
          transform: `translateX(${offset}%)`,
          transition: transitioning ? 'transform 0.6s cubic-bezier(0.77,0,0.18,1)' : 'none',
        }}
      >
        <Image src={fotos[current]} alt="" fill className="object-cover object-center" sizes="100vw" priority />
        <div className="absolute inset-0 bg-cobore-black/25" />
      </div>

      {/* Seta esquerda */}
      <button
        onClick={goPrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center border border-cobore-gold/60 text-cobore-gold text-xl hover:bg-cobore-gold hover:text-cobore-black transition-all duration-200"
        aria-label="Anterior"
      >
        ←
      </button>

      {/* Seta direita */}
      <button
        onClick={goNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center border border-cobore-gold/60 text-cobore-gold text-xl hover:bg-cobore-gold hover:text-cobore-black transition-all duration-200"
        aria-label="Próximo"
      >
        →
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {fotos.map((_, i) => (
          <button
            key={i}
            onClick={() => { if (!transitioning) { setOffset(i > current ? -100 : 100); setTimeout(() => { setCurrent(i); setOffset(0); setTransitioning(false) }, 600); setTransitioning(true) } }}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'bg-cobore-gold w-6' : 'bg-white/40 w-1.5'}`}
            aria-label={`Foto ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

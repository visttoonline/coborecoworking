'use client'

import { useEffect, useRef, useState } from 'react'
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
  const [animating, setAnimating] = useState(false)
  const [direction, setDirection] = useState<'left' | 'right'>('right')
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  function goTo(index: number, dir: 'left' | 'right') {
    if (animating) return
    setDirection(dir)
    setAnimating(true)
    setTimeout(() => {
      setCurrent(index)
      setAnimating(false)
    }, 500)
  }

  function next() {
    goTo((current + 1) % fotos.length, 'right')
  }

  function prev() {
    goTo((current - 1 + fotos.length) % fotos.length, 'left')
  }

  useEffect(() => {
    timerRef.current = setTimeout(next, 4000)
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [current])

  return (
    <section className="relative w-full overflow-hidden bg-cobore-black" style={{height: '520px'}}>
      {/* Imagens */}
      <div
        className="absolute inset-0 transition-transform duration-500 ease-in-out"
        style={{
          transform: animating
            ? direction === 'right' ? 'translateX(-100%)' : 'translateX(100%)'
            : 'translateX(0)',
        }}
      >
        <Image
          src={fotos[current]}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-cobore-black/30" />
      </div>

      {/* Seta esquerda */}
      <button
        onClick={prev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center border border-cobore-gold/50 text-cobore-gold hover:bg-cobore-gold hover:text-cobore-black transition-all duration-200"
        aria-label="Anterior"
      >
        ←
      </button>

      {/* Seta direita */}
      <button
        onClick={next}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center border border-cobore-gold/50 text-cobore-gold hover:bg-cobore-gold hover:text-cobore-black transition-all duration-200"
        aria-label="Próximo"
      >
        →
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {fotos.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > current ? 'right' : 'left')}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === current ? 'bg-cobore-gold w-4' : 'bg-white/40'}`}
            aria-label={`Foto ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

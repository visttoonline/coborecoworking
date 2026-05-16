'use client'

import { useEffect, useState, useCallback, useRef } from 'react'

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
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const goNext = useCallback(() => {
    setCurrent(c => (c + 1) % fotos.length)
  }, [])

  const goPrev = useCallback(() => {
    setCurrent(c => (c - 1 + fotos.length) % fotos.length)
  }, [])

  const goTo = useCallback((i: number) => {
    setCurrent(i)
  }, [])

  useEffect(() => {
    intervalRef.current = setInterval(goNext, 4500)
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [goNext])

  return (
    <section className="relative w-full bg-cobore-black overflow-hidden" style={{height: '560px'}}>

      {/* Todas as fotos empilhadas, sempre no DOM */}
      {fotos.map((foto, i) => (
        <div
          key={foto}
          className="absolute inset-0"
          style={{
            opacity: i === current ? 1 : 0,
            transition: 'opacity 800ms ease-in-out',
            zIndex: i === current ? 1 : 0,
          }}
        >
          <img
            src={foto}
            alt=""
            style={{width:'100%', height:'100%', objectFit:'cover', objectPosition:'center', display:'block'}}
          />
          <div className="absolute inset-0 bg-cobore-black/20" />
        </div>
      ))}

      {/* Seta esquerda */}
      <button onClick={goPrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center border border-cobore-gold/60 text-cobore-gold text-xl hover:bg-cobore-gold hover:text-cobore-black transition-all duration-200"
        aria-label="Anterior">←</button>

      {/* Seta direita */}
      <button onClick={goNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center border border-cobore-gold/60 text-cobore-gold text-xl hover:bg-cobore-gold hover:text-cobore-black transition-all duration-200"
        aria-label="Próximo">→</button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {fotos.map((_, i) => (
          <button key={i}
            onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'bg-cobore-gold w-6' : 'bg-white/40 w-1.5'}`}
            aria-label={`Foto ${i + 1}`} />
        ))}
      </div>
    </section>
  )
}

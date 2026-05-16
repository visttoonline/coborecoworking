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
  const [prev, setPrev] = useState<number | null>(null)
  const [dir, setDir] = useState<'next' | 'prev'>('next')
  const [animating, setAnimating] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const go = useCallback((newIndex: number, direction: 'next' | 'prev') => {
    if (animating) return
    setPrev(current)
    setDir(direction)
    setAnimating(true)
    setCurrent(newIndex)
    setTimeout(() => {
      setPrev(null)
      setAnimating(false)
    }, 700)
  }, [animating, current])

  const goNext = useCallback(() => {
    go((current + 1) % fotos.length, 'next')
  }, [go, current])

  const goPrev = useCallback(() => {
    go((current - 1 + fotos.length) % fotos.length, 'prev')
  }, [go, current])

  useEffect(() => {
    intervalRef.current = setInterval(goNext, 4500)
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [goNext])

  return (
    <section className="relative w-full bg-cobore-black overflow-hidden" style={{height: '560px'}}>

      {/* Todas as fotos empilhadas */}
      {fotos.map((foto, i) => {
        const isCurrent = i === current
        const isPrev = i === prev

        let transform = 'translateX(100%)'
        let opacity = 0
        let zIndex = 0

        if (isCurrent) {
          transform = animating ? (dir === 'next' ? 'translateX(0)' : 'translateX(0)') : 'translateX(0)'
          opacity = 1
          zIndex = 2
        } else if (isPrev) {
          transform = animating ? (dir === 'next' ? 'translateX(-100%)' : 'translateX(100%)') : 'translateX(0)'
          opacity = 1
          zIndex = 1
        }

        if (!isCurrent && !isPrev) return null

        return (
          <div
            key={foto}
            className="absolute inset-0"
            style={{
              zIndex,
              transform,
              opacity,
              transition: animating ? 'transform 700ms cubic-bezier(0.77,0,0.18,1)' : 'none',
            }}
          >
            <img src={foto} alt="" className="w-full h-full object-cover object-center" style={{display:'block'}} />
            <div className="absolute inset-0 bg-cobore-black/20" />
          </div>
        )
      })}

      {/* Pré-carrega próxima foto invisível */}
      <div className="absolute inset-0 opacity-0 pointer-events-none" style={{zIndex:0}}>
        <img src={fotos[(current + 1) % fotos.length]} alt="" className="w-full h-full object-cover" />
      </div>

      {/* Seta esquerda */}
      <button onClick={goPrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center border border-cobore-gold/60 text-cobore-gold text-xl hover:bg-cobore-gold hover:text-cobore-black transition-all duration-200"
        aria-label="Anterior">←</button>

      {/* Seta direita */}
      <button onClick={goNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center border border-cobore-gold/60 text-cobore-gold text-xl hover:bg-cobore-gold hover:text-cobore-black transition-all duration-200"
        aria-label="Próximo">→</button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {fotos.map((_, i) => (
          <button key={i}
            onClick={() => go(i, i > current ? 'next' : 'prev')}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'bg-cobore-gold w-6' : 'bg-white/40 w-1.5'}`}
            aria-label={`Foto ${i + 1}`} />
        ))}
      </div>
    </section>
  )
}

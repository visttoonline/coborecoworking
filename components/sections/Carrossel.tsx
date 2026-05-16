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
  const [sliding, setSliding] = useState(false)
  const [slideDir, setSlideDir] = useState<'next' | 'prev'>('next')
  const [incoming, setIncoming] = useState(1)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const go = useCallback((dir: 'next' | 'prev') => {
    if (sliding) return
    const next = dir === 'next'
      ? (current + 1) % fotos.length
      : (current - 1 + fotos.length) % fotos.length
    setIncoming(next)
    setSlideDir(dir)
    setSliding(true)
    setTimeout(() => {
      setCurrent(next)
      setSliding(false)
    }, 650)
  }, [sliding, current])

  const goNext = useCallback(() => go('next'), [go])
  const goPrev = useCallback(() => go('prev'), [go])

  useEffect(() => {
    intervalRef.current = setInterval(goNext, 4500)
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [goNext])

  const currentOut = sliding ? (slideDir === 'next' ? '-translate-x-full' : 'translate-x-full') : 'translate-x-0'
  const incomingIn = sliding ? 'translate-x-0' : (slideDir === 'next' ? 'translate-x-full' : '-translate-x-full')

  return (
    <section className="relative w-full bg-cobore-black overflow-hidden" style={{height: '560px'}}>

      {/* Foto atual saindo */}
      <div
        className="absolute inset-0 transition-transform duration-[650ms] ease-in-out"
        style={{ transform: sliding ? (slideDir === 'next' ? 'translateX(-100%)' : 'translateX(100%)') : 'translateX(0)' }}
      >
        <img src={fotos[current]} alt="" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-cobore-black/20" />
      </div>

      {/* Foto entrando */}
      {sliding && (
        <div
          className="absolute inset-0 transition-transform duration-[650ms] ease-in-out"
          style={{ transform: 'translateX(0)', animation: `slideIn${slideDir === 'next' ? 'Right' : 'Left'} 650ms cubic-bezier(0.77,0,0.18,1) forwards` }}
        >
          <img src={fotos[incoming]} alt="" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-cobore-black/20" />
        </div>
      )}

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
          <button key={i} onClick={() => go(i > current ? 'next' : 'prev')}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'bg-cobore-gold w-6' : 'bg-white/40 w-1.5'}`}
            aria-label={`Foto ${i + 1}`} />
        ))}
      </div>

      <style>{`
        @keyframes slideInRight { from { transform: translateX(100%) } to { transform: translateX(0) } }
        @keyframes slideInLeft { from { transform: translateX(-100%) } to { transform: translateX(0) } }
      `}</style>
    </section>
  )
}

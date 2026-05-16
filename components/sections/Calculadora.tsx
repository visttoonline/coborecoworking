'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { formatCurrency } from '@/lib/utils'
import { MessageCircle } from 'lucide-react'

type Espaco = 'estacao' | 'sala-reuniao' | 'estudio' | 'sala-gravacao' | 'privativa' | 'fiscal'

const espacos = [
  { id: 'estacao' as Espaco, label: 'Estação de trabalho' },
  { id: 'sala-reuniao' as Espaco, label: 'Sala de Reunião Privada' },
  { id: 'estudio' as Espaco, label: 'Estúdio de Fotos' },
  { id: 'sala-gravacao' as Espaco, label: 'Sala de Gravação' },
  { id: 'privativa' as Espaco, label: 'Sala Privativa Mensal' },
  { id: 'fiscal' as Espaco, label: 'Endereço Fiscal' },
]

const planoEstacao = [
  { id: 'diaria', label: 'Diária', valor: 40, desc: '1 dia útil' },
  { id: 'semana', label: 'Semana', valor: 180, desc: '5 dias consecutivos' },
  { id: 'mensal', label: 'Mensal', valor: 580, desc: 'Acesso ilimitado' },
  { id: 'trimestral', label: 'Trimestral', valor: 530, desc: 'R$530/mês × 3 meses' },
]

function calcEstudio(horas: number, fundosExtras: number) {
  return 120 + (horas - 1) * 60 + fundosExtras * 30
}

export function Calculadora() {
  const [espaco, setEspaco] = useState<Espaco>('estacao')
  const [plano, setPlano] = useState('diaria')
  const [horas, setHoras] = useState(1)
  const [fundos, setFundos] = useState(0)

  const isConsulta = espaco === 'privativa' || espaco === 'fiscal'

  function getTotal(): number | null {
    if (isConsulta) return null
    if (espaco === 'estacao') {
      return planoEstacao.find((p) => p.id === plano)?.valor ?? 0
    }
    if (espaco === 'sala-reuniao') return horas * 35
    if (espaco === 'estudio') return calcEstudio(horas, fundos)
    if (espaco === 'sala-gravacao') return 120 + (horas - 1) * 60
    return null
  }

  const total = getTotal()
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '5553999999999'
  const msg = encodeURIComponent('Olá! Vi o site do COBORE e gostaria de mais informações.')

  return (
    <section id="calculadora" className="section-padding bg-cobore-black">
      <div className="container-cobore">
        <div className="text-center mb-14">
          <p className="label-gold mb-4">Calculadora de planos</p>
          <h2 className="font-display text-display-xl text-cobore-offwhite max-w-2xl mx-auto">
            Quanto custa o seu espaço ideal?
          </h2>
          <p className="text-cobore-gray mt-4 max-w-lg mx-auto">
            Configure abaixo e veja o valor em tempo real.
          </p>
        </div>

        <div className="max-w-2xl mx-auto card-surface p-8 md:p-10">
          {/* Passo 1 — Escolha o espaço */}
          <div className="mb-8">
            <p className="label-gold mb-4">1. Escolha o espaço</p>
            <div className="grid grid-cols-2 gap-3">
              {espacos.map((e) => (
                <button
                  key={e.id}
                  onClick={() => { setEspaco(e.id); setHoras(1); setFundos(0) }}
                  className={`p-3 text-left text-sm border transition-all duration-200 ${
                    espaco === e.id
                      ? 'border-cobore-gold bg-cobore-gold/10 text-cobore-gold'
                      : 'border-cobore-border text-cobore-gray hover:border-cobore-gray'
                  }`}
                >
                  {e.label}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            {isConsulta ? (
              <motion.div
                key="consulta"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-8 border border-cobore-border"
              >
                <p className="text-cobore-offwhite font-semibold mb-2">Sob consulta</p>
                <p className="text-cobore-gray text-sm mb-6">
                  Este plano tem condições especiais. Fale com a gente para montar o melhor pacote para você.
                </p>
                <a
                  href={`https://wa.me/${whatsapp}?text=${msg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Falar no WhatsApp
                </a>
              </motion.div>
            ) : (
              <motion.div
                key={espaco}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                {/* Passo 2 — Configuração */}
                <div className="mb-8">
                  <p className="label-gold mb-4">2. Configure</p>

                  {espaco === 'estacao' && (
                    <div className="grid grid-cols-2 gap-3">
                      {planoEstacao.map((p) => (
                        <button
                          key={p.id}
                          onClick={() => setPlano(p.id)}
                          className={`p-4 text-left border transition-all duration-200 ${
                            plano === p.id
                              ? 'border-cobore-gold bg-cobore-gold/10'
                              : 'border-cobore-border hover:border-cobore-gray'
                          }`}
                        >
                          <span className={`block text-sm font-semibold ${plano === p.id ? 'text-cobore-gold' : 'text-cobore-offwhite'}`}>
                            {p.label}
                          </span>
                          <span className="block text-xs text-cobore-gray mt-1">{p.desc}</span>
                          <span className="block text-lg font-bold text-cobore-gold mt-2">
                            {formatCurrency(p.valor)}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}

                  {(espaco === 'sala-reuniao' || espaco === 'sala-gravacao' || espaco === 'estudio') && (
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between mb-3">
                          <span className="text-sm text-cobore-offwhite">Horas</span>
                          <span className="text-cobore-gold font-bold">{horas}h</span>
                        </div>
                        <input
                          type="range"
                          min={1}
                          max={8}
                          value={horas}
                          onChange={(e) => setHoras(Number(e.target.value))}
                          className="w-full accent-cobore-gold h-1 bg-cobore-border rounded cursor-pointer"
                        />
                        <div className="flex justify-between text-xs text-cobore-gray mt-1">
                          <span>1h</span><span>8h</span>
                        </div>
                      </div>

                      {espaco === 'estudio' && (
                        <div>
                          <p className="text-sm text-cobore-offwhite mb-3">
                            Fundos extras (+R$30 cada, máx 3)
                          </p>
                          <div className="flex gap-3">
                            {['Branco', 'Cinza', 'Terroso'].map((fundo, i) => {
                              const idx = i + 1
                              const ativo = fundos >= idx
                              return (
                                <button
                                  key={fundo}
                                  onClick={() => setFundos(ativo && fundos === idx ? idx - 1 : idx)}
                                  className={`flex-1 py-2 text-xs border transition-all duration-200 ${
                                    ativo
                                      ? 'border-cobore-gold bg-cobore-gold/10 text-cobore-gold'
                                      : 'border-cobore-border text-cobore-gray'
                                  }`}
                                >
                                  {fundo}
                                </button>
                              )
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Resultado */}
                <div className="border-t border-cobore-border pt-6">
                  <div className="flex items-baseline justify-between mb-6">
                    <span className="text-cobore-gray text-sm">Total estimado</span>
                    <motion.span
                      key={total}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="font-display text-3xl font-bold text-cobore-gold"
                    >
                      {total !== null ? formatCurrency(total) : '—'}
                    </motion.span>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href={`/reservar?espaco=${espaco}&plano=${plano}&horas=${horas}`}
                      className="btn-primary flex-1 text-center"
                    >
                      Reservar agora
                    </Link>
                    <a
                      href={`https://wa.me/${whatsapp}?text=${msg}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline flex-1 text-center flex items-center justify-center gap-2"
                    >
                      <MessageCircle size={16} />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

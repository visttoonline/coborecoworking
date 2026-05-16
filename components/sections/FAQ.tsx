'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const perguntas = [
  {
    q: 'Posso visitar o espaço antes de contratar?',
    a: 'Sim. Agende um tour pelo formulário do site ou via WhatsApp e venha conhecer pessoalmente.',
  },
  {
    q: 'Preciso assinar contrato?',
    a: 'Para planos mensais sim — um contrato simples de locação. Para diárias e semanais, basta a reserva pelo site.',
  },
  {
    q: 'Posso usar a sala de reunião sendo mensalista?',
    a: 'Sim, com tarifa de R$35/hora, mediante disponibilidade de agenda.',
  },
  {
    q: 'Tem estacionamento?',
    a: 'Zona Azul disponível na rua, pago à parte. O COBORE fica no centro, com fácil acesso de carro ou a pé.',
  },
  {
    q: 'O Wi-Fi aguenta videochamada e upload pesado?',
    a: 'São 800Mb de fibra com cabeamento dedicado. Sem divisão de banda com externos — velocidade real para quem trabalha sério.',
  },
  {
    q: 'O que está incluso no plano mensal?',
    a: 'Acesso ilimitado em horário comercial, Wi-Fi, cafezinho, cozinha equipada, ar-condicionado, área verde e Sala Meet para videocalls (mediante disponibilidade).',
  },
  {
    q: 'Posso receber correspondências no endereço?',
    a: 'Sim — para mensalistas e clientes do plano de Endereço Fiscal, que também permite registro de CNPJ no local.',
  },
  {
    q: 'Tem sala para times ou equipes?',
    a: 'Sim. A Sala Privativa Mensal comporta de 3 a 6 pessoas com privacidade total. Consulte condições e disponibilidade.',
  },
]

function Item({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-cobore-border last:border-0">
      <button
        className="w-full flex items-center justify-between py-5 text-left gap-4"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="text-cobore-offwhite font-medium text-sm md:text-base">{q}</span>
        {isOpen ? (
          <Minus size={18} className="text-cobore-gold shrink-0" />
        ) : (
          <Plus size={18} className="text-cobore-gold shrink-0" />
        )}
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <p className="text-cobore-gray text-sm leading-relaxed pb-5">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="section-padding bg-cobore-black">
      <div className="container-cobore">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="label-gold mb-4">Dúvidas frequentes</p>
            <h2 className="font-display text-display-xl text-cobore-offwhite">
              Perguntas diretas, respostas diretas.
            </h2>
          </div>

          <div className="card-surface px-6 md:px-8">
            {perguntas.map((item, i) => (
              <Item
                key={i}
                q={item.q}
                a={item.a}
                isOpen={open === i}
                onToggle={() => setOpen(open === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

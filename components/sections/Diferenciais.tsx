'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Wifi, UserCheck, Camera, Leaf, Lock, Shield, Coffee, MapPin } from 'lucide-react'

const items = [
  {
    icon: UserCheck,
    title: 'Recepção com concierge',
    desc: 'Seu cliente é anunciado e recebido com cafezinho em bandeja. Outros coworkings te entregam só uma mesa.',
  },
  {
    icon: Camera,
    title: 'Estúdio + gravação no mesmo endereço',
    desc: 'A única opção em Pelotas que une coworking, estúdio fotográfico e sala de gravação sob o mesmo teto.',
  },
  {
    icon: Wifi,
    title: 'Wi-Fi 800Mb de fibra',
    desc: 'Velocidade real para upload de vídeo pesado, edição em nuvem e call em 4K sem travar.',
  },
  {
    icon: Leaf,
    title: 'Área verde interna',
    desc: 'Pátio com deck de madeira, plantas e iluminação pendente. Um respiro visual entre uma tarefa e outra.',
  },
  {
    icon: Lock,
    title: 'Armários com chave',
    desc: 'Seus pertences guardados com segurança. Nada de carregar mochila pesada durante todo o dia.',
  },
  {
    icon: Shield,
    title: 'Segurança 24h',
    desc: 'Câmeras em todo o espaço, alarme e fechadura eletrônica. Você entra, o espaço te protege.',
  },
  {
    icon: Coffee,
    title: 'Café incluso em tudo',
    desc: 'Cafezinho à disposição o dia inteiro, em todos os planos, sem cobrar à parte.',
  },
  {
    icon: MapPin,
    title: 'Central em Pelotas',
    desc: 'Rua Barão de Santa Tecla, 466. No coração do centro, a dois passos de qualquer coisa.',
  },
]

export function Diferenciais() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section-padding bg-cobore-surface">
      <div className="container-cobore">
        <div className="text-center mb-16">
          <p className="label-gold mb-4">Por que o COBORE</p>
          <h2 className="font-display text-display-xl text-cobore-offwhite max-w-2xl mx-auto">
            Estrutura premium. Não uma mesa qualquer.
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07, ease: 'easeOut' }}
              className="p-6 border border-cobore-border hover:border-cobore-gold/30 transition-colors duration-300"
            >
              <item.icon size={24} className="text-cobore-gold mb-4" />
              <h3 className="font-semibold text-cobore-offwhite text-sm mb-2">{item.title}</h3>
              <p className="text-cobore-gray text-xs leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

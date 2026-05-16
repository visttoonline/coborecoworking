import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Reservar',
  description: 'Faça sua reserva no COBORE Coworking — espaços disponíveis em Pelotas/RS.',
}

export default function ReservarPage() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-cobore-surface border-b border-cobore-border">
        <div className="container-cobore text-center">
          <p className="label-gold mb-4">Reservar</p>
          <h1 className="font-display text-display-xl text-cobore-offwhite max-w-xl mx-auto">
            Escolha seu espaço e horário.
          </h1>
          <p className="text-cobore-gray mt-4 text-sm">
            Fase 2 — Sistema de agendamento em desenvolvimento.
          </p>
        </div>
      </section>

      <section className="section-padding bg-cobore-black">
        <div className="container-cobore max-w-xl text-center">
          <div className="card-surface p-10">
            <p className="text-cobore-offwhite font-semibold mb-3">Reservas por WhatsApp</p>
            <p className="text-cobore-gray text-sm mb-6">
              Enquanto o sistema online de agendamento está sendo configurado, fale diretamente com a gente pelo WhatsApp para garantir seu espaço.
            </p>
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '5553999999999'}?text=${encodeURIComponent('Olá! Gostaria de fazer uma reserva no COBORE.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Reservar pelo WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

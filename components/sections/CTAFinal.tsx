import Link from 'next/link'
import { MessageCircle } from 'lucide-react'

export function CTAFinal() {
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '5553999999999'
  const msg = encodeURIComponent('Olá! Vi o site do COBORE e gostaria de agendar uma visita.')

  return (
    <section className="section-padding bg-cobore-softblack border-t border-cobore-border">
      <div className="container-cobore text-center">
        <p className="label-gold mb-6">Pronto para começar?</p>
        <h2 className="font-display text-display-xl text-cobore-offwhite max-w-xl mx-auto mb-4">
          Venha conhecer o COBORE.
        </h2>
        <p className="text-cobore-gray max-w-md mx-auto mb-10 text-sm leading-relaxed">
          Agende uma visita, tire dúvidas pelo WhatsApp ou já faça sua reserva. O espaço certo para trabalhar, receber e produzir está te esperando.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/reservar" className="btn-primary">
            Fazer minha reserva
          </Link>
          <a
            href={`https://wa.me/${whatsapp}?text=${msg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline flex items-center justify-center gap-2"
          >
            <MessageCircle size={18} />
            Agendar visita
          </a>
        </div>
      </div>
    </section>
  )
}

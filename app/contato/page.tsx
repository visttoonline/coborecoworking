'use client'

import { useState } from 'react'
import { MapPin, Clock, MessageCircle } from 'lucide-react'

export default function ContatoPage() {
  const [enviado, setEnviado] = useState(false)
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '5553999999999'
  const msg = encodeURIComponent('Olá! Vim pelo site do COBORE e gostaria de mais informações.')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // TODO: conectar ao endpoint de email via Resend
    setEnviado(true)
  }

  return (
    <div className="pt-20">
      <section className="section-padding bg-cobore-surface border-b border-cobore-border">
        <div className="container-cobore text-center">
          <p className="label-gold mb-4">Contato</p>
          <h1 className="font-display text-display-xl text-cobore-offwhite max-w-xl mx-auto">
            Fale com a gente.
          </h1>
          <p className="text-cobore-gray mt-4 max-w-md mx-auto text-sm">
            Dúvidas, visitas, reservas ou propostas — escolha o canal mais conveniente.
          </p>
        </div>
      </section>

      <section className="section-padding bg-cobore-black">
        <div className="container-cobore">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {/* Info */}
            <div className="space-y-8">
              <div className="flex gap-4">
                <MapPin size={20} className="text-cobore-gold mt-1 shrink-0" />
                <div>
                  <p className="text-cobore-offwhite font-semibold text-sm mb-1">Endereço</p>
                  <p className="text-cobore-gray text-sm leading-relaxed">
                    Rua Barão de Santa Tecla, 466<br />
                    Centro — Pelotas/RS
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock size={20} className="text-cobore-gold mt-1 shrink-0" />
                <div>
                  <p className="text-cobore-offwhite font-semibold text-sm mb-1">Horários</p>
                  <p className="text-cobore-gray text-sm leading-relaxed">
                    Segunda a sexta: 8h às 21h<br />
                    Sábados: 9h às 16h<br />
                    Domingos: fechado
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <MessageCircle size={20} className="text-cobore-gold mt-1 shrink-0" />
                <div>
                  <p className="text-cobore-offwhite font-semibold text-sm mb-2">WhatsApp</p>
                  <a
                    href={`https://wa.me/${whatsapp}?text=${msg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-xs py-3 px-6 inline-flex"
                  >
                    Abrir conversa
                  </a>
                </div>
              </div>

              {/* Mapa placeholder */}
              <div className="h-48 bg-cobore-surface border border-cobore-border flex items-center justify-center">
                <span className="text-cobore-border text-sm text-center px-4">
                  Mapa interativo — adicionar Google Maps embed
                </span>
              </div>
            </div>

            {/* Formulário */}
            <div className="card-surface p-8">
              {enviado ? (
                <div className="text-center py-8">
                  <div className="text-cobore-gold text-4xl mb-4">✓</div>
                  <p className="font-display text-xl text-cobore-offwhite mb-2">Mensagem enviada!</p>
                  <p className="text-cobore-gray text-sm">Retornamos em até 1 dia útil.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block label-gold mb-2" htmlFor="nome">Nome</label>
                    <input
                      id="nome"
                      type="text"
                      required
                      placeholder="Seu nome completo"
                      className="w-full bg-cobore-black border border-cobore-border px-4 py-3 text-cobore-offwhite text-sm placeholder:text-cobore-gray focus:outline-none focus:border-cobore-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block label-gold mb-2" htmlFor="email">E-mail</label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="seu@email.com"
                      className="w-full bg-cobore-black border border-cobore-border px-4 py-3 text-cobore-offwhite text-sm placeholder:text-cobore-gray focus:outline-none focus:border-cobore-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block label-gold mb-2" htmlFor="assunto">Assunto</label>
                    <select
                      id="assunto"
                      className="w-full bg-cobore-black border border-cobore-border px-4 py-3 text-cobore-offwhite text-sm focus:outline-none focus:border-cobore-gold transition-colors"
                    >
                      <option value="visita">Quero agendar uma visita</option>
                      <option value="reserva">Dúvida sobre reserva</option>
                      <option value="plano">Informações sobre planos</option>
                      <option value="privativa">Sala privativa mensal</option>
                      <option value="outro">Outro assunto</option>
                    </select>
                  </div>
                  <div>
                    <label className="block label-gold mb-2" htmlFor="mensagem">Mensagem</label>
                    <textarea
                      id="mensagem"
                      rows={4}
                      required
                      placeholder="Como podemos ajudar?"
                      className="w-full bg-cobore-black border border-cobore-border px-4 py-3 text-cobore-offwhite text-sm placeholder:text-cobore-gray focus:outline-none focus:border-cobore-gold transition-colors resize-none"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    Enviar mensagem
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

'use client'

import { useState } from 'react'
import { MapPin, Clock, MessageCircle } from 'lucide-react'

const WHATSAPP = '5553991297610'

export default function ContatoPage() {
  const [enviado, setEnviado] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const nome = (form.querySelector('#nome') as HTMLInputElement).value
    const assunto = (form.querySelector('#assunto') as HTMLSelectElement).value
    const mensagem = (form.querySelector('#mensagem') as HTMLTextAreaElement).value

    const texto = encodeURIComponent(
      `Olá! Vim pelo site do COBORE.\n\nNome: ${nome}\nAssunto: ${assunto}\n\nMensagem: ${mensagem}`
    )
    window.open(`https://wa.me/${WHATSAPP}?text=${texto}`, '_blank')
    setEnviado(true)
  }

  const mapsUrl = 'https://maps.google.com/?q=Rua+Barão+de+Santa+Tecla+466+Pelotas+RS'

  return (
    <div className="pt-20">
      <section className="section-padding bg-cobore-surface border-b border-cobore-border">
        <div className="container-cobore text-center">
          <p className="label-gold mb-4">Contato</p>
          <h1 className="font-display text-display-xl text-cobore-offwhite max-w-xl mx-auto">
            Fale com a gente.
          </h1>
          <p className="text-cobore-gray
cat > app/contato/page.tsx << 'EOF'
'use client'

import { useState } from 'react'
import { MapPin, Clock, MessageCircle } from 'lucide-react'

const WHATSAPP = '5553991297610'

export default function ContatoPage() {
  const [enviado, setEnviado] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const nome = (form.querySelector('#nome') as HTMLInputElement).value
    const assunto = (form.querySelector('#assunto') as HTMLSelectElement).value
    const mensagem = (form.querySelector('#mensagem') as HTMLTextAreaElement).value

    const texto = encodeURIComponent(
      `Olá! Vim pelo site do COBORE.\n\nNome: ${nome}\nAssunto: ${assunto}\n\nMensagem: ${mensagem}`
    )
    window.open(`https://wa.me/${WHATSAPP}?text=${texto}`, '_blank')
    setEnviado(true)
  }

  const mapsUrl = 'https://maps.google.com/?q=Rua+Barão+de+Santa+Tecla+466+Pelotas+RS'

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
                  
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cobore-gray text-sm leading-relaxed hover:text-cobore-gold transition-colors"
                  >
                    Rua Barão de Santa Tecla, 466<br />
                    Centro — Pelotas/RS
                  </a>
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
                  
                    href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Olá! Vim pelo site do COBORE e gostaria de mais informações.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-xs py-3 px-6 inline-flex"
                  >
                    Abrir conversa
                  </a>
                </div>
              </div>

              {/* Google Maps embed */}
              <div className="w-full h-48 border border-cobore-border overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3459.1!2d-52.3415!3d-31.7654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zUnVhIEJhcsOjbyBkZSBTYW50YSBUZWNsYSwgNDY2LCBDZW50cm8sIFBlbG90YXMvUlM!5e0!3m2!1spt-BR!2sbr!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
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
                      <option value="Quero agendar uma visita">Quero agendar uma visita</option>
                      <option value="Dúvida sobre reserva">Dúvida sobre reserva</option>
                      <option value="Informações sobre planos">Informações sobre planos</option>
                      <option value="Sala privativa mensal">Sala privativa mensal</option>
                      <option value="Outro assunto">Outro assunto</option>
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

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sobre',
  description: 'Conheça a história e a filosofia do COBORE Coworking, o espaço premium no centro de Pelotas/RS.',
}

export default function SobrePage() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-cobore-surface border-b border-cobore-border">
        <div className="container-cobore text-center">
          <p className="label-gold mb-4">Sobre o COBORE</p>
          <h1 className="font-display text-display-xl text-cobore-offwhite max-w-2xl mx-auto">
            Um espaço construído para quem leva o trabalho a sério.
          </h1>
        </div>
      </section>

      <section className="section-padding bg-cobore-black">
        <div className="container-cobore max-w-3xl">
          <div className="space-y-10 text-cobore-gray leading-relaxed">
            <div>
              <p className="label-gold mb-4">A ideia</p>
              <p>
                O COBORE nasceu da percepção de que Pelotas precisava de algo diferente. Não mais um coworking com mesas de madeira clara e frases motivacionais na parede. Mas um espaço que respeitasse o tempo, a imagem e o resultado de quem trabalha de verdade.
              </p>
            </div>

            <div>
              <p className="label-gold mb-4">A filosofia</p>
              <p>
                Produzir, receber e impressionar. Três verbos que definem por que cada detalhe do COBORE foi pensado — da iluminação da sala de reunião ao cafezinho servido em bandeja para o seu cliente. Primeiro impressão é estratégia, não cortesia.
              </p>
            </div>

            <div>
              <p className="label-gold mb-4">O espaço</p>
              <p>
                No centro de Pelotas, na Rua Barão de Santa Tecla, 466, o COBORE reúne open space, sala de reunião, estúdio de fotos, sala de gravação e sala privativa mensal — com recepção dedicada, Wi-Fi 800Mb, cozinha completa e área verde interna.
              </p>
            </div>

            <div>
              <p className="label-gold mb-4">Para quem</p>
              <p>
                Para o freelancer que cansou do home office. Para o advogado que precisa receber clientes com profissionalismo. Para o fotógrafo que não tem onde montar um estúdio. Para a pequena equipe que quer privacidade sem pagar aluguel comercial. O COBORE foi feito para quem faz acontecer.
              </p>
            </div>
          </div>

          <div className="mt-14 flex gap-4">
            <Link href="/espacos" className="btn-primary">Conhecer os espaços</Link>
            <Link href="/contato" className="btn-outline">Falar com a gente</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sobre',
  description: 'Conheça a história e a filosofia do COBORE Coworking, o espaço premium no centro de Pelotas/RS.',
}

export default function SobrePage() {
  return (
    <div className="pt-20">
      <div className="relative h-48 w-full overflow-hidden">
        <img src="/img/hero.jpg" alt="" className="w-full h-full object-cover object-center opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black" />
      </div>
      <section className="section-padding bg-cobore-surface border-b border-cobore-border">
        <div className="container-cobore text-center">
          <p className="label-gold mb-4">Sobre o COBORE</p>
          <h1 className="font-display text-display-xl text-cobore-offwhite max-w-2xl mx-auto">
            Mais que uma mesa de trabalho.
          </h1>
          <p className="text-cobore-gray mt-4 max-w-lg mx-auto text-sm">
            Produzir, receber e impressionar.
          </p>
        </div>
      </section>

      <section className="section-padding bg-cobore-black">
        <div className="container-cobore max-w-3xl">
          <div className="space-y-10 text-cobore-gray leading-relaxed">
            <div>
              <p className="label-gold mb-4">Quem somos</p>
              <p className="mb-4">
                No COBORE, acreditamos que um espaço de trabalho vai muito além de mesas e cadeiras. Criamos um ambiente de alto padrão que une estrutura, estratégia e conexões para impulsionar negócios.
              </p>
              <p className="mb-4">
                Aqui, cada detalhe foi pensado para que profissionais e empresas possam trabalhar, receber clientes e produzir conteúdos com a mesma qualidade de um grande escritório, mas com a flexibilidade e a criatividade de um hub moderno.
              </p>
              <p className="mb-4">
                Com recepção dedicada, salas de reunião, estúdios para foto e gravação, além de um espaço inspirador, o COBORE nasceu para ser o ponto de encontro entre profissionalismo, inovação e visibilidade.
              </p>
              <p>
                Mais do que coworking, somos a base estratégica para quem quer crescer, impressionar e se destacar.
              </p>
            </div>

            <div>
              <p className="label-gold mb-4">Por que somos um coworking diferente</p>
              <p className="mb-4">Nosso diferencial está em oferecer:</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2"><span className="text-cobore-gold mt-1">→</span><span><strong className="text-cobore-offwhite">Recepção dedicada:</strong> cada cliente seu é recebido com excelência.</span></li>
                <li className="flex items-start gap-2"><span className="text-cobore-gold mt-1">→</span><span><strong className="text-cobore-offwhite">Salas de reunião privativas:</strong> estrutura que transmite credibilidade.</span></li>
                <li className="flex items-start gap-2"><span className="text-cobore-gold mt-1">→</span><span><strong className="text-cobore-offwhite">Estúdios de foto e gravação:</strong> conteúdo profissional sem sair do espaço.</span></li>
                <li className="flex items-start gap-2"><span className="text-cobore-gold mt-1">→</span><span><strong className="text-cobore-offwhite">Ambiente premium:</strong> design e conforto que impressionam em cada detalhe.</span></li>
              </ul>
              <p>
                No COBORE, o coworking deixa de ser apenas compartilhamento de espaço e se transforma em uma experiência completa, pensada para elevar negócios, fortalecer marcas e criar oportunidades.
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

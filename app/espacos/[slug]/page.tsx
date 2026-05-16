import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

const espacos: Record<string, {
  nome: string
  subtitulo: string
  descricao: string
  detalhes: string[]
  preco: string
  precoDetalhe: string
  cta: string
  param: string
  fotos: string[]
}> = {
  'open-space': {
    nome: 'Open Space',
    subtitulo: 'Estação de trabalho compartilhada',
    descricao: 'Quatro estações ergonômicas disponíveis, climatizadas e com iluminação em painel LED suspenso. Um ambiente projetado para manter o foco e ainda dar espaço para o acaso de uma boa conversa.',
    detalhes: [
      'Cadeiras ergonômicas reguláveis',
      'Tomadas e USB individuais',
      'Wi-Fi 800Mb de fibra exclusivo',
      'Impressora compartilhada',
      'Climatização individual',
      'Armário com chave',
      'Cozinha equipada',
      'Área verde com deck',
      'Recepção dedicada',
      'Sala Meet (cortesia)',
      'Cafezinho incluso',
      'Segurança 24h',
    ],
    preco: 'A partir de R$40',
    precoDetalhe: 'Diária R$40 · Semana R$180 · Mensal R$580 · Trimestral R$530/mês',
    cta: 'Reservar estação',
    param: 'estacao',
    fotos: [
      '/img/open-space-1.jpg',
      '/img/open-space-2.jpg',
      '/img/open-space-3.jpg',
      '/img/open-space-4.jpg',
    ],
  },
  'sala-reuniao': {
    nome: 'Sala de Reunião',
    subtitulo: '"Space to Create"',
    descricao: 'Sala fechada com mesa para até 6 pessoas, TV de 55" para apresentações e a clássica parede preta com a tipografia "Space to Create". A recepcionista anuncia seus clientes na chegada e serve cafezinho premium em bandeja.',
    detalhes: [
      'Mesa para 6 pessoas',
      'TV 55" para apresentações',
      'Wi-Fi 800Mb',
      'Cafezinho premium em bandeja incluso',
      'Recepcionista dedicada',
      'Ar-condicionado',
      'Privacidade total — porta com chave',
      'Acesso pela recepção',
    ],
    preco: 'R$35/hora',
    precoDetalhe: 'Mesmo valor para 1ª hora e horas adicionais',
    cta: 'Reservar sala',
    param: 'sala-reuniao',
    fotos: ['/img/sala-reuniao-1.jpg', '/img/sala-reuniao-2.jpg'],
  },
  'sala-gravacao': {
    nome: 'Sala de Gravação',
    subtitulo: 'Fotos, vídeos e podcasts — por hora',
    descricao: 'Sala equipada com iluminação profissional, fundos e mobiliário para produções fotográficas, gravações de vídeo, podcasts e conteúdo institucional. Estrutura completa sem precisar montar um estúdio em casa.',
    detalhes: [
      'Iluminação profissional inclusa',
      'Tripés inclusos',
      'Fundos para foto e vídeo',
      'Sofá e poltrona para composição',
      'Mesa para still',
      'Ambiente com tratamento acústico',
      'Wi-Fi 800Mb',
      'Cafezinho incluso',
      'Ar-condicionado',
    ],
    preco: 'R$120 1ª hora',
    precoDetalhe: 'R$60 por hora adicional',
    cta: 'Reservar sala de gravação',
    param: 'sala-gravacao',
    fotos: [
      '/img/sala-gravacao-1.jpg',
      '/img/sala-gravacao-2.jpg',
      '/img/sala-gravacao-3.jpg',
      '/img/sala-gravacao-4.jpg',
    ],
  },
  'sala-privativa': {
    nome: 'Sala Privativa',
    subtitulo: 'Escritório exclusivo — aluguel mensal',
    descricao: 'Sala fechada premium com mobiliário claro, para profissionais ou equipes que precisam de um escritório exclusivo com toda a infraestrutura do COBORE. Aluguel por contrato mensal.',
    detalhes: [
      'Uso exclusivo — não compartilhada',
      'Mesa de trabalho ampla',
      'Mobiliário premium incluso',
      'Ar-condicionado individual',
      'Wi-Fi 800Mb',
      'Armários com chave',
      'Cafezinho incluso',
      'Recepção dedicada',
      'Cozinha compartilhada',
      'Área verde',
      'Segurança 24h',
    ],
    preco: 'A partir de R$860/mês',
    precoDetalhe: 'Valor final sob consulta + consumo de energia',
    cta: 'Consultar disponibilidade',
    param: 'privativa',
    fotos: ['/img/sala-privativa-1.jpg', '/img/sala-privativa-2.jpg'],
  },
  'sala-meet': {
    nome: 'Sala Meet',
    subtitulo: 'Cabine de videocall',
    descricao: 'Cabine fechada com vidro para videochamadas, calls rápidas e conversas privadas sem sair do open space. Perfeita para não interromper o fluxo de trabalho.',
    detalhes: [
      'Isolamento acústico',
      'Wi-Fi 800Mb',
      'Tomada e USB',
      'Cadeira ergonômica',
      'Iluminação dedicada',
      'Disponível para usuários do Open Space',
    ],
    preco: 'Incluso',
    precoDetalhe: 'Para assinantes do Open Space · Avulso sob consulta',
    cta: 'Reservar estação (inclui Sala Meet)',
    param: 'estacao',
    fotos: ['/img/sala-meet.jpg'],
  },
}

export async function generateStaticParams() {
  return Object.keys(espacos).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const e = espacos[params.slug]
  if (!e) return {}
  return {
    title: e.nome,
    description: e.descricao,
  }
}

export default function EspacoPage({ params }: { params: { slug: string } }) {
  const e = espacos[params.slug]
  if (!e) notFound()

  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '5553999999999'
  const msg = encodeURIComponent(`Olá! Tenho interesse em reservar ${e.nome} no COBORE.`)

  return (
    <div className="pt-20">
      {/* Header com foto de fundo */}
      <section className="relative h-72 overflow-hidden">
        {e.fotos[0] && (
          <>
            <Image
              src={e.fotos[0]}
              alt={e.nome}
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-cobore-black/50 to-cobore-black z-10" />
          </>
        )}
        <div className="relative z-20 h-full flex flex-col justify-end container-cobore max-w-4xl pb-8">
          <Link href="/espacos" className="text-cobore-gray/80 text-sm hover:text-cobore-gold transition-colors mb-4 inline-block">
            ← Todos os espaços
          </Link>
          <p className="label-gold mb-2">{e.subtitulo}</p>
          <h1 className="font-display text-display-xl text-cobore-offwhite">{e.nome}</h1>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="section-padding bg-cobore-black">
        <div className="container-cobore max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Detalhes */}
            <div className="lg:col-span-2">
              <p className="text-cobore-gray leading-relaxed mb-10">{e.descricao}</p>

              <h2 className="font-display text-xl font-semibold text-cobore-offwhite mb-6">O que está incluso</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {e.detalhes.map((d) => (
                  <li key={d} className="flex items-center gap-3 text-sm text-cobore-gray">
                    <span className="w-1.5 h-1.5 rounded-full bg-cobore-gold shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>

              {/* Galeria de fotos */}
              {e.fotos.length > 1 && (
                <>
                  <h2 className="font-display text-xl font-semibold text-cobore-offwhite mb-6">Fotos do espaço</h2>
                  <div className="grid grid-cols-2 gap-3">
                    {e.fotos.map((foto, i) => (
                      <div key={i} className="relative h-48 overflow-hidden rounded-sm">
                        <Image
                          src={foto}
                          alt={`${e.nome} — foto ${i + 1}`}
                          fill
                          className="object-cover object-center hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 50vw, 25vw"
                        />
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Preço e CTA */}
            <div className="lg:col-span-1">
              <div className="card-surface p-6 sticky top-24">
                <p className="label-gold mb-2">Valor</p>
                <p className="font-display text-3xl font-bold text-cobore-gold mb-1">{e.preco}</p>
                <p className="text-cobore-gray text-xs mb-6">{e.precoDetalhe}</p>

                <div className="space-y-3">
                  <Link
                    href={`/reservar?espaco=${e.param}`}
                    className="btn-primary w-full text-center block"
                  >
                    {e.cta}
                  </Link>
                  <a
                    href={`https://wa.me/${whatsapp}?text=${msg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline w-full text-center block"
                  >
                    Falar no WhatsApp
                  </a>
                </div>

                <p className="text-cobore-gray text-xs text-center mt-4">
                  Seg–Sex 8h–21h · Sáb 9h–16h
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

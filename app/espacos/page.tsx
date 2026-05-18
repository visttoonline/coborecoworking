import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Espaços',
  description: 'Conheça os espaços do COBORE: open space, sala de reunião, sala de gravação, sala privativa e sala meet.',
}

const espacos = [
  {
    slug: 'open-space',
    nome: 'Open Space',
    subtitulo: 'Estação de trabalho compartilhada',
    desc: 'Estações ergonômicas, climatizadas, com Wi-Fi 800Mb, tomadas individuais e impressora compartilhada.',
    preco: 'A partir de R$40/dia',
    tag: 'PRODUZIR',
    foto: '/img/open-space-1.jpg',
  },
  {
    slug: 'sala-reuniao',
    nome: 'Sala de Reunião',
    subtitulo: 'Space to Create',
    desc: 'Mesa para 6 pessoas, TV, parede assinada e recepcionista que recebe seus clientes com cafezinho em bandeja.',
    preco: 'R$35/hora',
    tag: 'RECEBER',
    foto: '/img/sala-reuniao-1.jpg',
  },
  {
    slug: 'sala-gravacao',
    nome: 'Sala de Gravação',
    subtitulo: 'Fotos, vídeos e podcasts',
    desc: 'Iluminação profissional, fundos, poltronas e mesa. Para fotógrafos, podcasters, infoprodutores e gravações institucionais.',
    preco: 'R$120 1ª hora · R$60 adicionais',
    tag: 'IMPRESSIONAR',
    foto: '/img/sala-gravacao-1.jpg',
  },
  {
    slug: 'sala-privativa',
    nome: 'Sala Privativa',
    subtitulo: 'Escritório exclusivo mensal',
    desc: 'Sala fechada premium para profissionais ou equipes que precisam de privacidade total com toda a infraestrutura do COBORE.',
    preco: 'A partir de R$860/mês',
    tag: 'RECEBER',
    foto: '/img/sala-privativa-1.jpg',
  },
  {
    slug: 'sala-meet',
    nome: 'Sala Meet',
    subtitulo: 'Cabine de videocall',
    desc: 'Cabine fechada com vidro para videochamadas e calls rápidas — sem sair do open space, sem interromper ninguém.',
    preco: 'Incluso no Open Space',
    tag: 'PRODUZIR',
    foto: '/img/sala-meet.jpg',
  },
]

export default function EspacosPage() {
  return (
    <div className="pt-20">
      <div className="relative w-full overflow-hidden" style={{height:"420px"}}>
        <img src="/img/Bertuol-14.jpg" alt="" className="w-full h-full object-cover object-center" style={{opacity:0.45}} />
        <div className="absolute inset-0" style={{background:"linear-gradient(to bottom, rgba(10,10,10,0.5), rgba(10,10,10,0.7))"}} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <p className="label-gold mb-4">Espaços</p>
          <h1 className="font-display text-display-xl text-cobore-offwhite max-w-2xl mx-auto">
            Cada espaço pensado para uma função.
          </h1>
          <p className="text-cobore-gray mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Do foco individual à reunião com cliente, da sessão de fotos ao podcast — tudo no mesmo endereço no centro de Pelotas.
          </p>
        </div>
      </div>

      {/* Grid */}
      <section className="section-padding bg-cobore-black">
        <div className="container-cobore">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {espacos.map((e) => (
              <Link
                key={e.slug}
                href={`/espacos/${e.slug}`}
                className="card-surface group hover:border-cobore-gold/40 transition-colors duration-300 flex flex-col"
              >
                {/* Foto real */}
                <div className="h-52 bg-cobore-softblack relative overflow-hidden">
                  <Image
                    src={e.foto}
                    alt={e.nome}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cobore-black/50 to-transparent z-10" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="label-gold mb-2">{e.tag}</span>
                  <h2 className="font-display text-xl font-semibold text-cobore-offwhite mb-1">
                    {e.nome}
                  </h2>
                  <p className="text-cobore-gray text-xs mb-3">{e.subtitulo}</p>
                  <p className="text-cobore-gray text-sm leading-relaxed flex-1">{e.desc}</p>
                  <div className="mt-4 pt-4 border-t border-cobore-border flex items-center justify-between">
                    <span className="text-cobore-gold text-sm font-semibold">{e.preco}</span>
                    <span className="text-cobore-gold text-sm group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

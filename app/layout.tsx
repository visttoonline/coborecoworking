import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { Bricolage_Grotesque } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
})

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  adjustFontFallback: false,
})

export const metadata: Metadata = {
  title: {
    default: 'COBORE Coworking — Coworking Premium em Pelotas/RS',
    template: '%s | COBORE Coworking',
  },
  description:
    'Mais que uma mesa de trabalho. Espaço de coworking premium no centro de Pelotas com estações de trabalho, sala de reunião, estúdio de fotos e sala de gravação.',
  keywords: [
    'coworking Pelotas',
    'sala de reunião Pelotas',
    'estúdio fotográfico Pelotas',
    'sala de gravação Pelotas',
    'endereço fiscal Pelotas',
    'coworking RS',
    'espaço de trabalho Pelotas',
  ],
  authors: [{ name: 'COBORE Coworking' }],
  creator: 'COBORE Coworking',
  metadataBase: new URL('https://cobore.com.br'),
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://cobore.com.br',
    siteName: 'COBORE Coworking',
    title: 'COBORE Coworking — Mais que uma mesa de trabalho.',
    description:
      'Coworking premium no centro de Pelotas. Produzir, receber e impressionar.',
    images: [
      {
        url: '/img/og-cover.jpg',
        width: 1200,
        height: 630,
        alt: 'COBORE Coworking — Espaço premium em Pelotas/RS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'COBORE Coworking',
    description: 'Coworking premium no centro de Pelotas. Produzir, receber e impressionar.',
    images: ['/img/og-cover.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${geist.variable} ${bricolage.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'COBORE Coworking',
              description: 'Coworking premium no centro de Pelotas/RS',
              url: 'https://cobore.com.br',
              telephone: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER,
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Rua Barão de Santa Tecla, 466',
                addressLocality: 'Pelotas',
                addressRegion: 'RS',
                postalCode: '96010-140',
                addressCountry: 'BR',
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '08:00',
                  closes: '21:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Saturday'],
                  opens: '09:00',
                  closes: '16:00',
                },
              ],
              priceRange: 'R$40–R$580',
            }),
          }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}

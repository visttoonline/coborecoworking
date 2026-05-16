import { Hero } from '@/components/sections/Hero'
import { TresVerbos } from '@/components/sections/TresVerbos'
import { Diferenciais } from '@/components/sections/Diferenciais'
import { Calculadora } from '@/components/sections/Calculadora'
import { FAQ } from '@/components/sections/FAQ'
import { CTAFinal } from '@/components/sections/CTAFinal'

export default function Home() {
  return (
    <>
      <Hero />
      <TresVerbos />
      <Diferenciais />
      <Calculadora />
      <FAQ />
      <CTAFinal />
    </>
  )
}

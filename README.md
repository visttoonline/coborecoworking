# COBORE Coworking — Site Oficial

Site institucional com sistema de agendamento e pagamento online.

## Stack

- **Next.js 14** (App Router + TypeScript)
- **Tailwind CSS** + design system COBORE
- **Framer Motion** para animações
- **Shadcn/ui** para componentes
- **Prisma** + PostgreSQL (Fase 2)
- **Google Calendar API** (Fase 2)
- **Mercado Pago** (Fase 3)
- **Resend** para emails (Fase 2)

## Começando

```bash
# Instalar dependências
npm install

# Configurar variáveis de ambiente
cp .env.local.example .env.local
# Edite .env.local com seus valores

# Rodar em desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Estrutura do projeto

```
app/
  page.tsx              → Landing page
  espacos/
    page.tsx            → Galeria de espaços
    [slug]/page.tsx     → Espaço individual
  planos/page.tsx       → Tabela + calculadora
  reservar/page.tsx     → Fluxo de reserva
  sobre/page.tsx        → Sobre o COBORE
  contato/page.tsx      → Formulário + mapa
components/
  Navbar.tsx
  Footer.tsx
  WhatsAppButton.tsx
  sections/
    Hero.tsx
    TresVerbos.tsx
    Diferenciais.tsx
    Calculadora.tsx
    FAQ.tsx
    CTAFinal.tsx
```

## Pendências antes do go-live (Vivi)

- [ ] Substituir fotos placeholder em `/public/img/`
- [ ] Preencher `.env.local` com WhatsApp real
- [ ] Configurar Google Cloud + Calendar API (Fase 2)
- [ ] Criar conta Mercado Pago de produção (Fase 3)
- [ ] Definir política de cancelamento
- [ ] Adicionar Google Maps embed na página de contato

## Deploy

O projeto está pronto para deploy no **Vercel**. Conecte o repositório GitHub e configure as variáveis de ambiente no painel da Vercel.

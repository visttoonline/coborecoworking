import { MessageCircle } from 'lucide-react'

export function WhatsAppButton() {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '5553991297610'
  const message = encodeURIComponent('Olá! Vi o site do COBORE e gostaria de mais informações.')
  const url = `https://wa.me/${phone}?text=${message}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:scale-110 transition-transform duration-200"
    >
      <MessageCircle size={28} fill="white" className="text-white" />
    </a>
  )
}

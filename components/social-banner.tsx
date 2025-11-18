import { MessageCircle, Send, Phone } from 'lucide-react'

export default function SocialBanner() {
  return (
    <section className="py-8 px-4 bg-primary/10 border-y border-border">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-sm text-muted-foreground mb-6">Follow us for exclusive offers and beauty tips</p>
        <div className="flex justify-center gap-6 md:gap-12">
          <a href="#" className="flex items-center gap-2 text-primary hover:text-primary/80 transition">
            <Send className="w-5 h-5" />
            <span className="hidden md:inline">Telegram</span>
          </a>
          <a href="#" className="flex items-center gap-2 text-primary hover:text-primary/80 transition">
            <MessageCircle className="w-5 h-5" />
            <span className="hidden md:inline">Instagram</span>
          </a>
          <a href="#" className="flex items-center gap-2 text-primary hover:text-primary/80 transition">
            <Phone className="w-5 h-5" />
            <span className="hidden md:inline">WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  )
}

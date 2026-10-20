import { Calendar, Sparkles, Microscope, UserCheck, CheckCircle2 } from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { ConsultBookingForm } from '@/components/consult-booking-form'

export const metadata = {
  title: 'Consult a Dermatologist - REHHA',
  description: 'Book a skin analysis with a licensed dermatologist in Nairobi. Understand your skin — no guesswork.',
}

export default function ConsultDermatologist() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="bg-secondary/10 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" /> Expert Skin Analysis
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Know Your Skin. Treat It Right.
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Book a professional skin analysis with one of our licensed dermatologists.
            We use advanced skin analysis technology to understand your skin — then build a routine that actually works for you.
          </p>
          <a
            href="#booking"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold hover:opacity-90 transition"
          >
            <Calendar className="w-5 h-5" /> Book Your Consultation
          </a>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Book Your Slot', desc: 'Choose a date and time at our Nairobi clinic, or select a virtual consultation.' },
              { step: '02', title: 'Skin Analysis', desc: 'Our dermatologist uses a skin analysis device to assess hydration, pigmentation, pores, and more.' },
              { step: '03', title: 'Personalized Plan', desc: 'Walk away with a clear understanding of your skin and a product routine tailored to you.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-5xl font-bold text-primary/20 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skin Analysis Machine / Education */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Microscope className="w-4 h-4" /> The Science
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                What Our Skin Analysis Machine Measures
              </h2>
              <p className="text-muted-foreground mb-6">
                No guesswork. Our dermatologist-grade device scans your skin across multiple dimensions
                so we can identify exactly what it needs.
              </p>
              <ul className="space-y-3">
                {[
                  'Hydration levels and moisture retention',
                  'Pigmentation and sun damage',
                  'Pore size and sebum production',
                  'Fine lines, texture, and elasticity',
                  'Sensitivity and redness patterns',
                  'Acne and breakout tendencies',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-muted rounded-lg aspect-square flex items-center justify-center">
              <span className="text-muted-foreground text-sm">Skin analysis device image</span>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Dermatologists */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-4">Meet Our Dermatologists</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Licensed professionals with years of experience treating a wide range of skin types and conditions.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Dr. [Name]', title: 'Consultant Dermatologist', specialty: 'Acne & Pigmentation' },
              { name: 'Dr. [Name]', title: 'Cosmetic Dermatologist', specialty: 'Anti-Aging & Texture' },
              { name: 'Dr. [Name]', title: 'Pediatric Dermatologist', specialty: 'Baby & Sensitive Skin' },
            ].map((doc) => (
              <div key={doc.name + doc.specialty} className="text-center bg-card border border-border rounded-lg p-6">
                <div className="bg-muted w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <UserCheck className="w-10 h-10 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-foreground">{doc.name}</h3>
                <p className="text-sm text-primary mb-1">{doc.title}</p>
                <p className="text-sm text-muted-foreground">{doc.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking" className="py-16 px-4 bg-muted/50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-3">Book Your Consultation</h2>
            <p className="text-muted-foreground">
              Fill in your details and we'll confirm your appointment within 24 hours.
            </p>
          </div>
          <ConsultBookingForm />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: 'How long does a consultation take?', a: 'A typical consultation, including skin analysis and product recommendations, takes about 45 minutes.' },
              { q: 'Do I need to book in advance?', a: 'Yes, we recommend booking at least 2 days in advance so we can allocate a dermatologist and time slot.' },
              { q: 'Is the consultation free?', a: 'Consultation fees vary. Contact us via the booking form for current pricing and any ongoing promotions.' },
              { q: 'Can I consult virtually?', a: 'Yes. Select "Virtual" as your preferred location in the booking form, and we will send you a video call link.' },
            ].map((faq) => (
              <details key={faq.q} className="bg-card border border-border rounded-lg p-4 cursor-pointer group">
                <summary className="font-semibold text-foreground list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-primary group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                </summary>
                <p className="text-muted-foreground mt-3 text-sm">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
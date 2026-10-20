import Link from 'next/link'
import { Briefcase, MapPin, Mail, Heart, Users, Sparkles } from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata = {
  title: 'Careers - REHHA',
  description: 'Join the REHHA team — building beauty and skincare across Kenya.',
}

export default function Careers() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="bg-secondary/10 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Careers at REHHA</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're building the future of skincare in Kenya — one product, one consultation, one customer at a time.
            If you're passionate about beauty, wellness, and making people feel confident in their skin, we'd love to meet you.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Why Work With Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Purpose-Driven Work</h3>
              <p className="text-muted-foreground text-sm">
                Every product and consultation helps someone feel more confident. Your work matters.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Collaborative Culture</h3>
              <p className="text-muted-foreground text-sm">
                We work cross-functionally — dermatologists, product teams, and retail all in the same room.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Growth Opportunities</h3>
              <p className="text-muted-foreground text-sm">
                As we grow across Kenya, so do the opportunities for our team to lead and specialize.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Open Positions</h2>

          <div className="space-y-4">
            {[
              {
                title: 'Retail Associate — Nairobi',
                type: 'Full-time',
                location: 'Nairobi, Kenya',
                description: 'Help customers find the right skincare products and book consultations in-store.',
              },
              {
                title: 'Licensed Dermatologist',
                type: 'Full-time / Part-time',
                location: 'Nairobi, Kenya',
                description: 'Conduct skin analysis consultations and provide expert advice to customers.',
              },
              {
                title: 'Digital Marketing Specialist',
                type: 'Full-time',
                location: 'Nairobi, Kenya (Hybrid)',
                description: 'Manage social media, email campaigns, and content to grow our online presence.',
              },
            ].map((job) => (
              <div key={job.title} className="bg-card border border-border rounded-lg p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-1">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-2">
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" /> {job.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" /> {job.location}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{job.description}</p>
                </div>
                <Link
                  href="mailto:careers@rehha.com?subject=Application"
                  className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:opacity-90 transition whitespace-nowrap"
                >
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* No Position? */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Don't See Your Role?</h2>
          <p className="text-muted-foreground mb-6">
            We're always looking for talented people. Send your CV and a short introduction to{' '}
            <a href="mailto:careers@rehha.com" className="text-primary font-semibold hover:underline">
              careers@rehha.com
            </a>
            {' '}and we'll keep you in mind.
          </p>
          <a
            href="mailto:careers@rehha.com"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            <Mail className="w-5 h-5" />
            Get in touch
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
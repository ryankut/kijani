'use client'

import { useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Heart, Sparkles, Leaf, Users, Award, Globe } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('story')

  const team = [
    { 
      name: 'Sarah Moon', 
      role: 'Founder & CEO', 
      image: '/team-founder.jpg',
      bio: 'Chemist & visionary founder'
    },
    { 
      name: 'Emma Rose', 
      role: 'Chief Formulator', 
      image: '/team-formulator.jpg',
      bio: 'Beauty science expert'
    },
    { 
      name: 'Zara Khan', 
      role: 'Creative Director', 
      image: '/team-creative.jpg',
      bio: 'Design & brand storyteller'
    },
  ]

  const values = [
    { 
      icon: Sparkles, 
      title: 'Innovation', 
      description: 'Cutting-edge formulas combining nature and science' 
    },
    { 
      icon: Leaf, 
      title: 'Sustainability', 
      description: 'Eco-friendly packaging and ethical sourcing practices' 
    },
    { 
      icon: Heart, 
      title: 'Luxury', 
      description: 'Premium ingredients sourced from around the world' 
    },
  ]

  const milestones = [
    { year: '2015', title: 'Founded', description: 'REHHA begins with passion and purpose' },
    { year: '2018', title: 'Global Expansion', description: 'Now available in 30+ countries' },
    { year: '2021', title: 'Award Winner', description: 'Recognized for sustainability leadership' },
    { year: '2024', title: 'Community Hub', description: 'Trusted by 500K+ beauty enthusiasts' },
  ]

  const achievements = [
    { icon: Users, title: '500K+', subtitle: 'Happy Customers' },
    { icon: Award, title: '25+', subtitle: 'Awards Won' },
    { icon: Globe, title: '50+', subtitle: 'Countries Served' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-pink-50 to-white">
      <Header />

      <main>
        {/* Hero Section */}
<section className="relative py-24 md:py-32 px-4 overflow-hidden">

  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-50"
    style={{ backgroundImage: "url('/about-hero.jpg')" }}
  ></div>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  <div className="max-w-5xl mx-auto relative text-center md:text-left">
    <div className="space-y-6">

      {/* Title */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
        Luxury Beauty,
        <span className="text-primary"> Naturally Yours</span>
      </h1>

      {/* Description */}
      <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
        Since 2015, REHHA has created premium beauty essentials crafted with clean formulations,
        botanical extracts, and timeless elegance — designed to enhance your natural glow.
      </p>

      {/* Decoration Line */}
      <div className="w-24 h-1 bg-primary/60 rounded-full mt-4"></div>
    </div>
  </div>

</section>


        {/* Achievements */}
        <section className="py-12 md:py-16 px-4 bg-white/60 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {achievements.map((achievement, idx) => {
                const Icon = achievement.icon
                return (
                  <div key={idx} className="text-center">
                    <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <p className="text-3xl md:text-4xl font-bold text-foreground">
                      {achievement.title}
                    </p>
                    <p className="text-muted-foreground">{achievement.subtitle}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Story
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <img 
                src="/about-story.jpg"
                className="w-full h-72 md:h-96 object-cover rounded-3xl shadow-lg"
              />

              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Founded with a passion for clean beauty, REHHA brings together the purity of nature and the precision of modern science.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our mission: create luxurious skincare that feels good, works beautifully, and supports the planet.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Today, REHHA is celebrated globally for its premium formulations and ethical approach.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 md:py-24 px-4 bg-rose-50/60">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Core Values
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, idx) => {
                const Icon = value.icon
                return (
                  <div 
                    key={idx}
                    className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl border border-rose-100 transition"
                  >
                    <Icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 px-4 bg-gradient-to-b from-white to-rose-50/40">
  <div className="max-w-6xl mx-auto">

    <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
      Our Journey
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      {milestones.map((m, idx) => (
        <div 
          key={idx} 
          className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-rose-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          {/* Soft vertical border accent */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/60 to-primary/20 rounded-l-xl"></div>

          <p className="text-sm font-semibold text-primary tracking-wide">{m.year}</p>
          <h3 className="text-xl font-bold mt-2 text-foreground">{m.title}</h3>
          <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{m.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>


        {/* Team */}
        <section className="py-16 md:py-24 px-4 bg-rose-50/70">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Meet Our Team
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {team.map((member, idx) => (
                <div key={idx} className="text-center">
                  <div className="relative overflow-hidden rounded-3xl shadow-lg">
                    <img 
                      src={member.image} 
                      className="w-full h-80 object-cover transition duration-300 hover:scale-105"
                    />
                  </div>

                  <h3 className="text-xl font-bold mt-4">{member.name}</h3>
                  <p className="text-primary font-semibold">{member.role}</p>
                  <p className="text-sm text-muted-foreground mt-2">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 text-center bg-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Beauty Community
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover luxury skincare infused with science, nature, and elegance.  
            Your journey to glowing beauty starts here.
          </p>

          <Link 
            href="/shop-all"
            className="px-10 py-4 rounded-full bg-primary text-primary-foreground shadow-md hover:shadow-lg transition"
          >
            Start Your Beauty Journey
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  )
}

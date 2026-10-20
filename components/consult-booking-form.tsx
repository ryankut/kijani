'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export function ConsultBookingForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    location: 'nairobi',
    concern: '',
    skinType: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: replace with real API call when backend is ready
    console.log('Booking submitted:', form)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-card border border-border rounded-lg p-8 text-center">
        <div className="text-primary text-5xl mb-4">✓</div>
        <h3 className="text-xl font-semibold text-foreground mb-2">Booking Received!</h3>
        <p className="text-muted-foreground">
          Thank you, {form.name}. We'll contact you at {form.phone} within 24 hours to confirm your appointment.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-6 md:p-8 space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Full Name *</label>
          <input required name="name" value={form.name} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary" />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Email *</label>
          <input required type="email" name="email" value={form.email} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary" />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Phone (WhatsApp) *</label>
          <input required name="phone" value={form.phone} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary" placeholder="+254..." />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Preferred Location *</label>
          <select name="location" value={form.location} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary">
            <option value="nairobi">Nairobi Clinic</option>
            <option value="virtual">Virtual (Video Call)</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Preferred Date *</label>
          <input required type="date" name="date" value={form.date} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary" />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Preferred Time *</label>
          <input required type="time" name="time" value={form.time} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground mb-1">Skin Type (if known)</label>
        <select name="skinType" value={form.skinType} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary">
          <option value="">I'm not sure</option>
          <option value="oily">Oily</option>
          <option value="dry">Dry</option>
          <option value="combination">Combination</option>
          <option value="sensitive">Sensitive</option>
          <option value="normal">Normal</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground mb-1">Main Concern</label>
        <textarea name="concern" value={form.concern} onChange={handleChange} rows={3} className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary" placeholder="E.g. acne, pigmentation, dry skin, anti-aging..." />
      </div>
      <Button type="submit" size="lg" className="w-full rounded-full">
        Book Consultation
      </Button>
      <p className="text-xs text-muted-foreground text-center">
        By submitting, you agree to be contacted by REHHA regarding your appointment.
      </p>
    </form>
  )
}
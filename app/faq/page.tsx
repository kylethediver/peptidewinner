'use client'
import { useState } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { faqs } from '@/lib/data'
import Link from 'next/link'

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <>
      <Nav />
      <main>
        <section style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0', padding: '64px 24px 48px' }}>
          <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
            <p className="eyebrow" style={{ marginBottom: 12 }}>FAQ</p>
            <h1 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 'clamp(32px, 4vw, 48px)', color: '#0F172A', marginBottom: 16 }}>Frequently Asked Questions</h1>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 17, color: '#6B7280', lineHeight: 1.6 }}>Everything you need to know about PeptideWinner and peptide therapy.</p>
          </div>
        </section>
        <section style={{ padding: '64px 24px 96px' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderBottom: '1px solid #E2E8F0' }}>
                <button onClick={() => setOpen(open === i ? null : i)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: 16 }}>
                  <span style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 17, color: '#0F172A', lineHeight: 1.4 }}>{faq.question}</span>
                  <span style={{ color: open === i ? '#0EA5E9' : '#9CA3AF', fontSize: 20, flexShrink: 0 }}>{open === i ? '▲' : '▼'}</span>
                </button>
                {open === i && (
                  <div style={{ paddingBottom: 24 }}>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: '#374151', lineHeight: 1.75 }}>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
            <div style={{ marginTop: 64, background: '#F8FAFC', borderRadius: 16, padding: 40, textAlign: 'center', border: '1px solid #E2E8F0' }}>
              <h2 style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 22, color: '#0F172A', marginBottom: 12 }}>Still have questions?</h2>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: '#6B7280', marginBottom: 24 }}>Reach out and we will get back to you within 24 hours.</p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="mailto:hello@peptidewinner.com" className="btn-primary" style={{ fontSize: 15 }}>Contact Us</a>
                <Link href="/start" className="btn-secondary" style={{ fontSize: 15 }}>Take the Quiz</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

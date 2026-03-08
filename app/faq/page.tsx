'use client'
import { useState } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { faqs } from '@/lib/data'

export default function FaqPage() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <>
      <Nav />
      <main style={{ background:'var(--pw-white)', minHeight:'100vh' }}>
        <section style={{ padding:'clamp(64px,7vw,96px) 32px', background:'var(--pw-midnight)', position:'relative', overflow:'hidden' }}>
          <div style={{ position:'absolute', top:-80, left:-80, width:500, height:500, borderRadius:'50%', background:'var(--pw-butter)', filter:'blur(80px)', opacity:0.20, pointerEvents:'none' }} />
          <div style={{ maxWidth:1160, margin:'0 auto', position:'relative', zIndex:1 }}>
            <div style={{ display:'inline-flex', alignItems:'center', gap:10, marginBottom:24 }}>
              <span style={{ display:'block', width:32, height:1, background:'rgba(255,255,255,0.20)' }} />
              <span style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.20em', textTransform:'uppercase', color:'rgba(255,255,255,0.40)' }}>FAQ</span>
            </div>
            <h1 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(40px,6vw,72px)', color:'white', fontWeight:700, letterSpacing:'-0.03em', lineHeight:0.95, marginBottom:20 }}>
              Frequently asked<br/>
              <span style={{ background:'linear-gradient(135deg,#F2F0C8,#C9EDDF)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>questions.</span>
            </h1>
          </div>
        </section>
        <section style={{ padding:'clamp(48px,5vw,72px) 32px' }}>
          <div style={{ maxWidth:760, margin:'0 auto' }}>
            {faqs.map((faq: any, i: number) => (
              <div key={i} style={{ borderBottom:'1px solid rgba(20,24,38,0.08)', overflow:'hidden' }}>
                <button onClick={() => setOpen(open === i ? null : i)} style={{
                  width:'100%', textAlign:'left', padding:'24px 0', background:'none', border:'none', cursor:'pointer',
                  display:'flex', justifyContent:'space-between', alignItems:'center', gap:16,
                }}>
                  <span style={{ fontFamily:'var(--font-display)', fontSize:18, fontWeight:600, color:'var(--pw-midnight)', letterSpacing:'-0.01em' }}>{faq.question}</span>
                  <span style={{ fontFamily:'var(--font-mono)', fontSize:18, color:'var(--pw-ink-30)', flexShrink:0, transition:'transform 0.2s', display:'block', transform: open===i ? 'rotate(45deg)' : 'none' }}>+</span>
                </button>
                {open === i && (
                  <div style={{ paddingBottom:24 }}>
                    <p style={{ fontFamily:'var(--font-body)', fontSize:15, fontWeight:300, color:'var(--pw-ink-60)', lineHeight:1.75 }}>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

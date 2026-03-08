import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main style={{ background:'var(--pw-white)', minHeight:'100vh' }}>
        <section style={{ padding:'clamp(64px,7vw,96px) 32px', background:'var(--pw-midnight)', position:'relative', overflow:'hidden' }}>
          <div style={{ position:'absolute', bottom:-100, right:-100, width:500, height:500, borderRadius:'50%', background:'var(--pw-blush)', filter:'blur(80px)', opacity:0.20, pointerEvents:'none' }} />
          <div style={{ maxWidth:1160, margin:'0 auto', position:'relative', zIndex:1 }}>
            <div style={{ display:'inline-flex', alignItems:'center', gap:10, marginBottom:24 }}>
              <span style={{ display:'block', width:32, height:1, background:'rgba(255,255,255,0.20)' }} />
              <span style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.20em', textTransform:'uppercase', color:'rgba(255,255,255,0.40)' }}>Contact</span>
            </div>
            <h1 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(40px,6vw,72px)', color:'white', fontWeight:700, letterSpacing:'-0.03em', lineHeight:0.95 }}>
              Get in<br/>
              <span style={{ background:'linear-gradient(135deg,#F5D8E8,#DDD5F5)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>touch.</span>
            </h1>
          </div>
        </section>
        <section style={{ padding:'clamp(64px,7vw,96px) 32px' }}>
          <div style={{ maxWidth:560, margin:'0 auto' }}>
            <p style={{ fontFamily:'var(--font-body)', fontSize:16, fontWeight:300, color:'var(--pw-ink-60)', lineHeight:1.8, marginBottom:48 }}>
              For provider listing inquiries, editorial corrections, affiliate partnerships, or general questions — reach us at the email below.
            </p>
            <div style={{ background:'var(--pw-surface)', borderRadius:20, padding:'36px', border:'1px solid rgba(20,24,38,0.07)' }}>
              <div style={{ fontFamily:'var(--font-mono)', fontSize:10, color:'var(--pw-ink-30)', textTransform:'uppercase', letterSpacing:'0.16em', marginBottom:8 }}>Email</div>
              <a href="mailto:hello@peptidewinner.com" style={{ fontFamily:'var(--font-display)', fontSize:22, fontWeight:600, color:'var(--pw-midnight)', textDecoration:'none', letterSpacing:'-0.02em' }}>hello@peptidewinner.com</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

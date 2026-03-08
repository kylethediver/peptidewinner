import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { articles } from '@/lib/data'

export default function InsightsPage() {
  return (
    <>
      <Nav />
      <main style={{ background:'var(--pw-white)', minHeight:'100vh' }}>
        <section style={{ padding:'clamp(64px,7vw,96px) 32px', background:'var(--pw-midnight)', position:'relative', overflow:'hidden' }}>
          <div style={{ position:'absolute', top:-100, right:-100, width:500, height:500, borderRadius:'50%', background:'var(--pw-butter)', filter:'blur(80px)', opacity:0.20, pointerEvents:'none' }} />
          <div style={{ maxWidth:1160, margin:'0 auto', position:'relative', zIndex:1 }}>
            <div style={{ display:'inline-flex', alignItems:'center', gap:10, marginBottom:24 }}>
              <span style={{ display:'block', width:32, height:1, background:'rgba(255,255,255,0.20)' }} />
              <span style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.20em', textTransform:'uppercase', color:'rgba(255,255,255,0.40)' }}>Peptide Insights</span>
            </div>
            <h1 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(40px,6vw,72px)', color:'white', fontWeight:700, letterSpacing:'-0.03em', lineHeight:0.95, marginBottom:20 }}>
              Evidence-based<br/>
              <span style={{ background:'linear-gradient(135deg,#F2F0C8,#C9EDDF)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>peptide research.</span>
            </h1>
            <p style={{ fontFamily:'var(--font-body)', fontSize:18, fontWeight:300, color:'rgba(255,255,255,0.50)', maxWidth:480, lineHeight:1.75 }}>
              Clinical breakdowns, protocol comparisons, and provider analysis from our research team.
            </p>
          </div>
        </section>
        <section style={{ padding:'clamp(48px,5vw,72px) 32px' }}>
          <div style={{ maxWidth:1160, margin:'0 auto' }}>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(320px, 1fr))', gap:20 }}>
              {articles.map(a => (
                <Link key={a.slug} href={`/insights/${a.slug}`} style={{ textDecoration:'none' }}>
                  <div style={{ borderRadius:20, overflow:'hidden', background:'white', boxShadow:'0 2px 16px rgba(14,17,32,0.06)', border:'1px solid rgba(20,24,38,0.07)' }}>
                    <img src={a.image} alt={a.title} style={{ width:'100%', height:200, objectFit:'cover', display:'block' }} />
                    <div style={{ padding:'24px 26px' }}>
                      <span style={{ fontFamily:'var(--font-mono)', fontSize:10, fontWeight:700, color:'var(--pw-ink-60)', textTransform:'uppercase', letterSpacing:'0.14em' }}>{a.category}</span>
                      <h2 style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:18, color:'var(--pw-midnight)', margin:'10px 0 8px', lineHeight:1.3, letterSpacing:'-0.01em' }}>{a.title}</h2>
                      <p style={{ fontFamily:'var(--font-body)', fontSize:14, fontWeight:300, color:'var(--pw-ink-60)', lineHeight:1.65, marginBottom:16 }}>{a.excerpt}</p>
                      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                        <span style={{ fontFamily:'var(--font-mono)', fontSize:11, color:'var(--pw-ink-30)', letterSpacing:'0.06em' }}>{a.readTime} · {a.date}</span>
                        <span style={{ fontFamily:'var(--font-body)', fontSize:13, fontWeight:500, color:'var(--pw-midnight)' }}>Read →</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

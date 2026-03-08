import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { reviews } from '@/lib/data'

function Stars({ rating }: { rating: number }) {
  return (
    <span style={{ fontSize: 13, letterSpacing: '-1px' }}>
      {[1,2,3,4,5].map(s => (
        <span key={s} style={{ color: s <= Math.round(rating) ? '#F59E0B' : 'rgba(20,24,38,0.15)' }}>★</span>
      ))}
    </span>
  )
}

export default function ReviewsPage() {
  return (
    <>
      <Nav />
      <main style={{ background:'var(--pw-white)', minHeight:'100vh' }}>
        <section style={{ padding:'clamp(64px,7vw,96px) 32px', background:'var(--pw-midnight)', position:'relative', overflow:'hidden' }}>
          <div style={{ position:'absolute', bottom:-80, left:-80, width:500, height:500, borderRadius:'50%', background:'var(--pw-blush)', filter:'blur(80px)', opacity:0.25, pointerEvents:'none' }} />
          <div style={{ maxWidth:1160, margin:'0 auto', position:'relative', zIndex:1 }}>
            <div style={{ display:'inline-flex', alignItems:'center', gap:10, marginBottom:24 }}>
              <span style={{ display:'block', width:32, height:1, background:'rgba(255,255,255,0.20)' }} />
              <span style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.20em', textTransform:'uppercase', color:'rgba(255,255,255,0.40)' }}>Patient Reviews</span>
            </div>
            <h1 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(40px,6vw,72px)', color:'white', fontWeight:700, letterSpacing:'-0.03em', lineHeight:0.95, marginBottom:20 }}>
              Real patients,<br/>
              <span style={{ background:'linear-gradient(135deg,#F5D8E8,#DDD5F5)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>real results.</span>
            </h1>
            <p style={{ fontFamily:'var(--font-body)', fontSize:18, fontWeight:300, color:'rgba(255,255,255,0.50)', maxWidth:480, lineHeight:1.75 }}>
              Verified patient experiences from telehealth peptide therapy providers across the US.
            </p>
          </div>
        </section>
        <section style={{ padding:'clamp(48px,5vw,72px) 32px' }}>
          <div style={{ maxWidth:1160, margin:'0 auto' }}>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(300px, 1fr))', gap:16 }}>
              {reviews.map((r, i) => (
                <div key={i} style={{ background:'white', borderRadius:20, padding:'28px', border:'1px solid rgba(20,24,38,0.07)', boxShadow:'0 2px 12px rgba(14,17,32,0.05)' }}>
                  <Stars rating={r.rating} />
                  <p style={{ fontFamily:'var(--font-body)', fontSize:14, fontWeight:300, color:'var(--pw-ink)', lineHeight:1.75, margin:'14px 0 20px' }}>"{r.text}"</p>
                  <div style={{ display:'flex', alignItems:'center', gap:12 }}>
                    <div style={{ width:36, height:36, borderRadius:'50%', background:'var(--pw-lavender)', color:'var(--pw-midnight)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:11, fontWeight:700, fontFamily:'var(--font-mono)', flexShrink:0 }}>{r.avatar}</div>
                    <div>
                      <div style={{ fontFamily:'var(--font-display)', fontSize:14, fontWeight:600, color:'var(--pw-midnight)', letterSpacing:'-0.01em' }}>{r.name}</div>
                      <div style={{ fontFamily:'var(--font-mono)', fontSize:10, color:'var(--pw-ink-60)', letterSpacing:'0.04em' }}>{r.location}</div>
                    </div>
                    <span style={{ marginLeft:'auto', background:'var(--pw-sky)', color:'var(--pw-navy)', fontSize:10, fontWeight:700, padding:'4px 10px', borderRadius:100, fontFamily:'var(--font-mono)', whiteSpace:'nowrap', letterSpacing:'0.06em', textTransform:'uppercase' }}>{r.peptide}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

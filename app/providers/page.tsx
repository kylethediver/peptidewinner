import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { providers } from '@/lib/data'

function Stars({ rating }: { rating: number }) {
  return (
    <span style={{ fontSize: 12, letterSpacing: '-1px' }}>
      {[1,2,3,4,5].map(s => (
        <span key={s} style={{ color: s <= Math.round(rating) ? '#F59E0B' : 'rgba(20,24,38,0.15)' }}>★</span>
      ))}
    </span>
  )
}

export default function ProvidersPage() {
  return (
    <>
      <Nav />
      <main style={{ background:'var(--pw-white)', minHeight:'100vh' }}>
        <section style={{ padding:'clamp(64px,7vw,96px) 32px', background:'var(--pw-midnight)', position:'relative', overflow:'hidden' }}>
          <div style={{ position:'absolute', top:-100, right:-100, width:500, height:500, borderRadius:'50%', background:'var(--pw-sky)', filter:'blur(80px)', opacity:0.25, pointerEvents:'none' }} />
          <div style={{ maxWidth:1160, margin:'0 auto', position:'relative', zIndex:1 }}>
            <div style={{ display:'inline-flex', alignItems:'center', gap:10, marginBottom:24 }}>
              <span style={{ display:'block', width:32, height:1, background:'rgba(255,255,255,0.20)' }} />
              <span style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.20em', textTransform:'uppercase', color:'rgba(255,255,255,0.40)' }}>Telehealth Providers</span>
            </div>
            <h1 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(40px,6vw,72px)', color:'white', fontWeight:700, letterSpacing:'-0.03em', lineHeight:0.95, marginBottom:20 }}>
              Compare 30+ licensed<br/>
              <span style={{ background:'linear-gradient(135deg,#C8DEFA,#DDD5F5)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>peptide providers.</span>
            </h1>
            <p style={{ fontFamily:'var(--font-body)', fontSize:18, fontWeight:300, color:'rgba(255,255,255,0.50)', maxWidth:520, lineHeight:1.75 }}>
              Every provider verified for medical licensing, pharmacy sourcing, and patient care standards. Updated quarterly.
            </p>
          </div>
        </section>

        <section style={{ padding:'clamp(48px,5vw,72px) 32px', background:'var(--pw-white)' }}>
          <div style={{ maxWidth:1160, margin:'0 auto' }}>
            <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
              {providers.map((p, i) => (
                <div key={p.slug} style={{ background:'white', borderRadius:20, padding:'24px 28px', border:'1px solid rgba(20,24,38,0.08)', boxShadow:'0 2px 12px rgba(14,17,32,0.05)', display:'flex', gap:20, flexWrap:'wrap', alignItems:'flex-start', transition:'box-shadow 0.2s' }}>
                  <div style={{ display:'flex', alignItems:'center', gap:12, minWidth:220 }}>
                    <div style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:18, color:'rgba(20,24,38,0.12)', width:28, flexShrink:0 }}>{i+1}</div>
                    <div style={{ width:46, height:46, borderRadius:12, background:'var(--pw-sky)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:13, fontWeight:700, color:'var(--pw-midnight)', fontFamily:'var(--font-mono)', flexShrink:0 }}>{p.logo}</div>
                    <div>
                      <div style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:16, color:'var(--pw-midnight)', letterSpacing:'-0.01em' }}>{p.name}</div>
                      <div style={{ display:'flex', alignItems:'center', gap:6, marginTop:3 }}>
                        <Stars rating={p.rating} />
                        <span style={{ fontFamily:'var(--font-mono)', fontSize:11, color:'var(--pw-ink-60)', letterSpacing:'0.04em' }}>{p.rating} · {p.reviewCount.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ flex:1, minWidth:220 }}>
                    <p style={{ fontFamily:'var(--font-body)', fontSize:14, fontWeight:300, color:'var(--pw-ink-60)', lineHeight:1.7, marginBottom:12 }}>{p.highlight}</p>
                    <div style={{ display:'flex', flexWrap:'wrap', gap:5 }}>
                      {p.peptides.slice(0,5).map(pp => (
                        <span key={pp} style={{ background:'var(--pw-surface)', color:'var(--pw-ink-60)', fontFamily:'var(--font-mono)', fontSize:10, padding:'3px 10px', borderRadius:100, letterSpacing:'0.06em', textTransform:'uppercase', border:'1px solid rgba(20,24,38,0.07)' }}>{pp}</span>
                      ))}
                    </div>
                  </div>
                  <div style={{ display:'flex', flexDirection:'column', gap:8, alignItems:'flex-end', flexShrink:0 }}>
                    {p.badge && <span style={{ background:'var(--pw-mint)', color:'#1A5C3A', fontFamily:'var(--font-mono)', fontSize:10, fontWeight:700, padding:'4px 12px', borderRadius:100, letterSpacing:'0.08em', textTransform:'uppercase' }}>{p.badge}</span>}
                    <div style={{ textAlign:'right' }}>
                      <div style={{ fontFamily:'var(--font-display)', fontSize:20, fontWeight:600, color:'var(--pw-midnight)', letterSpacing:'-0.02em' }}>${p.priceFrom}/mo</div>
                      <div style={{ fontFamily:'var(--font-mono)', fontSize:10, color:'var(--pw-ink-30)', letterSpacing:'0.06em', textTransform:'uppercase' }}>starting from</div>
                    </div>
                    <div style={{ display:'flex', gap:8 }}>
                      <Link href={`/providers/${p.slug}`} style={{ background:'var(--pw-surface)', color:'var(--pw-midnight)', fontFamily:'var(--font-body)', fontWeight:500, fontSize:13, padding:'10px 18px', borderRadius:100, textDecoration:'none', border:'1.5px solid rgba(20,24,38,0.12)' }}>Details</Link>
                      <Link href={(p as any).affiliateUrl || `/providers/${p.slug}`} style={{ background:'var(--pw-midnight)', color:'white', fontFamily:'var(--font-body)', fontWeight:500, fontSize:13, padding:'10px 18px', borderRadius:100, textDecoration:'none', boxShadow:'0 4px 14px rgba(14,17,32,0.18)' }}>View deal</Link>
                    </div>
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

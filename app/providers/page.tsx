import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { providers } from '@/lib/data'

function Stars({ rating }: { rating: number }) {
  return (
    <span style={{ fontSize: 12, letterSpacing: '-1px' }}>
      {[1,2,3,4,5].map(s => (
        <span key={s} style={{ color: s <= Math.floor(rating) ? '#F59E0B' : 'rgba(255,255,255,0.15)' }}>★</span>
      ))}
    </span>
  )
}

export default function ProvidersPage() {
  return (
    <>
      <Nav />
      <main style={{ background:'#080C10', minHeight:'100vh' }}>
        {/* Hero */}
        <section style={{ padding:'clamp(56px,7vw,88px) 24px', background:'linear-gradient(160deg,#0D1B2A 0%,#080C10 100%)', borderBottom:'1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth:1100, margin:'0 auto' }}>
            <p style={{ fontFamily:"'Sora',sans-serif", fontSize:11, fontWeight:700, color:'#10B981', textTransform:'uppercase', letterSpacing:'0.14em', marginBottom:16 }}>Telehealth Providers</p>
            <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:'clamp(36px,5.5vw,68px)', color:'white', fontWeight:800, letterSpacing:'-0.03em', lineHeight:1.04, marginBottom:20 }}>
              Compare 30+ licensed<br /><span style={{ color:'#10B981' }}>peptide providers.</span>
            </h1>
            <p style={{ fontFamily:"'Sora',sans-serif", fontSize:17, color:'rgba(255,255,255,0.5)', maxWidth:560, lineHeight:1.7 }}>
              Every provider verified for medical licensing, pharmacy sourcing, and patient care standards. Updated quarterly.
            </p>
          </div>
        </section>

        {/* Provider list */}
        <section style={{ padding:'clamp(40px,5vw,64px) 24px' }}>
          <div style={{ maxWidth:1100, margin:'0 auto' }}>
            <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
              {providers.map((p, i) => (
                <div key={p.slug} style={{ background:'rgba(255,255,255,0.03)', borderRadius:18, padding:'24px 28px', border:'1px solid rgba(255,255,255,0.07)', display:'flex', gap:20, flexWrap:'wrap', alignItems:'flex-start' }}>
                  <div style={{ display:'flex', alignItems:'center', gap:12, minWidth:220 }}>
                    <div style={{ fontFamily:"'Sora',sans-serif", fontWeight:800, fontSize:18, color:'rgba(255,255,255,0.08)', width:28, flexShrink:0 }}>{i+1}</div>
                    <div style={{ width:46, height:46, borderRadius:12, background:'rgba(16,185,129,0.12)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:13, fontWeight:700, color:'#10B981', fontFamily:"'Sora',sans-serif", flexShrink:0 }}>{p.logo}</div>
                    <div>
                      <div style={{ fontFamily:"'Sora',sans-serif", fontWeight:700, fontSize:15, color:'white' }}>{p.name}</div>
                      <div style={{ display:'flex', alignItems:'center', gap:6, marginTop:3 }}>
                        <Stars rating={p.rating} />
                        <span style={{ fontFamily:"'Sora',sans-serif", fontSize:11, color:'rgba(255,255,255,0.3)' }}>{p.rating} · {p.reviewCount.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ flex:1, minWidth:220 }}>
                    <p style={{ fontFamily:"'Sora',sans-serif", fontSize:13, color:'rgba(255,255,255,0.45)', lineHeight:1.6, marginBottom:10 }}>{p.highlight}</p>
                    <div style={{ display:'flex', flexWrap:'wrap', gap:5 }}>
                      {p.peptides.slice(0,5).map(pp => (
                        <span key={pp} style={{ background:'rgba(255,255,255,0.04)', color:'rgba(255,255,255,0.4)', fontFamily:"'Sora',sans-serif", fontSize:10, padding:'2px 8px', borderRadius:100, border:'1px solid rgba(255,255,255,0.07)' }}>{pp}</span>
                      ))}
                    </div>
                  </div>
                  <div style={{ display:'flex', flexDirection:'column', gap:8, alignItems:'flex-end', flexShrink:0 }}>
                    {p.badge && <span style={{ background:'rgba(16,185,129,0.12)', color:'#10B981', fontFamily:"'Sora',sans-serif", fontSize:10, fontWeight:700, padding:'4px 10px', borderRadius:100, letterSpacing:'0.04em' }}>{p.badge}</span>}
                    <div style={{ textAlign:'right' }}>
                      <div style={{ fontFamily:"'Sora',sans-serif", fontSize:14, fontWeight:700, color:'white' }}>${p.priceFrom}/mo</div>
                      <div style={{ fontFamily:"'Sora',sans-serif", fontSize:11, color:'rgba(255,255,255,0.25)' }}>{p.location}</div>
                    </div>
                    <Link href={`/providers/${p.slug}`} style={{ background:'#10B981', color:'white', fontFamily:"'Sora',sans-serif", fontWeight:700, fontSize:12, padding:'10px 18px', borderRadius:100, textDecoration:'none', whiteSpace:'nowrap' }}>View deal →</Link>
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

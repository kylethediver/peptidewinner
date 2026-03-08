import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { providers } from '@/lib/data'
import { notFound } from 'next/navigation'

export default async function ProviderPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const provider = providers.find(p => p.slug === slug)
  if (!provider) notFound()

  function Stars({ rating }: { rating: number }) {
    return (
      <span style={{ fontSize: 14, letterSpacing: '-1px' }}>
        {[1,2,3,4,5].map(s => (
          <span key={s} style={{ color: s <= Math.floor(rating) ? '#F59E0B' : 'rgba(255,255,255,0.15)' }}>★</span>
        ))}
      </span>
    )
  }

  return (
    <>
      <Nav />
      <main style={{ background:'#080C10', minHeight:'100vh' }}>
        <section style={{ padding:'clamp(48px,7vw,80px) 24px', background:'linear-gradient(160deg,#0D1B2A 0%,#080C10 100%)', borderBottom:'1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth:900, margin:'0 auto' }}>
            <Link href="/providers" style={{ fontFamily:"'Sora',sans-serif", fontSize:13, color:'rgba(255,255,255,0.4)', textDecoration:'none', display:'inline-flex', alignItems:'center', gap:6, marginBottom:28 }}>← All providers</Link>
            <div style={{ display:'flex', alignItems:'flex-start', gap:20, flexWrap:'wrap', marginBottom:32 }}>
              <div style={{ width:64, height:64, borderRadius:18, background:'rgba(16,185,129,0.12)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:18, fontWeight:700, color:'#10B981', fontFamily:"'Sora',sans-serif", flexShrink:0 }}>{provider.logo}</div>
              <div>
                <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:'clamp(28px,4vw,48px)', color:'white', fontWeight:800, letterSpacing:'-0.03em', marginBottom:6 }}>{provider.name}</h1>
                <div style={{ display:'flex', alignItems:'center', gap:10, flexWrap:'wrap' }}>
                  <Stars rating={provider.rating} />
                  <span style={{ fontFamily:"'Sora',sans-serif", fontSize:13, color:'rgba(255,255,255,0.4)' }}>{provider.rating} · {provider.reviewCount.toLocaleString()} reviews</span>
                  {provider.badge && <span style={{ background:'rgba(16,185,129,0.12)', color:'#10B981', fontFamily:"'Sora',sans-serif", fontSize:11, fontWeight:700, padding:'3px 10px', borderRadius:100 }}>{provider.badge}</span>}
                </div>
              </div>
            </div>
            <p style={{ fontFamily:"'Sora',sans-serif", fontSize:16, color:'rgba(255,255,255,0.55)', lineHeight:1.7, maxWidth:600, marginBottom:32 }}>{provider.highlight}</p>
            {provider.discount && (
              <div style={{ background:'rgba(16,185,129,0.1)', border:'1px solid rgba(16,185,129,0.25)', borderRadius:12, padding:'12px 18px', display:'inline-block', marginBottom:32 }}>
                <span style={{ fontFamily:"'Sora',sans-serif", fontSize:14, fontWeight:700, color:'#10B981' }}>🎉 {provider.discount}</span>
              </div>
            )}
            <div>
              <a href={`https://${provider.website}`} target="_blank" rel="noopener noreferrer" style={{ background:'#10B981', color:'white', fontFamily:"'Sora',sans-serif", fontWeight:700, fontSize:15, padding:'14px 32px', borderRadius:100, textDecoration:'none' }}>
                Visit {provider.name} →
              </a>
            </div>
          </div>
        </section>
        <section style={{ padding:'clamp(40px,5vw,64px) 24px' }}>
          <div style={{ maxWidth:900, margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1fr', gap:32 }}>
            <div style={{ background:'rgba(255,255,255,0.03)', borderRadius:18, padding:'24px' }}>
              <h3 style={{ fontFamily:"'Sora',sans-serif", fontWeight:700, fontSize:13, color:'#10B981', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:16 }}>Pros</h3>
              {provider.pros.map(p => <div key={p} style={{ fontFamily:"'Sora',sans-serif", fontSize:14, color:'rgba(255,255,255,0.6)', marginBottom:10 }}>✓ {p}</div>)}
            </div>
            <div style={{ background:'rgba(255,255,255,0.03)', borderRadius:18, padding:'24px' }}>
              <h3 style={{ fontFamily:"'Sora',sans-serif", fontWeight:700, fontSize:13, color:'rgba(239,68,68,0.8)', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:16 }}>Cons</h3>
              {provider.cons.map(c => <div key={c} style={{ fontFamily:"'Sora',sans-serif", fontSize:14, color:'rgba(255,255,255,0.6)', marginBottom:10 }}>– {c}</div>)}
            </div>
            <div style={{ background:'rgba(255,255,255,0.03)', borderRadius:18, padding:'24px', gridColumn:'1/-1' }}>
              <h3 style={{ fontFamily:"'Sora',sans-serif", fontWeight:700, fontSize:13, color:'rgba(255,255,255,0.4)', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:16 }}>Peptides offered</h3>
              <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
                {provider.peptides.map(p => (
                  <span key={p} style={{ background:'rgba(255,255,255,0.05)', color:'rgba(255,255,255,0.6)', fontFamily:"'Sora',sans-serif", fontSize:13, padding:'5px 14px', borderRadius:100, border:'1px solid rgba(255,255,255,0.08)' }}>{p}</span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

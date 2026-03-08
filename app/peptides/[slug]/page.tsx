import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { peptides, articles, providers } from '@/lib/data'
import { notFound } from 'next/navigation'

export default async function PeptidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const peptide = peptides.find(p => p.slug === slug)
  if (!peptide) notFound()

  // Articles mentioning this peptide
  const relatedArticles = articles.filter(a => 
    a.peptideTags.some(tag => tag.toLowerCase().replace(/[^a-z0-9]/g,'') === peptide.name.toLowerCase().replace(/[^a-z0-9]/g,''))
    || a.title.toLowerCase().includes(peptide.name.toLowerCase())
    || a.excerpt.toLowerCase().includes(peptide.name.toLowerCase())
  )

  // Providers offering this peptide
  const relatedProviders = providers.filter(p =>
    p.peptides.some(pp => pp.toLowerCase().includes(peptide.name.toLowerCase()))
  ).slice(0, 6)

  function Stars({ rating, size = 13 }: { rating: number; size?: number }) {
    return (
      <span style={{ fontSize: size, letterSpacing: '-1px' }}>
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

        {/* Hero */}
        <section style={{ padding:'clamp(48px,7vw,80px) 24px', background:'linear-gradient(160deg, #0D1B2A 0%, #080C10 100%)', borderBottom:'1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth:900, margin:'0 auto' }}>
            <Link href="/peptides" style={{ fontFamily:"'Sora', sans-serif", fontSize:13, color:'rgba(255,255,255,0.4)', textDecoration:'none', display:'inline-flex', alignItems:'center', gap:6, marginBottom:28 }}>← Peptide library</Link>
            <div style={{ display:'inline-block', background:`rgba(${peptide.color.replace('#','').match(/.{2}/g)!.map(x=>parseInt(x,16)).join(',')},0.15)`, borderRadius:100, padding:'4px 16px', marginBottom:20 }}>
              <span style={{ fontFamily:"'Sora', sans-serif", fontSize:11, fontWeight:700, color:peptide.color, textTransform:'uppercase', letterSpacing:'0.12em' }}>{peptide.category}</span>
            </div>
            <div style={{ display:'flex', alignItems:'flex-start', gap:20, flexWrap:'wrap' }}>
              <div style={{ fontSize:64 }}>{peptide.emoji}</div>
              <div>
                <h1 style={{ fontFamily:"'Playfair Display', serif", fontSize:'clamp(36px,5vw,64px)', color:'white', fontWeight:800, letterSpacing:'-0.03em', lineHeight:1.05, marginBottom:10 }}>
                  {peptide.name}
                </h1>
                <p style={{ fontFamily:"'Sora', sans-serif", fontSize:16, color:'rgba(255,255,255,0.45)', marginBottom:6 }}>{peptide.subtitle}</p>
                <p style={{ fontFamily:"'Sora', sans-serif", fontSize:14, fontWeight:600, color:peptide.color }}>{peptide.priceRange} · {relatedProviders.length} providers</p>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section style={{ padding:'clamp(40px,5vw,64px) 24px' }}>
          <div style={{ maxWidth:900, margin:'0 auto' }}>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:48, marginBottom:56 }}>
              <div>
                <h2 style={{ fontFamily:"'Sora', sans-serif", fontWeight:700, fontSize:13, color:peptide.color, textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:14 }}>What is it?</h2>
                <p style={{ fontFamily:"'Sora', sans-serif", fontSize:15, color:'rgba(255,255,255,0.65)', lineHeight:1.75 }}>{peptide.overview}</p>
              </div>
              <div>
                <h2 style={{ fontFamily:"'Sora', sans-serif", fontWeight:700, fontSize:13, color:peptide.color, textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:14 }}>How it works</h2>
                <p style={{ fontFamily:"'Sora', sans-serif", fontSize:15, color:'rgba(255,255,255,0.65)', lineHeight:1.75 }}>{peptide.mechanism}</p>
              </div>
            </div>

            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:48, marginBottom:64 }}>
              <div style={{ background:'rgba(255,255,255,0.03)', borderRadius:18, padding:'24px 22px', border:'1px solid rgba(255,255,255,0.07)' }}>
                <h3 style={{ fontFamily:"'Sora', sans-serif", fontWeight:700, fontSize:13, color:peptide.color, textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:16 }}>Common uses</h3>
                <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:10 }}>
                  {peptide.uses.map(u => (
                    <li key={u} style={{ fontFamily:"'Sora', sans-serif", fontSize:14, color:'rgba(255,255,255,0.65)', display:'flex', alignItems:'center', gap:10 }}>
                      <span style={{ width:6, height:6, borderRadius:'50%', background:peptide.color, flexShrink:0 }} />
                      {u}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ background:'rgba(255,255,255,0.03)', borderRadius:18, padding:'24px 22px', border:'1px solid rgba(255,255,255,0.07)' }}>
                <h3 style={{ fontFamily:"'Sora', sans-serif", fontWeight:700, fontSize:13, color:peptide.color, textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:16 }}>Expected effects</h3>
                <p style={{ fontFamily:"'Sora', sans-serif", fontSize:14, color:'rgba(255,255,255,0.65)', lineHeight:1.75 }}>{peptide.effects}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Related articles */}
        {relatedArticles.length > 0 && (
          <section style={{ padding:'clamp(40px,5vw,64px) 24px', background:'#0D1117', borderTop:'1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ maxWidth:900, margin:'0 auto' }}>
              <h2 style={{ fontFamily:"'Playfair Display', serif", fontSize:'clamp(22px,3.5vw,36px)', color:'white', fontWeight:800, letterSpacing:'-0.025em', marginBottom:32 }}>
                {peptide.name} articles
              </h2>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(260px, 1fr))', gap:16 }}>
                {relatedArticles.map(a => (
                  <Link key={a.slug} href={`/insights/${a.slug}`} style={{ textDecoration:'none' }}>
                    <div style={{ borderRadius:18, overflow:'hidden', border:'1px solid rgba(255,255,255,0.06)', background:'rgba(255,255,255,0.02)' }}>
                      <img src={a.image} alt={a.title} style={{ width:'100%', height:160, objectFit:'cover', filter:'brightness(0.8)' }} />
                      <div style={{ padding:'16px 18px' }}>
                        <span style={{ fontFamily:"'Sora', sans-serif", fontSize:10, fontWeight:700, color:'#10B981', textTransform:'uppercase', letterSpacing:'0.1em' }}>{a.category}</span>
                        <h3 style={{ fontFamily:"'Sora', sans-serif", fontWeight:700, fontSize:14, color:'white', margin:'7px 0 5px', lineHeight:1.45 }}>{a.title}</h3>
                        <p style={{ fontFamily:"'Sora', sans-serif", fontSize:12, color:'rgba(255,255,255,0.3)' }}>{a.readTime}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Providers for this peptide */}
        {relatedProviders.length > 0 && (
          <section style={{ padding:'clamp(40px,5vw,64px) 24px', background:'#080C10', borderTop:'1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ maxWidth:900, margin:'0 auto' }}>
              <h2 style={{ fontFamily:"'Playfair Display', serif", fontSize:'clamp(22px,3.5vw,36px)', color:'white', fontWeight:800, letterSpacing:'-0.025em', marginBottom:32 }}>
                Providers offering {peptide.name}
              </h2>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(260px, 1fr))', gap:14 }}>
                {relatedProviders.map(p => (
                  <div key={p.slug} style={{ background:'rgba(255,255,255,0.03)', borderRadius:18, padding:'22px 20px', border:'1px solid rgba(255,255,255,0.07)' }}>
                    <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:14 }}>
                      <div style={{ width:40, height:40, borderRadius:10, background:'rgba(16,185,129,0.12)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:12, fontWeight:700, color:'#10B981', fontFamily:"'Sora', sans-serif", flexShrink:0 }}>{p.logo}</div>
                      <div>
                        <div style={{ fontFamily:"'Sora', sans-serif", fontWeight:700, fontSize:14, color:'white' }}>{p.name}</div>
                        <Stars rating={p.rating} size={11} />
                      </div>
                    </div>
                    <p style={{ fontFamily:"'Sora', sans-serif", fontSize:13, color:'rgba(255,255,255,0.45)', lineHeight:1.6, marginBottom:16 }}>{p.highlight}</p>
                    <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                      <span style={{ fontFamily:"'Sora', sans-serif", fontSize:13, fontWeight:700, color:'white' }}>${p.priceFrom}/mo</span>
                      <Link href={`/providers/${p.slug}`} style={{ background:'#10B981', color:'white', fontFamily:"'Sora', sans-serif", fontWeight:700, fontSize:12, padding:'8px 16px', borderRadius:100, textDecoration:'none' }}>View deal</Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

      </main>
      <Footer />
    </>
  )
}

import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { peptides, articles, providers } from '@/lib/data'
import { notFound } from 'next/navigation'

const categoryColors: Record<string,string> = {
  'Recovery & Healing':   '#C8DEFA',
  'Anti-Aging & Hormones':'#DDD5F5',
  'Anti-Aging & Skin':    '#F5D8E8',
  'Longevity & Energy':   '#F2F0C8',
  'Sexual Health':        '#F5D8E8',
  'Weight Loss':          '#C9EDDF',
  'Weight & Metabolic':   '#C9EDDF',
  'Immune & Longevity':   '#C9EDDF',
  'Performance & Recovery':'#C8DEFA',
}

function Stars({ rating, size=13 }: { rating: number; size?: number }) {
  return (
    <span style={{ fontSize: size, letterSpacing: '-1px' }}>
      {[1,2,3,4,5].map(s => (
        <span key={s} style={{ color: s <= Math.round(rating) ? '#F59E0B' : 'rgba(20,24,38,0.15)' }}>★</span>
      ))}
    </span>
  )
}

export default async function PeptidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const peptide = peptides.find(p => p.slug === slug)
  if (!peptide) notFound()

  const relatedProviders = providers.filter(p =>
    p.peptides.some(pp => pp.toLowerCase().includes(peptide.name.toLowerCase()))
  ).slice(0, 6)

  const pastelbg = categoryColors[peptide.category] || '#F5F6FA'
  const p = peptide as any

  return (
    <>
      <Nav />
      <main style={{ background:'var(--pw-white)', minHeight:'100vh' }}>

        {/* Hero */}
        <section style={{ padding:'clamp(56px,7vw,88px) 32px', background:pastelbg, position:'relative', overflow:'hidden' }}>
          <div style={{ maxWidth:1040, margin:'0 auto' }}>
            <Link href="/peptides" style={{ fontFamily:'var(--font-mono)', fontSize:11, color:'rgba(14,17,32,0.45)', textDecoration:'none', display:'inline-flex', alignItems:'center', gap:6, marginBottom:36, letterSpacing:'0.06em', textTransform:'uppercase' }}>← Peptide Library</Link>
            <div style={{ display:'flex', alignItems:'flex-start', gap:28, flexWrap:'wrap' }}>
              <div style={{ fontSize:80, lineHeight:1, flexShrink:0 }}>{peptide.emoji}</div>
              <div style={{ flex:1, minWidth:260 }}>
                <div style={{ display:'inline-flex', alignItems:'center', gap:8, marginBottom:16 }}>
                  <span style={{ fontFamily:'var(--font-mono)', fontSize:10, fontWeight:700, color:'rgba(14,17,32,0.50)', textTransform:'uppercase', letterSpacing:'0.16em', background:'rgba(14,17,32,0.08)', padding:'4px 14px', borderRadius:100 }}>{peptide.category}</span>
                </div>
                <h1 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(40px,6vw,72px)', color:'var(--pw-midnight)', fontWeight:700, letterSpacing:'-0.03em', lineHeight:0.95, marginBottom:12 }}>{peptide.name}</h1>
                <p style={{ fontFamily:'var(--font-body)', fontSize:18, fontWeight:300, color:'rgba(14,17,32,0.60)', marginBottom:28, lineHeight:1.6 }}>{peptide.subtitle}</p>
                <div style={{ display:'flex', gap:36, flexWrap:'wrap' }}>
                  <div>
                    <div style={{ fontFamily:'var(--font-mono)', fontSize:10, color:'rgba(14,17,32,0.40)', textTransform:'uppercase', letterSpacing:'0.12em', marginBottom:4 }}>Price Range</div>
                    <div style={{ fontFamily:'var(--font-display)', fontSize:20, fontWeight:600, color:'var(--pw-midnight)', letterSpacing:'-0.02em' }}>{peptide.priceRange}</div>
                  </div>
                  <div>
                    <div style={{ fontFamily:'var(--font-mono)', fontSize:10, color:'rgba(14,17,32,0.40)', textTransform:'uppercase', letterSpacing:'0.12em', marginBottom:4 }}>Available From</div>
                    <div style={{ fontFamily:'var(--font-display)', fontSize:20, fontWeight:600, color:'var(--pw-midnight)', letterSpacing:'-0.02em' }}>{relatedProviders.length} providers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section style={{ padding:'clamp(48px,5vw,72px) 32px' }}>
          <div style={{ maxWidth:1040, margin:'0 auto' }}>
            <div style={{ display:'grid', gridTemplateColumns:'minmax(0,1fr) 320px', gap:40, alignItems:'start' }}>

              {/* Main content */}
              <div>
                {[
                  { label:'Overview', content: peptide.overview },
                  { label:'How It Works', content: peptide.mechanism },
                  { label:'Longevity & Anti-Aging', content: p.longevity },
                  { label:'Expected Effects', content: peptide.effects },
                  { label:'Dosing Protocol', content: p.protocol },
                  { label:'Side Effects', content: peptide.sideEffects },
                ].filter(s => s.content).map((section, i) => (
                  <div key={i} style={{ marginBottom:48 }}>
                    <div style={{ display:'inline-flex', alignItems:'center', gap:10, marginBottom:16 }}>
                      <span style={{ display:'block', width:24, height:1, background:'var(--pw-ink-30)' }} />
                      <span style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.20em', textTransform:'uppercase', color:'var(--pw-ink-60)' }}>{section.label}</span>
                    </div>
                    <p style={{ fontFamily:'var(--font-body)', fontSize:15, fontWeight:300, color:'var(--pw-ink)', lineHeight:1.8 }}>{section.content}</p>
                  </div>
                ))}

                {/* Uses */}
                {peptide.uses?.length > 0 && (
                  <div style={{ marginBottom:48 }}>
                    <div style={{ display:'inline-flex', alignItems:'center', gap:10, marginBottom:20 }}>
                      <span style={{ display:'block', width:24, height:1, background:'var(--pw-ink-30)' }} />
                      <span style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.20em', textTransform:'uppercase', color:'var(--pw-ink-60)' }}>Primary Uses</span>
                    </div>
                    <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
                      {peptide.uses.map((use: string, i: number) => (
                        <div key={i} style={{ display:'flex', alignItems:'flex-start', gap:14, padding:'14px 18px', background:pastelbg, borderRadius:12 }}>
                          <span style={{ fontFamily:'var(--font-mono)', fontSize:10, color:'rgba(14,17,32,0.35)', marginTop:2, textTransform:'uppercase', letterSpacing:'0.1em', flexShrink:0 }}>{String(i+1).padStart(2,'0')}</span>
                          <span style={{ fontFamily:'var(--font-body)', fontSize:14, fontWeight:400, color:'var(--pw-midnight)', lineHeight:1.5 }}>{use}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div style={{ position:'sticky', top:80 }}>
                <div style={{ background:pastelbg, borderRadius:24, padding:'28px', marginBottom:16 }}>
                  <div style={{ fontFamily:'var(--font-mono)', fontSize:10, color:'rgba(14,17,32,0.40)', textTransform:'uppercase', letterSpacing:'0.14em', marginBottom:20 }}>Quick Facts</div>
                  {[
                    { label:'Category', val:peptide.category },
                    { label:'Price Range', val:peptide.priceRange },
                    { label:'Providers', val:`${relatedProviders.length} available` },
                  ].map((item, i) => (
                    <div key={i} style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', padding:'12px 0', borderBottom:'1px solid rgba(14,17,32,0.08)' }}>
                      <span style={{ fontFamily:'var(--font-mono)', fontSize:11, color:'rgba(14,17,32,0.45)', letterSpacing:'0.06em', textTransform:'uppercase' }}>{item.label}</span>
                      <span style={{ fontFamily:'var(--font-display)', fontSize:14, fontWeight:600, color:'var(--pw-midnight)', textAlign:'right', maxWidth:160 }}>{item.val}</span>
                    </div>
                  ))}
                  {p.regulatoryNote && (
                    <div style={{ marginTop:16, padding:'12px', background:'rgba(14,17,32,0.06)', borderRadius:10 }}>
                      <span style={{ fontFamily:'var(--font-body)', fontSize:12, fontWeight:300, color:'rgba(14,17,32,0.55)', lineHeight:1.6 }}>⚖️ {p.regulatoryNote}</span>
                    </div>
                  )}
                </div>
                <Link href="/start" style={{ display:'block', background:'var(--pw-midnight)', color:'white', fontFamily:'var(--font-body)', fontWeight:500, fontSize:15, padding:'16px 24px', borderRadius:100, textDecoration:'none', textAlign:'center', boxShadow:'0 4px 20px rgba(14,17,32,0.22)' }}>Find a provider →</Link>
              </div>
            </div>

            {/* Providers */}
            {relatedProviders.length > 0 && (
              <div style={{ marginTop:64 }}>
                <div style={{ display:'inline-flex', alignItems:'center', gap:10, marginBottom:32 }}>
                  <span style={{ display:'block', width:24, height:1, background:'var(--pw-ink-30)' }} />
                  <span style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.20em', textTransform:'uppercase', color:'var(--pw-ink-60)' }}>Providers offering {peptide.name}</span>
                </div>
                <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(280px, 1fr))', gap:14 }}>
                  {relatedProviders.map((prov, i) => (
                    <div key={i} style={{ background:'white', borderRadius:18, padding:'22px', border:'1px solid rgba(20,24,38,0.08)', boxShadow:'0 2px 10px rgba(14,17,32,0.05)' }}>
                      <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:12 }}>
                        <div style={{ width:40, height:40, borderRadius:10, background:pastelbg, display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'var(--font-mono)', fontWeight:700, fontSize:12, color:'var(--pw-midnight)', flexShrink:0 }}>{prov.logo}</div>
                        <div>
                          <div style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:15, color:'var(--pw-midnight)', letterSpacing:'-0.01em' }}>{prov.name}</div>
                          <Stars rating={prov.rating} size={11} />
                        </div>
                        <div style={{ marginLeft:'auto', fontFamily:'var(--font-display)', fontWeight:600, fontSize:16, color:'var(--pw-midnight)', letterSpacing:'-0.02em' }}>${prov.priceFrom}/mo</div>
                      </div>
                      <Link href={`/providers/${prov.slug}`} style={{ display:'block', background:'var(--pw-midnight)', color:'white', fontFamily:'var(--font-body)', fontWeight:500, fontSize:13, padding:'10px 18px', borderRadius:100, textDecoration:'none', textAlign:'center' }}>View deal</Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

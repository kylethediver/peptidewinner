import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { articles, peptides } from '@/lib/data'

export default function InsightsPage() {
  const categories = Array.from(new Set(articles.flatMap(a => a.peptideTags)))

  return (
    <>
      <Nav />
      <main style={{ background:'#080C10', minHeight:'100vh' }}>
        <section style={{ padding:'clamp(56px,7vw,88px) 24px', background:'linear-gradient(160deg,#0D1B2A 0%,#080C10 100%)', borderBottom:'1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth:1100, margin:'0 auto' }}>
            <p style={{ fontFamily:"'Sora',sans-serif", fontSize:11, fontWeight:700, color:'#10B981', textTransform:'uppercase', letterSpacing:'0.14em', marginBottom:16 }}>Peptide Insights</p>
            <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:'clamp(36px,5.5vw,68px)', color:'white', fontWeight:800, letterSpacing:'-0.03em', lineHeight:1.04, marginBottom:20 }}>
              Evidence-based<br /><span style={{ color:'#10B981' }}>peptide research.</span>
            </h1>
            <p style={{ fontFamily:"'Sora',sans-serif", fontSize:17, color:'rgba(255,255,255,0.5)', maxWidth:560, lineHeight:1.7, marginBottom:36 }}>
              In-depth guides, comparisons, and protocol breakdowns written by medical professionals. Categorized by peptide.
            </p>
            <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
              {peptides.map(p => (
                <Link key={p.slug} href={`/peptides/${p.slug}`} style={{ background:'rgba(255,255,255,0.05)', color:'rgba(255,255,255,0.55)', fontFamily:"'Sora',sans-serif", fontSize:12, fontWeight:500, padding:'6px 14px', borderRadius:100, textDecoration:'none', border:'1px solid rgba(255,255,255,0.08)' }}>{p.name}</Link>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding:'clamp(40px,5vw,72px) 24px' }}>
          <div style={{ maxWidth:1100, margin:'0 auto' }}>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(320px, 1fr))', gap:20 }}>
              {articles.map(a => (
                <Link key={a.slug} href={`/insights/${a.slug}`} style={{ textDecoration:'none' }}>
                  <div style={{ borderRadius:20, overflow:'hidden', border:'1px solid rgba(255,255,255,0.07)', background:'rgba(255,255,255,0.02)', height:'100%' }}>
                    <img src={a.image} alt={a.title} style={{ width:'100%', height:200, objectFit:'cover', display:'block', filter:'brightness(0.8)' }} />
                    <div style={{ padding:'22px 24px' }}>
                      <div style={{ display:'flex', flexWrap:'wrap', gap:6, marginBottom:12 }}>
                        <span style={{ fontFamily:"'Sora',sans-serif", fontSize:10, fontWeight:700, color:'#10B981', textTransform:'uppercase', letterSpacing:'0.1em', background:'rgba(16,185,129,0.1)', padding:'3px 10px', borderRadius:100 }}>{a.category}</span>
                        {a.peptideTags.map(t => (
                          <span key={t} style={{ fontFamily:"'Sora',sans-serif", fontSize:10, fontWeight:600, color:'rgba(255,255,255,0.4)', background:'rgba(255,255,255,0.05)', padding:'3px 10px', borderRadius:100 }}>{t}</span>
                        ))}
                      </div>
                      <h2 style={{ fontFamily:"'Sora',sans-serif", fontWeight:700, fontSize:16, color:'white', marginBottom:10, lineHeight:1.45 }}>{a.title}</h2>
                      <p style={{ fontFamily:"'Sora',sans-serif", fontSize:13, color:'rgba(255,255,255,0.4)', lineHeight:1.65, marginBottom:16 }}>{a.excerpt}</p>
                      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                        <div style={{ fontFamily:"'Sora',sans-serif", fontSize:12, color:'rgba(255,255,255,0.3)' }}>{a.readTime} · {a.date}</div>
                        <div style={{ fontFamily:"'Sora',sans-serif", fontSize:12, fontWeight:600, color:'#10B981' }}>Read →</div>
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

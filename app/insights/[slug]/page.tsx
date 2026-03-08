import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { articles, providers, peptides } from '@/lib/data'
import { notFound } from 'next/navigation'

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = articles.find(a => a.slug === slug)
  if (!article) notFound()

  const related = articles.filter(a => a.slug !== slug && a.peptideTags.some(t => article.peptideTags.includes(t))).slice(0, 3)

  // Providers related to peptide tags in this article
  const relatedProviders = providers.filter(p =>
    article.peptideTags.some(tag => p.peptides.some(pp => pp.toLowerCase().includes(tag.toLowerCase())))
  ).slice(0, 3)

  function Stars({ rating }: { rating: number }) {
    return (
      <span style={{ fontSize: 12, letterSpacing: '-1px' }}>
        {[1,2,3,4,5].map(s => (
          <span key={s} style={{ color: s <= Math.round(rating) ? '#F59E0B' : 'rgba(255,255,255,0.15)' }}>★</span>
        ))}
      </span>
    )
  }

  return (
    <>
      <Nav />
      <main style={{ background:'#080C10', minHeight:'100vh' }}>
        {/* Hero */}
        <section style={{ padding:'clamp(48px,7vw,80px) 24px 0', background:'linear-gradient(160deg,#0D1B2A 0%,#080C10 100%)' }}>
          <div style={{ maxWidth:780, margin:'0 auto' }}>
            <Link href="/insights" style={{ fontFamily:"'Sora',sans-serif", fontSize:13, color:'rgba(255,255,255,0.4)', textDecoration:'none', display:'inline-flex', alignItems:'center', gap:6, marginBottom:28 }}>← All articles</Link>
            <div style={{ display:'flex', flexWrap:'wrap', gap:8, marginBottom:20 }}>
              <span style={{ fontFamily:"'Sora',sans-serif", fontSize:10, fontWeight:700, color:'#10B981', textTransform:'uppercase', letterSpacing:'0.1em', background:'rgba(16,185,129,0.1)', padding:'3px 12px', borderRadius:100 }}>{article.category}</span>
              {article.peptideTags.map(t => (
                <Link key={t} href={`/peptides/${peptides.find(p=>p.name===t)?.slug || t.toLowerCase()}`} style={{ textDecoration:'none', fontFamily:"'Sora',sans-serif", fontSize:10, fontWeight:600, color:'rgba(255,255,255,0.5)', background:'rgba(255,255,255,0.06)', padding:'3px 12px', borderRadius:100 }}>{t}</Link>
              ))}
            </div>
            <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:'clamp(28px,4.5vw,52px)', color:'white', fontWeight:800, letterSpacing:'-0.03em', lineHeight:1.1, marginBottom:20 }}>{article.title}</h1>
            <p style={{ fontFamily:"'Sora',sans-serif", fontSize:17, color:'rgba(255,255,255,0.45)', lineHeight:1.7, marginBottom:28 }}>{article.excerpt}</p>
            <div style={{ display:'flex', alignItems:'center', gap:14, marginBottom:40, paddingBottom:40, borderBottom:'1px solid rgba(255,255,255,0.07)' }}>
              <div style={{ width:40, height:40, borderRadius:10, background:'rgba(16,185,129,0.12)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:12, fontWeight:700, color:'#10B981', fontFamily:"'Sora',sans-serif", flexShrink:0 }}>
                {article.author.split(' ').map(n=>n[0]).join('')}
              </div>
              <div>
                <div style={{ fontFamily:"'Sora',sans-serif", fontWeight:700, fontSize:14, color:'white' }}>{article.author}</div>
                <div style={{ fontFamily:"'Sora',sans-serif", fontSize:12, color:'rgba(255,255,255,0.35)' }}>{article.authorTitle} · {article.readTime} · {article.date}</div>
              </div>
            </div>
          </div>
          <div style={{ maxWidth:780, margin:'0 auto', paddingBottom:0 }}>
            <img src={article.image} alt={article.title} style={{ width:'100%', borderRadius:'16px 16px 0 0', display:'block', maxHeight:420, objectFit:'cover', filter:'brightness(0.85)' }} />
          </div>
        </section>

        {/* Article body */}
        <section style={{ padding:'clamp(40px,5vw,64px) 24px' }}>
          <div style={{ maxWidth:780, margin:'0 auto' }}>
            {article.body.split('\n\n').map((para, i) => (
              <p key={i} style={{ fontFamily:"'Sora',sans-serif", fontSize:16, color:'rgba(255,255,255,0.65)', lineHeight:1.85, marginBottom:24 }}>{para}</p>
            ))}

            {/* Peptide links */}
            <div style={{ marginTop:48, padding:'28px', background:'rgba(16,185,129,0.06)', borderRadius:18, border:'1px solid rgba(16,185,129,0.15)' }}>
              <p style={{ fontFamily:"'Sora',sans-serif", fontSize:13, fontWeight:700, color:'#10B981', marginBottom:14 }}>Peptides mentioned in this article:</p>
              <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
                {article.peptideTags.map(tag => {
                  const peptide = peptides.find(p => p.name === tag)
                  return (
                    <Link key={tag} href={`/peptides/${peptide?.slug || tag.toLowerCase()}`} style={{ background:'rgba(16,185,129,0.12)', color:'#10B981', fontFamily:"'Sora',sans-serif", fontSize:13, fontWeight:600, padding:'8px 16px', borderRadius:100, textDecoration:'none' }}>
                      {tag} →
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Related providers */}
        {relatedProviders.length > 0 && (
          <section style={{ padding:'clamp(32px,4vw,56px) 24px', background:'#0D1117', borderTop:'1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ maxWidth:780, margin:'0 auto' }}>
              <h3 style={{ fontFamily:"'Sora',sans-serif", fontWeight:700, fontSize:13, color:'rgba(255,255,255,0.4)', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:20 }}>Providers offering these peptides</h3>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(220px, 1fr))', gap:12 }}>
                {relatedProviders.map(p => (
                  <div key={p.slug} style={{ background:'rgba(255,255,255,0.03)', borderRadius:14, padding:'18px', border:'1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ fontFamily:"'Sora',sans-serif", fontWeight:700, fontSize:14, color:'white', marginBottom:4 }}>{p.name}</div>
                    <Stars rating={p.rating} />
                    <div style={{ fontFamily:"'Sora',sans-serif", fontSize:12, color:'rgba(255,255,255,0.35)', marginTop:6, marginBottom:12 }}>${p.priceFrom}/mo · {p.location}</div>
                    <Link href={`/providers/${p.slug}`} style={{ background:'#10B981', color:'white', fontFamily:"'Sora',sans-serif", fontWeight:700, fontSize:12, padding:'8px 14px', borderRadius:100, textDecoration:'none' }}>View deal</Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related articles */}
        {related.length > 0 && (
          <section style={{ padding:'clamp(32px,4vw,56px) 24px', background:'#080C10', borderTop:'1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ maxWidth:780, margin:'0 auto' }}>
              <h3 style={{ fontFamily:"'Sora',sans-serif", fontWeight:700, fontSize:13, color:'rgba(255,255,255,0.4)', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:20 }}>Related articles</h3>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(220px, 1fr))', gap:12 }}>
                {related.map(a => (
                  <Link key={a.slug} href={`/insights/${a.slug}`} style={{ textDecoration:'none' }}>
                    <div style={{ borderRadius:14, overflow:'hidden', border:'1px solid rgba(255,255,255,0.06)', background:'rgba(255,255,255,0.02)' }}>
                      <img src={a.image} alt={a.title} style={{ width:'100%', height:120, objectFit:'cover', filter:'brightness(0.8)' }} />
                      <div style={{ padding:'14px' }}>
                        <h4 style={{ fontFamily:"'Sora',sans-serif", fontWeight:700, fontSize:13, color:'white', lineHeight:1.4 }}>{a.title}</h4>
                      </div>
                    </div>
                  </Link>
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

import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { providers, reviews, articles, peptides } from '@/lib/data'

function Stars({ rating, size = 14 }: { rating: number; size?: number }) {
  return (
    <span style={{ fontSize: size, letterSpacing: '-1px' }}>
      {[1,2,3,4,5].map(s => (
        <span key={s} style={{ color: s <= Math.floor(rating) ? '#F59E0B' : 'rgba(255,255,255,0.15)' }}>★</span>
      ))}
    </span>
  )
}

const pressLogos = [
  { name: 'WIRED',              font: '"Arial Black", sans-serif', weight: 900, size: 20, spacing: '-0.04em', style: 'normal' },
  { name: 'NPR',                font: '"Arial Black", sans-serif', weight: 900, size: 22, spacing: '0.02em',  style: 'normal' },
  { name: 'Wall Street Journal',font: 'Georgia, serif',            weight: 700, size: 14, spacing: '0.01em',  style: 'italic' },
  { name: 'THE INDEPENDENT',    font: '"Arial", sans-serif',       weight: 800, size: 11, spacing: '0.08em',  style: 'normal' },
  { name: 'USA TODAY',          font: '"Arial Black", sans-serif', weight: 900, size: 16, spacing: '0.03em',  style: 'normal' },
  { name: 'Quartz',             font: 'Georgia, serif',            weight: 700, size: 20, spacing: '0em',     style: 'italic' },
  { name: "Men's Health",       font: '"Arial Black", sans-serif', weight: 900, size: 15, spacing: '-0.02em', style: 'normal' },
  { name: 'Healthline',         font: '"Arial", sans-serif',       weight: 700, size: 17, spacing: '-0.01em', style: 'normal' },
]
const marqueeLogos = [...pressLogos, ...pressLogos, ...pressLogos, ...pressLogos]

const warnings = [
  'Unverified compounding pharmacies','No licensed clinician on staff',
  'Misleading before/after photos','Hidden auto-renewal billing',
  'Counterfeit peptide sources','No consultation required',
  'Unlicensed telehealth operations','Impossible dosage claims',
]
const warningTicker = [...warnings, ...warnings, ...warnings, ...warnings]

export default function HomePage() {
  const featuredProviders = providers.filter(p => p.featured).slice(0, 5)

  return (
    <>
      <Nav />
      <main style={{ background: '#080C10' }}>

        {/* ── HERO ── */}
        <section style={{
          padding: 'clamp(56px,8vw,100px) 24px clamp(48px,6vw,80px)',
          background: 'linear-gradient(160deg, #0D1B2A 0%, #080C10 50%, #0A1628 100%)',
          position: 'relative', overflow: 'hidden',
        }}>
          {/* Glow orbs */}
          <div style={{ position:'absolute', top: 80, right: '10%', width: 400, height: 400, borderRadius:'50%', background:'radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)', pointerEvents:'none' }} />
          <div style={{ position:'absolute', bottom: 40, left: '5%', width: 300, height: 300, borderRadius:'50%', background:'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)', pointerEvents:'none' }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative' }}>
            {/* Peptide pill tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 36 }}>
              {peptides.map(p => (
                <Link key={p.slug} href={`/peptides/${p.slug}`} style={{
                  display: 'inline-block', padding: '6px 16px', borderRadius: 100,
                  border: '1px solid rgba(255,255,255,0.12)',
                  background: 'rgba(255,255,255,0.04)',
                  fontFamily: "'Sora', sans-serif", fontSize: 12, fontWeight: 500,
                  color: 'rgba(255,255,255,0.65)', textDecoration: 'none',
                }}>{p.name}</Link>
              ))}
            </div>

            <div className="hero-grid">
              <div>
                <h1 style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: 'clamp(44px, 7vw, 82px)', fontWeight: 800,
                  color: 'white', lineHeight: 1.02, letterSpacing: '-0.035em', marginBottom: 28,
                }}>
                  Compare peptide<br />
                  <span style={{ color: '#10B981' }}>therapy providers.</span>
                </h1>
                <p style={{
                  fontFamily: "'Sora', sans-serif", fontSize: 'clamp(15px, 2vw, 18px)',
                  color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginBottom: 40, maxWidth: 480,
                }}>
                  Find licensed telehealth providers, compare pricing, read verified patient reviews, and start your peptide therapy protocol with confidence.
                </p>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 44 }}>
                  <Link href="/start" style={{
                    background: '#10B981', color: 'white',
                    fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 15,
                    padding: '15px 32px', borderRadius: 100, textDecoration: 'none', letterSpacing: '-0.01em',
                  }}>Find providers →</Link>
                  <Link href="/providers" style={{
                    background: 'rgba(255,255,255,0.06)', color: 'white',
                    fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: 15,
                    padding: '15px 32px', borderRadius: 100, textDecoration: 'none',
                    border: '1px solid rgba(255,255,255,0.12)', letterSpacing: '-0.01em',
                  }}>Compare all 30+</Link>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{ display: 'flex' }}>
                    {['#6366F1','#10B981','#F59E0B','#EF4444','#8B5CF6'].map((c, i) => (
                      <div key={i} style={{
                        width: 30, height: 30, borderRadius: '50%', background: c,
                        border: '2px solid #080C10', marginLeft: i > 0 ? -8 : 0,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 9, fontWeight: 700, color: 'white', fontFamily: "'Sora', sans-serif",
                      }}>{['MT','SK','JR','EC','DM'][i]}</div>
                    ))}
                  </div>
                  <div>
                    <Stars rating={5} size={11} />
                    <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>4.8 avg · 1,500+ verified patients</div>
                  </div>
                </div>
              </div>

              {/* Right: floating stat cards */}
              <div className="hero-visual" style={{ position: 'relative', height: 420 }}>
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(145deg, rgba(16,185,129,0.08) 0%, rgba(59,130,246,0.05) 100%)',
                  borderRadius: 28, border: '1px solid rgba(255,255,255,0.07)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 72, marginBottom: 12 }}>💉</div>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, color: 'white', fontWeight: 700 }}>Peptide Therapy</div>
                    <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 13, color: '#10B981', marginTop: 6 }}>Doctor-supervised protocols</div>
                  </div>
                </div>
                <div style={{
                  position: 'absolute', bottom: 24, left: -18,
                  background: '#111827', borderRadius: 18, padding: '16px 20px',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.08)',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 38, height: 38, borderRadius: 10, background: 'rgba(16,185,129,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, color: '#10B981', fontFamily: "'Sora', sans-serif" }}>MH</div>
                    <div>
                      <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 13, fontWeight: 700, color: 'white' }}>Marek Health</div>
                      <Stars rating={5} size={11} />
                    </div>
                  </div>
                  <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 11, color: '#10B981', fontWeight: 600, marginTop: 7 }}>🎉 Free consultation</div>
                </div>
                <div style={{
                  position: 'absolute', top: 24, right: -14,
                  background: '#10B981', borderRadius: 16, padding: '14px 18px',
                  boxShadow: '0 8px 28px rgba(16,185,129,0.3)',
                }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, color: 'white', fontWeight: 800, lineHeight: 1 }}>30+</div>
                  <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 10, color: 'rgba(255,255,255,0.8)', marginTop: 2 }}>Verified providers</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PRESS MARQUEE ── */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '22px 0', overflow: 'hidden', position: 'relative', background: '#0A0E14' }}>
          <div style={{ position:'absolute', left:0, top:0, bottom:0, width:100, background:'linear-gradient(to right, #0A0E14 20%, transparent)', zIndex:2, pointerEvents:'none' }} />
          <div style={{ position:'absolute', right:0, top:0, bottom:0, width:100, background:'linear-gradient(to left, #0A0E14 20%, transparent)', zIndex:2, pointerEvents:'none' }} />
          <div style={{ display:'flex', alignItems:'center' }}>
            <div style={{ flexShrink:0, padding:'0 36px 0 28px', fontFamily:"'Sora', sans-serif", fontSize:10, fontWeight:700, color:'rgba(255,255,255,0.2)', textTransform:'uppercase', letterSpacing:'0.14em', whiteSpace:'nowrap', zIndex:3 }}>
              Mentioned in
            </div>
            <div style={{ overflow:'hidden', flex:1 }}>
              <div className="press-marquee" style={{ display:'flex', alignItems:'center', gap:60, width:'max-content' }}>
                {marqueeLogos.map((logo, i) => (
                  <span key={i} style={{ fontFamily:logo.font, fontWeight:logo.weight, fontSize:logo.size, letterSpacing:logo.spacing, fontStyle:logo.style, color:'rgba(255,255,255,0.22)', whiteSpace:'nowrap', userSelect:'none' }}>
                    {logo.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── PEPTIDE CATEGORY GRID ── */}
        <section style={{ padding: 'clamp(56px,7vw,88px) 24px', background: '#080C10' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ marginBottom: 44 }}>
              <p style={{ fontFamily:"'Sora', sans-serif", fontSize:11, fontWeight:700, color:'#10B981', textTransform:'uppercase', letterSpacing:'0.14em', marginBottom:14 }}>Find treatment</p>
              <h2 style={{ fontFamily:"'Playfair Display', serif", fontSize:'clamp(28px, 4.5vw, 50px)', color:'white', fontWeight:800, letterSpacing:'-0.03em', lineHeight:1.08 }}>
                Find doctor-trusted<br />treatment options.
              </h2>
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(200px, 1fr))', gap:14 }}>
              {peptides.map(p => (
                <Link key={p.slug} href={`/peptides/${p.slug}`} style={{ textDecoration:'none' }}>
                  <div style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:20, padding:'24px 20px 20px', transition:'border-color 0.2s' }}>
                    <div style={{ fontSize:32, marginBottom:12 }}>{p.emoji}</div>
                    <div style={{ fontFamily:"'Sora', sans-serif", fontWeight:700, fontSize:15, color:'white', marginBottom:3 }}>{p.name}</div>
                    <div style={{ fontFamily:"'Sora', sans-serif", fontSize:12, color:'rgba(255,255,255,0.4)', marginBottom:10 }}>{p.subtitle}</div>
                    <div style={{ fontFamily:"'Sora', sans-serif", fontSize:12, fontWeight:600, color:p.color }}>{p.priceRange}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── WARNING TICKER ── */}
        <div style={{ background:'#0D0505', padding:'18px 0', overflow:'hidden', position:'relative', borderTop:'1px solid rgba(239,68,68,0.15)', borderBottom:'1px solid rgba(239,68,68,0.15)' }}>
          <div style={{ position:'absolute', left:0, top:0, bottom:0, width:120, background:'linear-gradient(to right, #0D0505, transparent)', zIndex:2, pointerEvents:'none' }} />
          <div style={{ position:'absolute', right:0, top:0, bottom:0, width:120, background:'linear-gradient(to left, #0D0505, transparent)', zIndex:2, pointerEvents:'none' }} />
          <div style={{ overflow:'hidden' }}>
            <div className="warning-marquee" style={{ display:'flex', alignItems:'center', width:'max-content' }}>
              {warningTicker.map((w, i) => (
                <span key={i} style={{ fontFamily:"'Sora', sans-serif", fontSize:13, fontWeight:600, color:'#EF4444', whiteSpace:'nowrap', padding:'0 36px' }}>
                  ✕ {w}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── TRUST TRIO ── */}
        <section style={{ background:'#0D1117', padding:'clamp(56px,7vw,88px) 24px', borderTop:'1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ maxWidth:1100, margin:'0 auto' }}>
            <div style={{ marginBottom:48 }}>
              <p style={{ fontFamily:"'Sora', sans-serif", fontSize:11, fontWeight:700, color:'#10B981', textTransform:'uppercase', letterSpacing:'0.14em', marginBottom:14 }}>Why us</p>
              <h2 style={{ fontFamily:"'Playfair Display', serif", fontSize:'clamp(28px, 4.5vw, 50px)', color:'white', fontWeight:800, letterSpacing:'-0.03em', lineHeight:1.08 }}>
                Choose care<br />you can trust.
              </h2>
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap:20 }}>
              {[
                { icon:'🏥', label:'Trusted providers', body:'Medications prescribed by licensed clinicians and filled by PCAB-accredited compounding pharmacies.', cta:'Find a provider', href:'/providers' },
                { icon:'🔬', label:'Transparent sourcing', body:'See which compounding pharmacies each provider uses and verify their licensing and accreditation.', cta:'Browse pharmacies', href:'/pharmacies' },
                { icon:'⭐', label:'Real patient reviews', body:'Learn about customer experiences — not just results, but shipping, support, and pricing too.', cta:'Read reviews', href:'/reviews' },
              ].map(card => (
                <div key={card.label} style={{ background:'rgba(255,255,255,0.03)', borderRadius:20, padding:'32px 28px', border:'1px solid rgba(255,255,255,0.07)' }}>
                  <div style={{ fontSize:36, marginBottom:18 }}>{card.icon}</div>
                  <h3 style={{ fontFamily:"'Sora', sans-serif", fontWeight:700, fontSize:17, color:'white', marginBottom:10 }}>{card.label}</h3>
                  <p style={{ fontFamily:"'Sora', sans-serif", fontSize:14, color:'rgba(255,255,255,0.45)', lineHeight:1.7, marginBottom:20 }}>{card.body}</p>
                  <Link href={card.href} style={{ fontFamily:"'Sora', sans-serif", fontSize:13, fontWeight:600, color:'#10B981', textDecoration:'none' }}>{card.cta} →</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section style={{ padding:'clamp(56px,7vw,88px) 24px', background:'#080C10' }}>
          <div style={{ maxWidth:1100, margin:'0 auto' }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:56, flexWrap:'wrap', gap:16 }}>
              <div>
                <p style={{ fontFamily:"'Sora', sans-serif", fontSize:11, fontWeight:700, color:'#10B981', textTransform:'uppercase', letterSpacing:'0.14em', marginBottom:14 }}>How it works</p>
                <h2 style={{ fontFamily:"'Playfair Display', serif", fontSize:'clamp(28px, 4.5vw, 50px)', color:'white', fontWeight:800, letterSpacing:'-0.03em', lineHeight:1.08 }}>
                  Start treatment<br />in 3 steps.
                </h2>
              </div>
              <Link href="/start" style={{ background:'#10B981', color:'white', fontFamily:"'Sora', sans-serif", fontWeight:700, fontSize:14, padding:'13px 26px', borderRadius:100, textDecoration:'none' }}>Get started →</Link>
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(260px, 1fr))', gap:48 }}>
              {[
                { num:'01', title:'Tell us your goals', body:'Answer a few quick questions about what you want to achieve with peptide therapy.' },
                { num:'02', title:'Compare providers', body:'Side-by-side pricing, reviews, and pharmacy sourcing for every licensed telehealth provider.' },
                { num:'03', title:'Start your protocol', body:'Complete your online consultation and receive peptides shipped directly to your door.' },
              ].map(step => (
                <div key={step.num} style={{ borderTop:'1px solid rgba(255,255,255,0.08)', paddingTop:24 }}>
                  <div style={{ fontFamily:"'Playfair Display', serif", fontSize:72, fontWeight:800, color:'rgba(255,255,255,0.06)', lineHeight:1, marginBottom:8 }}>{step.num}</div>
                  <h3 style={{ fontFamily:"'Sora', sans-serif", fontWeight:700, fontSize:18, color:'white', marginBottom:10 }}>{step.title}</h3>
                  <p style={{ fontFamily:"'Sora', sans-serif", fontSize:14, color:'rgba(255,255,255,0.45)', lineHeight:1.7 }}>{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TOP PROVIDERS LIST ── */}
        <section style={{ background:'#0D1117', padding:'clamp(56px,7vw,88px) 24px', borderTop:'1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ maxWidth:1100, margin:'0 auto' }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:36, flexWrap:'wrap', gap:16 }}>
              <div>
                <p style={{ fontFamily:"'Sora', sans-serif", fontSize:11, fontWeight:700, color:'#10B981', textTransform:'uppercase', letterSpacing:'0.14em', marginBottom:14 }}>Top providers</p>
                <h2 style={{ fontFamily:"'Playfair Display', serif", fontSize:'clamp(28px, 4.5vw, 50px)', color:'white', fontWeight:800, letterSpacing:'-0.03em', lineHeight:1.08 }}>
                  Responsive care,<br />fast shipping.
                </h2>
              </div>
              <Link href="/providers" style={{ fontFamily:"'Sora', sans-serif", fontSize:14, fontWeight:600, color:'rgba(255,255,255,0.45)', textDecoration:'none' }}>See all 30+ providers →</Link>
            </div>
            <div style={{ display:'flex', flexDirection:'column' }}>
              {featuredProviders.map((p, i) => (
                <div key={p.slug} style={{
                  display:'flex', alignItems:'center', justifyContent:'space-between',
                  padding:'20px 24px', background:'rgba(255,255,255,0.03)',
                  borderRadius: i===0 ? '16px 16px 0 0' : i===featuredProviders.length-1 ? '0 0 16px 16px' : 0,
                  borderBottom: i < featuredProviders.length-1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                  flexWrap:'wrap', gap:12,
                }}>
                  <div style={{ display:'flex', alignItems:'center', gap:16, minWidth:0 }}>
                    <div style={{ fontFamily:"'Playfair Display', serif", fontSize:22, fontWeight:800, color:'rgba(255,255,255,0.1)', width:28, flexShrink:0 }}>{i+1}</div>
                    <div style={{ width:42, height:42, borderRadius:12, flexShrink:0, background:'rgba(16,185,129,0.12)', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:"'Sora', sans-serif", fontWeight:700, fontSize:13, color:'#10B981' }}>
                      {p.logo}
                    </div>
                    <div>
                      <div style={{ fontFamily:"'Sora', sans-serif", fontWeight:700, fontSize:15, color:'white' }}>{p.name}</div>
                      <div style={{ display:'flex', alignItems:'center', gap:6, marginTop:2 }}>
                        <Stars rating={p.rating} size={11} />
                        <span style={{ fontFamily:"'Sora', sans-serif", fontSize:12, color:'rgba(255,255,255,0.35)' }}>{p.rating} · {p.reviewCount.toLocaleString()} reviews</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ display:'flex', alignItems:'center', gap:20, flexWrap:'wrap' }}>
                    <div>
                      <div style={{ fontFamily:"'Sora', sans-serif", fontSize:13, fontWeight:700, color:'white' }}>${p.priceFrom}/mo</div>
                      <div style={{ fontFamily:"'Sora', sans-serif", fontSize:11, color:'rgba(255,255,255,0.3)' }}>starting from</div>
                    </div>
                    {p.badge && (
                      <span style={{ background:'rgba(16,185,129,0.12)', color:'#10B981', fontFamily:"'Sora', sans-serif", fontSize:10, fontWeight:700, padding:'4px 10px', borderRadius:100, letterSpacing:'0.04em' }}>{p.badge}</span>
                    )}
                    <Link href={`/providers/${p.slug}`} style={{ background:'#10B981', color:'white', fontFamily:"'Sora', sans-serif", fontWeight:700, fontSize:13, padding:'10px 20px', borderRadius:100, textDecoration:'none', whiteSpace:'nowrap' }}>View deal</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── REVIEWS ── */}
        <section style={{ padding:'clamp(56px,7vw,88px) 24px', background:'#080C10' }}>
          <div style={{ maxWidth:1100, margin:'0 auto' }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:36, flexWrap:'wrap', gap:16 }}>
              <div>
                <p style={{ fontFamily:"'Sora', sans-serif", fontSize:11, fontWeight:700, color:'#10B981', textTransform:'uppercase', letterSpacing:'0.14em', marginBottom:14 }}>Real reviews</p>
                <h2 style={{ fontFamily:"'Playfair Display', serif", fontSize:'clamp(28px, 4.5vw, 50px)', color:'white', fontWeight:800, letterSpacing:'-0.03em', lineHeight:1.08 }}>
                  Help thousands make<br />the right choice.
                </h2>
              </div>
              <Link href="/reviews" style={{ fontFamily:"'Sora', sans-serif", fontSize:14, fontWeight:600, color:'rgba(255,255,255,0.45)', textDecoration:'none' }}>Write a review →</Link>
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(280px, 1fr))', gap:14 }}>
              {reviews.slice(0, 6).map((r, i) => (
                <div key={i} style={{ background:'rgba(255,255,255,0.03)', borderRadius:18, padding:24, border:'1px solid rgba(255,255,255,0.06)' }}>
                  <Stars rating={r.rating} size={13} />
                  <p style={{ fontFamily:"'Sora', sans-serif", fontSize:14, color:'rgba(255,255,255,0.7)', lineHeight:1.7, margin:'12px 0 16px' }}>"{r.text}"</p>
                  <div style={{ display:'flex', alignItems:'center', gap:10 }}>
                    <div style={{ width:32, height:32, borderRadius:'50%', background:'rgba(16,185,129,0.15)', color:'#10B981', display:'flex', alignItems:'center', justifyContent:'center', fontSize:10, fontWeight:700, fontFamily:"'Sora', sans-serif", flexShrink:0 }}>{r.avatar}</div>
                    <div>
                      <div style={{ fontFamily:"'Sora', sans-serif", fontSize:13, fontWeight:600, color:'white' }}>{r.name}</div>
                      <div style={{ fontFamily:"'Sora', sans-serif", fontSize:11, color:'rgba(255,255,255,0.35)' }}>{r.location}</div>
                    </div>
                    <span style={{ marginLeft:'auto', background:'rgba(16,185,129,0.12)', color:'#10B981', fontSize:10, fontWeight:700, padding:'3px 10px', borderRadius:100, fontFamily:"'Sora', sans-serif", whiteSpace:'nowrap' }}>{r.peptide}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BLOG ── */}
        <section style={{ background:'#0D1117', padding:'clamp(56px,7vw,88px) 24px', borderTop:'1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ maxWidth:1100, margin:'0 auto' }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:36, flexWrap:'wrap', gap:16 }}>
              <div>
                <p style={{ fontFamily:"'Sora', sans-serif", fontSize:11, fontWeight:700, color:'#10B981', textTransform:'uppercase', letterSpacing:'0.14em', marginBottom:14 }}>Peptide insights</p>
                <h2 style={{ fontFamily:"'Playfair Display', serif", fontSize:'clamp(28px, 4.5vw, 50px)', color:'white', fontWeight:800, letterSpacing:'-0.03em', lineHeight:1.08 }}>
                  Evidence-based<br />research.
                </h2>
              </div>
              <Link href="/insights" style={{ fontFamily:"'Sora', sans-serif", fontSize:14, fontWeight:600, color:'rgba(255,255,255,0.45)', textDecoration:'none' }}>Read all →</Link>
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(300px, 1fr))', gap:18 }}>
              {articles.slice(0,3).map(a => (
                <Link key={a.slug} href={`/insights/${a.slug}`} style={{ textDecoration:'none' }}>
                  <div style={{ borderRadius:18, overflow:'hidden', border:'1px solid rgba(255,255,255,0.06)', background:'rgba(255,255,255,0.02)' }}>
                    <img src={a.image} alt={a.title} style={{ width:'100%', height:180, objectFit:'cover', display:'block', filter:'brightness(0.85)' }} />
                    <div style={{ padding:'20px 22px' }}>
                      <span style={{ fontFamily:"'Sora', sans-serif", fontSize:10, fontWeight:700, color:'#10B981', textTransform:'uppercase', letterSpacing:'0.12em' }}>{a.category}</span>
                      <h3 style={{ fontFamily:"'Sora', sans-serif", fontWeight:700, fontSize:15, color:'white', margin:'8px 0 6px', lineHeight:1.45 }}>{a.title}</h3>
                      <p style={{ fontFamily:"'Sora', sans-serif", fontSize:12, color:'rgba(255,255,255,0.35)' }}>{a.readTime} · {a.date}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── NEWSLETTER — Beehiiv embed ── */}
        <section style={{ background:'linear-gradient(160deg, #0A1628 0%, #080C10 100%)', padding:'clamp(56px,7vw,88px) 24px', borderTop:'1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ maxWidth:600, margin:'0 auto', textAlign:'center' }}>
            <p style={{ fontFamily:"'Sora', sans-serif", fontSize:11, fontWeight:700, color:'#10B981', textTransform:'uppercase', letterSpacing:'0.14em', marginBottom:20 }}>Newsletter</p>
            <h2 style={{ fontFamily:"'Playfair Display', serif", fontSize:'clamp(28px, 4.5vw, 50px)', color:'white', fontWeight:800, letterSpacing:'-0.03em', lineHeight:1.08, marginBottom:20 }}>
              The peptide therapy<br />newsletter.
            </h2>
            <p style={{ fontFamily:"'Sora', sans-serif", fontSize:16, color:'rgba(255,255,255,0.45)', lineHeight:1.7, marginBottom:40 }}>
              Weekly insights on providers, research, and patient stories. Join 4,200+ subscribers. No spam, ever.
            </p>
            {/* Beehiiv embed — replace PUBLICATION_ID with your actual beehiiv publication ID from Settings > Integrations */}
            <div style={{ background:'rgba(255,255,255,0.04)', borderRadius:20, padding:8, border:'1px solid rgba(255,255,255,0.08)' }}>
              <iframe
                src="https://embeds.beehiiv.com/REPLACE_WITH_YOUR_BEEHIIV_EMBED_ID"
                data-test-id="beehiiv-embed"
                width="100%"
                height="52"
                style={{ borderRadius:14, border:'0', background:'transparent' }}
              />
            </div>
            <p style={{ fontFamily:"'Sora', sans-serif", fontSize:12, color:'rgba(255,255,255,0.2)', marginTop:16 }}>4,200+ subscribers · Free forever · Unsubscribe anytime</p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}

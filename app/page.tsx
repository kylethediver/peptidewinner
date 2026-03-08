import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { providers, reviews, articles, peptides } from '@/lib/data'

function Stars({ rating, size = 14 }: { rating: number; size?: number }) {
  return (
    <span style={{ fontSize: size, letterSpacing: '-1px' }}>
      {[1,2,3,4,5].map(s => (
        <span key={s} style={{ color: s <= Math.round(rating) ? '#F59E0B' : 'rgba(20,24,38,0.15)' }}>★</span>
      ))}
    </span>
  )
}

// Category → pastel color map
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

const pressLogos = [
  { name: 'WIRED',              font: '"Arial Black", sans-serif', weight: 900, size: 18, spacing: '-0.04em', style: 'normal' },
  { name: 'NPR',                font: '"Arial Black", sans-serif', weight: 900, size: 20, spacing: '0.02em',  style: 'normal' },
  { name: 'Wall Street Journal',font: 'Georgia, serif',            weight: 700, size: 13, spacing: '0.01em',  style: 'italic' },
  { name: 'THE INDEPENDENT',    font: '"Arial", sans-serif',       weight: 800, size: 10, spacing: '0.08em',  style: 'normal' },
  { name: 'USA TODAY',          font: '"Arial Black", sans-serif', weight: 900, size: 14, spacing: '0.03em',  style: 'normal' },
  { name: 'Quartz',             font: 'Georgia, serif',            weight: 700, size: 18, spacing: '0em',     style: 'italic' },
  { name: "Men's Health",       font: '"Arial Black", sans-serif', weight: 900, size: 13, spacing: '-0.02em', style: 'normal' },
  { name: 'Healthline',         font: '"Arial", sans-serif',       weight: 700, size: 15, spacing: '-0.01em', style: 'normal' },
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
      <main style={{ background: 'var(--pw-white)' }}>

        {/* ── HERO ── */}
        <section style={{
          padding: 'clamp(72px,9vw,120px) 32px clamp(64px,8vw,100px)',
          background: 'var(--pw-midnight)',
          position: 'relative', overflow: 'hidden',
        }}>
          {/* Pastel orbs */}
          <div style={{ position:'absolute', top:-120, left:-160, width:600, height:600, borderRadius:'50%', background:'var(--pw-lavender)', filter:'blur(80px)', opacity:0.35, pointerEvents:'none' }} />
          <div style={{ position:'absolute', bottom:-80, right:-60, width:500, height:500, borderRadius:'50%', background:'var(--pw-sky)', filter:'blur(80px)', opacity:0.30, pointerEvents:'none' }} />
          <div style={{ position:'absolute', top:'40%', left:'45%', width:380, height:380, borderRadius:'50%', background:'var(--pw-mint)', filter:'blur(80px)', opacity:0.15, pointerEvents:'none' }} />

          <div style={{ maxWidth: 1160, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            {/* Eyebrow tag */}
            <div style={{ display:'inline-block', fontFamily:'var(--font-mono)', fontSize:11, letterSpacing:'0.18em', textTransform:'uppercase', color:'rgba(255,255,255,0.50)', border:'1px solid rgba(255,255,255,0.14)', padding:'6px 16px', borderRadius:40, marginBottom:40 }}>
              Peptide Therapy Comparison Platform
            </div>

            <div className="hero-grid">
              <div>
                <h1 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(48px, 7vw, 88px)', fontWeight: 700,
                  color: 'white', lineHeight: 0.95, letterSpacing: '-0.03em', marginBottom: 28,
                }}>
                  Peptide<br/>
                  <span style={{ background: 'linear-gradient(135deg, #C8DEFA 0%, #DDD5F5 50%, #F5D8E8 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
                    therapy<br/>you can<br/>trust.
                  </span>
                </h1>
                <p style={{
                  fontFamily: 'var(--font-body)', fontSize: 'clamp(15px, 2vw, 18px)', fontWeight: 300,
                  color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginBottom: 44, maxWidth: 440,
                }}>
                  Compare licensed telehealth providers, verify compounding pharmacy sourcing, and start your protocol with confidence.
                </p>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 48 }}>
                  <Link href="/start" style={{
                    background: 'white', color: '#0E1120',
                    fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 15,
                    padding: '14px 32px', borderRadius: 100, textDecoration: 'none',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
                  }}>Find providers →</Link>
                  <Link href="/providers" style={{
                    background: 'transparent', color: 'rgba(255,255,255,0.80)',
                    fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: 15,
                    padding: '14px 32px', borderRadius: 100, textDecoration: 'none',
                    border: '1.5px solid rgba(255,255,255,0.20)',
                  }}>Compare all 30+</Link>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{ display: 'flex' }}>
                    {['#C8DEFA','#C9EDDF','#F5D8E8','#DDD5F5','#F2F0C8'].map((c, i) => (
                      <div key={i} style={{
                        width: 30, height: 30, borderRadius: '50%', background: c,
                        border: '2px solid #0E1120', marginLeft: i > 0 ? -8 : 0,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 9, fontWeight: 700, color: '#0E1120', fontFamily: 'var(--font-mono)',
                      }}>{['MT','SK','JR','EC','DM'][i]}</div>
                    ))}
                  </div>
                  <div>
                    <Stars rating={5} size={11} />
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'rgba(255,255,255,0.35)', marginTop: 3, letterSpacing:'0.04em' }}>4.8 avg · 1,500+ verified patients</div>
                  </div>
                </div>
              </div>

              {/* Right: stat cards */}
              <div className="hero-visual" style={{ position: 'relative', height: 420 }}>
                {/* Stats row */}
                <div style={{ position:'absolute', bottom:0, left:0, right:0, background:'rgba(255,255,255,0.05)', borderRadius:24, border:'1px solid rgba(255,255,255,0.10)', backdropFilter:'blur(12px)', padding:'0', display:'flex' }}>
                  {[
                    { val:'30+', label:'Verified Providers' },
                    { val:'10+', label:'Peptides Covered' },
                    { val:'4.8★', label:'Avg Patient Rating' },
                    { val:'Free', label:'Consultations' },
                  ].map((s, i) => (
                    <div key={i} style={{ flex:1, padding:'28px 20px', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none', textAlign:'center' }}>
                      <div style={{ fontFamily:'var(--font-display)', fontSize:28, fontWeight:700, color:'white', letterSpacing:'-0.03em' }}>{s.val}</div>
                      <div style={{ fontFamily:'var(--font-mono)', fontSize:10, color:'rgba(255,255,255,0.40)', textTransform:'uppercase', letterSpacing:'0.1em', marginTop:4 }}>{s.label}</div>
                    </div>
                  ))}
                </div>
                {/* Provider card */}
                <div style={{
                  position:'absolute', top:20, left:0, right:80,
                  background:'rgba(255,255,255,0.07)', borderRadius:20, padding:'24px',
                  border:'1px solid rgba(255,255,255,0.12)', backdropFilter:'blur(12px)',
                }}>
                  <div style={{ fontFamily:'var(--font-mono)', fontSize:10, color:'rgba(255,255,255,0.40)', textTransform:'uppercase', letterSpacing:'0.14em', marginBottom:16 }}>Best Overall Pick</div>
                  <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:14 }}>
                    <div style={{ width:40, height:40, borderRadius:12, background:'var(--pw-sky)', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'var(--font-mono)', fontWeight:700, fontSize:12, color:'#0E1120' }}>MH</div>
                    <div>
                      <div style={{ fontFamily:'var(--font-display)', fontSize:16, fontWeight:600, color:'white' }}>Marek Health</div>
                      <Stars rating={5} size={11} />
                    </div>
                    <div style={{ marginLeft:'auto', background:'var(--pw-mint)', color:'#1A5C3A', fontFamily:'var(--font-mono)', fontSize:10, padding:'4px 12px', borderRadius:40, fontWeight:700, letterSpacing:'0.08em', textTransform:'uppercase' }}>Best Pick</div>
                  </div>
                  <div style={{ display:'flex', gap:8 }}>
                    {['BPC-157','Sermorelin','Ipamorelin'].map(tag => (
                      <span key={tag} style={{ background:'rgba(255,255,255,0.08)', color:'rgba(255,255,255,0.6)', fontFamily:'var(--font-mono)', fontSize:10, padding:'3px 10px', borderRadius:40, letterSpacing:'0.06em' }}>{tag}</span>
                    ))}
                  </div>
                </div>
                {/* Floating pill */}
                <div style={{
                  position:'absolute', top:20, right:0, width:72,
                  background:'var(--pw-lavender)', borderRadius:20, padding:'20px 12px', textAlign:'center',
                  boxShadow:'0 8px 32px rgba(221,213,245,0.4)',
                }}>
                  <div style={{ fontFamily:'var(--font-display)', fontSize:24, fontWeight:700, color:'#0E1120', letterSpacing:'-0.03em' }}>30+</div>
                  <div style={{ fontFamily:'var(--font-mono)', fontSize:9, color:'rgba(14,17,32,0.5)', textTransform:'uppercase', letterSpacing:'0.08em', marginTop:4 }}>Providers</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PRESS MARQUEE ── */}
        <div style={{ borderTop: '1px solid rgba(20,24,38,0.07)', borderBottom: '1px solid rgba(20,24,38,0.07)', padding: '20px 0', overflow: 'hidden', position: 'relative', background: 'var(--pw-surface)' }}>
          <div style={{ position:'absolute', left:0, top:0, bottom:0, width:100, background:'linear-gradient(to right, var(--pw-surface) 20%, transparent)', zIndex:2, pointerEvents:'none' }} />
          <div style={{ position:'absolute', right:0, top:0, bottom:0, width:100, background:'linear-gradient(to left, var(--pw-surface) 20%, transparent)', zIndex:2, pointerEvents:'none' }} />
          <div style={{ display:'flex', alignItems:'center' }}>
            <div style={{ flexShrink:0, padding:'0 36px 0 28px', fontFamily:'var(--font-mono)', fontSize:10, color:'var(--pw-ink-30)', textTransform:'uppercase', letterSpacing:'0.14em', whiteSpace:'nowrap', zIndex:3 }}>
              Mentioned in
            </div>
            <div style={{ overflow:'hidden', flex:1 }}>
              <div className="press-marquee" style={{ display:'flex', alignItems:'center', gap:60, width:'max-content' }}>
                {marqueeLogos.map((logo, i) => (
                  <span key={i} style={{ fontFamily:logo.font, fontWeight:logo.weight, fontSize:logo.size, letterSpacing:logo.spacing, fontStyle:logo.style, color:'var(--pw-ink-30)', whiteSpace:'nowrap', userSelect:'none' }}>
                    {logo.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── PEPTIDE CATEGORY GRID ── */}
        <section style={{ padding: 'clamp(64px,7vw,96px) 32px', background: 'var(--pw-white)' }}>
          <div style={{ maxWidth: 1160, margin: '0 auto' }}>
            <div style={{ marginBottom: 16, display:'inline-flex', alignItems:'center', gap:10 }}>
              <span style={{ display:'block', width:32, height:1, background:'var(--pw-ink-30)' }} />
              <span style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.20em', textTransform:'uppercase', color:'var(--pw-ink-60)' }}>Peptide Library</span>
            </div>
            <h2 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(32px,4.5vw,52px)', fontWeight:600, color:'var(--pw-midnight)', letterSpacing:'-0.02em', lineHeight:1.1, marginBottom:16 }}>
              Find doctor-trusted<br/>treatment options.
            </h2>
            <p style={{ fontFamily:'var(--font-body)', fontSize:16, fontWeight:300, color:'var(--pw-ink-60)', lineHeight:1.7, marginBottom:48, maxWidth:480 }}>
              Every peptide in our library is covered by licensed telehealth providers with transparent pricing.
            </p>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(190px, 1fr))', gap:12 }}>
              {peptides.map(p => {
                const bg = categoryColors[p.category] || '#F5F6FA'
                return (
                  <Link key={p.slug} href={`/peptides/${p.slug}`} style={{ textDecoration:'none' }}>
                    <div style={{ background:bg, borderRadius:20, padding:'24px 20px 20px', transition:'transform 0.2s, box-shadow 0.2s', cursor:'pointer' }}>
                      <div style={{ fontSize:28, marginBottom:14 }}>{p.emoji}</div>
                      <div style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:16, color:'var(--pw-midnight)', marginBottom:3, letterSpacing:'-0.01em' }}>{p.name}</div>
                      <div style={{ fontFamily:'var(--font-body)', fontSize:12, color:'rgba(14,17,32,0.55)', marginBottom:12, lineHeight:1.4 }}>{p.subtitle}</div>
                      <div style={{ fontFamily:'var(--font-mono)', fontSize:11, fontWeight:700, color:'var(--pw-midnight)', letterSpacing:'0.04em' }}>{p.priceRange}</div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── WARNING TICKER ── */}
        <div style={{ background:'#FDE8E8', padding:'16px 0', overflow:'hidden', position:'relative', borderTop:'1px solid rgba(139,26,26,0.12)', borderBottom:'1px solid rgba(139,26,26,0.12)' }}>
          <div style={{ position:'absolute', left:0, top:0, bottom:0, width:120, background:'linear-gradient(to right, #FDE8E8, transparent)', zIndex:2, pointerEvents:'none' }} />
          <div style={{ position:'absolute', right:0, top:0, bottom:0, width:120, background:'linear-gradient(to left, #FDE8E8, transparent)', zIndex:2, pointerEvents:'none' }} />
          <div style={{ overflow:'hidden' }}>
            <div className="warning-marquee" style={{ display:'flex', alignItems:'center', width:'max-content' }}>
              {warningTicker.map((w, i) => (
                <span key={i} style={{ fontFamily:'var(--font-mono)', fontSize:11, fontWeight:700, color:'#8B1A1A', whiteSpace:'nowrap', padding:'0 36px', letterSpacing:'0.06em', textTransform:'uppercase' }}>
                  ✕ {w}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── TRUST TRIO ── */}
        <section style={{ background: 'var(--pw-surface)', padding: 'clamp(64px,7vw,96px) 32px' }}>
          <div style={{ maxWidth: 1160, margin: '0 auto' }}>
            <div style={{ marginBottom: 16, display:'inline-flex', alignItems:'center', gap:10 }}>
              <span style={{ display:'block', width:32, height:1, background:'var(--pw-ink-30)' }} />
              <span style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.20em', textTransform:'uppercase', color:'var(--pw-ink-60)' }}>Why us</span>
            </div>
            <h2 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(32px,4.5vw,52px)', fontWeight:600, color:'var(--pw-midnight)', letterSpacing:'-0.02em', lineHeight:1.1, marginBottom:56 }}>
              Choose care<br/>you can trust.
            </h2>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap:20 }}>
              {[
                { bg:'var(--pw-sky)', icon:'🏥', label:'Trusted providers', body:'Medications prescribed by licensed clinicians and filled by PCAB-accredited compounding pharmacies.', cta:'Find a provider', href:'/providers' },
                { bg:'var(--pw-mint)', icon:'🔬', label:'Transparent sourcing', body:'See which compounding pharmacies each provider uses and verify their licensing and accreditation.', cta:'Browse pharmacies', href:'/pharmacies' },
                { bg:'var(--pw-blush)', icon:'⭐', label:'Real patient reviews', body:'Learn about customer experiences — not just results, but shipping, support, and pricing transparency.', cta:'Read reviews', href:'/reviews' },
              ].map(card => (
                <div key={card.label} style={{ background:card.bg, borderRadius:24, padding:'36px 32px' }}>
                  <div style={{ fontSize:32, marginBottom:20 }}>{card.icon}</div>
                  <h3 style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:20, color:'var(--pw-midnight)', marginBottom:12, letterSpacing:'-0.01em' }}>{card.label}</h3>
                  <p style={{ fontFamily:'var(--font-body)', fontSize:14, fontWeight:300, color:'rgba(14,17,32,0.65)', lineHeight:1.75, marginBottom:24 }}>{card.body}</p>
                  <Link href={card.href} style={{ fontFamily:'var(--font-body)', fontSize:14, fontWeight:500, color:'var(--pw-midnight)', textDecoration:'none' }}>{card.cta} →</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section style={{ padding:'clamp(64px,7vw,96px) 32px', background:'var(--pw-white)' }}>
          <div style={{ maxWidth:1160, margin:'0 auto' }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:64, flexWrap:'wrap', gap:16 }}>
              <div>
                <div style={{ marginBottom:16, display:'inline-flex', alignItems:'center', gap:10 }}>
                  <span style={{ display:'block', width:32, height:1, background:'var(--pw-ink-30)' }} />
                  <span style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.20em', textTransform:'uppercase', color:'var(--pw-ink-60)' }}>How it works</span>
                </div>
                <h2 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(32px,4.5vw,52px)', fontWeight:600, color:'var(--pw-midnight)', letterSpacing:'-0.02em', lineHeight:1.1 }}>
                  Start treatment<br/>in 3 steps.
                </h2>
              </div>
              <Link href="/start" style={{ background:'var(--pw-midnight)', color:'white', fontFamily:'var(--font-body)', fontWeight:500, fontSize:14, padding:'13px 28px', borderRadius:100, textDecoration:'none', boxShadow:'0 4px 20px rgba(14,17,32,0.22)' }}>Get started →</Link>
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(260px, 1fr))', gap:48 }}>
              {[
                { num:'01', bg:'var(--pw-sky)', title:'Tell us your goals', body:'Answer a few quick questions about what you want to achieve with peptide therapy.' },
                { num:'02', bg:'var(--pw-lavender)', title:'Compare providers', body:'Side-by-side pricing, reviews, and pharmacy sourcing for every licensed telehealth provider.' },
                { num:'03', bg:'var(--pw-mint)', title:'Start your protocol', body:'Complete your online consultation and receive peptides shipped directly to your door.' },
              ].map(step => (
                <div key={step.num} style={{ borderTop:'2px solid rgba(20,24,38,0.10)', paddingTop:28 }}>
                  <div style={{ fontFamily:'var(--font-display)', fontSize:64, fontWeight:700, color:'rgba(20,24,38,0.06)', lineHeight:1, marginBottom:8 }}>{step.num}</div>
                  <h3 style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:20, color:'var(--pw-midnight)', marginBottom:12, letterSpacing:'-0.01em' }}>{step.title}</h3>
                  <p style={{ fontFamily:'var(--font-body)', fontSize:14, fontWeight:300, color:'var(--pw-ink-60)', lineHeight:1.75 }}>{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TOP PROVIDERS ── */}
        <section style={{ background:'var(--pw-surface)', padding:'clamp(64px,7vw,96px) 32px' }}>
          <div style={{ maxWidth:1160, margin:'0 auto' }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:40, flexWrap:'wrap', gap:16 }}>
              <div>
                <div style={{ marginBottom:16, display:'inline-flex', alignItems:'center', gap:10 }}>
                  <span style={{ display:'block', width:32, height:1, background:'var(--pw-ink-30)' }} />
                  <span style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.20em', textTransform:'uppercase', color:'var(--pw-ink-60)' }}>Top providers</span>
                </div>
                <h2 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(32px,4.5vw,52px)', fontWeight:600, color:'var(--pw-midnight)', letterSpacing:'-0.02em', lineHeight:1.1 }}>
                  Responsive care,<br/>fast shipping.
                </h2>
              </div>
              <Link href="/providers" style={{ fontFamily:'var(--font-body)', fontSize:14, fontWeight:400, color:'var(--pw-ink-60)', textDecoration:'none' }}>See all 30+ providers →</Link>
            </div>
            <div style={{ background:'white', borderRadius:20, overflow:'hidden', boxShadow:'0 2px 16px rgba(14,17,32,0.07)' }}>
              {featuredProviders.map((p, i) => (
                <div key={p.slug} style={{
                  display:'flex', alignItems:'center', justifyContent:'space-between',
                  padding:'20px 28px',
                  borderBottom: i < featuredProviders.length-1 ? '1px solid rgba(20,24,38,0.07)' : 'none',
                  flexWrap:'wrap', gap:12,
                }}>
                  <div style={{ display:'flex', alignItems:'center', gap:16, minWidth:0 }}>
                    <div style={{ fontFamily:'var(--font-display)', fontSize:20, fontWeight:600, color:'rgba(20,24,38,0.12)', width:28, flexShrink:0 }}>{i+1}</div>
                    <div style={{ width:42, height:42, borderRadius:12, flexShrink:0, background:'var(--pw-sky)', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'var(--font-mono)', fontWeight:700, fontSize:13, color:'var(--pw-midnight)' }}>
                      {p.logo}
                    </div>
                    <div>
                      <div style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:16, color:'var(--pw-midnight)', letterSpacing:'-0.01em' }}>{p.name}</div>
                      <div style={{ display:'flex', alignItems:'center', gap:6, marginTop:3 }}>
                        <Stars rating={p.rating} size={11} />
                        <span style={{ fontFamily:'var(--font-mono)', fontSize:11, color:'var(--pw-ink-60)', letterSpacing:'0.04em' }}>{p.rating} · {p.reviewCount.toLocaleString()} reviews</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ display:'flex', alignItems:'center', gap:20, flexWrap:'wrap' }}>
                    <div>
                      <div style={{ fontFamily:'var(--font-display)', fontSize:18, fontWeight:600, color:'var(--pw-midnight)', letterSpacing:'-0.02em' }}>${p.priceFrom}/mo</div>
                      <div style={{ fontFamily:'var(--font-mono)', fontSize:10, color:'var(--pw-ink-30)', letterSpacing:'0.06em', textTransform:'uppercase' }}>starting from</div>
                    </div>
                    {p.badge && (
                      <span style={{ background:'var(--pw-mint)', color:'#1A5C3A', fontFamily:'var(--font-mono)', fontSize:10, fontWeight:700, padding:'4px 12px', borderRadius:100, letterSpacing:'0.08em', textTransform:'uppercase' }}>{p.badge}</span>
                    )}
                    <Link href={`/providers/${p.slug}`} style={{ background:'var(--pw-midnight)', color:'white', fontFamily:'var(--font-body)', fontWeight:500, fontSize:14, padding:'11px 22px', borderRadius:100, textDecoration:'none', whiteSpace:'nowrap', boxShadow:'0 4px 16px rgba(14,17,32,0.18)' }}>View deal</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── REVIEWS ── */}
        <section style={{ padding:'clamp(64px,7vw,96px) 32px', background:'var(--pw-white)' }}>
          <div style={{ maxWidth:1160, margin:'0 auto' }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:48, flexWrap:'wrap', gap:16 }}>
              <div>
                <div style={{ marginBottom:16, display:'inline-flex', alignItems:'center', gap:10 }}>
                  <span style={{ display:'block', width:32, height:1, background:'var(--pw-ink-30)' }} />
                  <span style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.20em', textTransform:'uppercase', color:'var(--pw-ink-60)' }}>Patient reviews</span>
                </div>
                <h2 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(32px,4.5vw,52px)', fontWeight:600, color:'var(--pw-midnight)', letterSpacing:'-0.02em', lineHeight:1.1 }}>
                  Real patients,<br/>real results.
                </h2>
              </div>
              <Link href="/reviews" style={{ fontFamily:'var(--font-body)', fontSize:14, fontWeight:400, color:'var(--pw-ink-60)', textDecoration:'none' }}>Write a review →</Link>
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(280px, 1fr))', gap:14 }}>
              {reviews.slice(0, 6).map((r, i) => (
                <div key={i} style={{ background:'white', borderRadius:20, padding:'28px', border:'1px solid rgba(20,24,38,0.07)', boxShadow:'0 2px 12px rgba(14,17,32,0.05)' }}>
                  <Stars rating={r.rating} size={13} />
                  <p style={{ fontFamily:'var(--font-body)', fontSize:14, fontWeight:300, color:'var(--pw-ink)', lineHeight:1.75, margin:'14px 0 18px' }}>"{r.text}"</p>
                  <div style={{ display:'flex', alignItems:'center', gap:10 }}>
                    <div style={{ width:34, height:34, borderRadius:'50%', background:'var(--pw-lavender)', color:'var(--pw-midnight)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:11, fontWeight:700, fontFamily:'var(--font-mono)', flexShrink:0 }}>{r.avatar}</div>
                    <div>
                      <div style={{ fontFamily:'var(--font-display)', fontSize:14, fontWeight:600, color:'var(--pw-midnight)', letterSpacing:'-0.01em' }}>{r.name}</div>
                      <div style={{ fontFamily:'var(--font-mono)', fontSize:10, color:'var(--pw-ink-60)', letterSpacing:'0.04em' }}>{r.location}</div>
                    </div>
                    <span style={{ marginLeft:'auto', background:'var(--pw-sky)', color:'var(--pw-navy)', fontSize:10, fontWeight:700, padding:'3px 10px', borderRadius:100, fontFamily:'var(--font-mono)', whiteSpace:'nowrap', letterSpacing:'0.06em', textTransform:'uppercase' }}>{r.peptide}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BLOG ── */}
        <section style={{ background:'var(--pw-surface)', padding:'clamp(64px,7vw,96px) 32px' }}>
          <div style={{ maxWidth:1160, margin:'0 auto' }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:48, flexWrap:'wrap', gap:16 }}>
              <div>
                <div style={{ marginBottom:16, display:'inline-flex', alignItems:'center', gap:10 }}>
                  <span style={{ display:'block', width:32, height:1, background:'var(--pw-ink-30)' }} />
                  <span style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.20em', textTransform:'uppercase', color:'var(--pw-ink-60)' }}>Peptide insights</span>
                </div>
                <h2 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(32px,4.5vw,52px)', fontWeight:600, color:'var(--pw-midnight)', letterSpacing:'-0.02em', lineHeight:1.1 }}>
                  Evidence-based<br/>research.
                </h2>
              </div>
              <Link href="/insights" style={{ fontFamily:'var(--font-body)', fontSize:14, fontWeight:400, color:'var(--pw-ink-60)', textDecoration:'none' }}>Read all →</Link>
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(300px, 1fr))', gap:18 }}>
              {articles.slice(0,3).map(a => (
                <Link key={a.slug} href={`/insights/${a.slug}`} style={{ textDecoration:'none' }}>
                  <div style={{ borderRadius:20, overflow:'hidden', background:'white', boxShadow:'0 2px 16px rgba(14,17,32,0.06)', border:'1px solid rgba(20,24,38,0.07)', transition:'transform 0.2s' }}>
                    <img src={a.image} alt={a.title} style={{ width:'100%', height:180, objectFit:'cover', display:'block' }} />
                    <div style={{ padding:'22px 24px' }}>
                      <span style={{ fontFamily:'var(--font-mono)', fontSize:10, fontWeight:700, color:'var(--pw-ink-60)', textTransform:'uppercase', letterSpacing:'0.14em' }}>{a.category}</span>
                      <h3 style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:16, color:'var(--pw-midnight)', margin:'10px 0 8px', lineHeight:1.35, letterSpacing:'-0.01em' }}>{a.title}</h3>
                      <p style={{ fontFamily:'var(--font-mono)', fontSize:11, color:'var(--pw-ink-30)', letterSpacing:'0.06em' }}>{a.readTime} · {a.date}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── NEWSLETTER ── */}
        <section style={{ background:'var(--pw-midnight)', padding:'clamp(64px,7vw,96px) 32px' }}>
          {/* Pastel orbs */}
          <div style={{ position:'absolute', pointerEvents:'none', overflow:'hidden' }}>
            <div style={{ width:400, height:400, borderRadius:'50%', background:'var(--pw-sky)', filter:'blur(80px)', opacity:0.15 }} />
          </div>
          <div style={{ maxWidth:600, margin:'0 auto', textAlign:'center', position:'relative' }}>
            <div style={{ display:'inline-flex', alignItems:'center', gap:10, marginBottom:32 }}>
              <span style={{ display:'block', width:24, height:1, background:'rgba(255,255,255,0.20)' }} />
              <span style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.20em', textTransform:'uppercase', color:'rgba(255,255,255,0.40)' }}>Newsletter</span>
              <span style={{ display:'block', width:24, height:1, background:'rgba(255,255,255,0.20)' }} />
            </div>
            <h2 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(32px,5vw,52px)', fontWeight:700, color:'white', letterSpacing:'-0.03em', lineHeight:0.95, marginBottom:20 }}>
              The peptide<br/>
              <span style={{ background:'linear-gradient(135deg, #C8DEFA 0%, #DDD5F5 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
                therapy newsletter.
              </span>
            </h2>
            <p style={{ fontFamily:'var(--font-body)', fontSize:16, fontWeight:300, color:'rgba(255,255,255,0.45)', lineHeight:1.7, marginBottom:40 }}>
              Weekly insights on providers, research, and patient stories. Join 4,200+ subscribers.
            </p>
            <div style={{ borderRadius:16, overflow:'hidden', border:'1px solid rgba(255,255,255,0.10)' }}>
              <iframe
                src="https://subscribe-forms.beehiiv.com/8dd8f415-3964-424e-978e-535148fb610c"
                data-test-id="beehiiv-embed"
                width="100%"
                height="320"
                frameBorder={0}
                scrolling="no"
                style={{ display:'block', border:'none', maxWidth:'100%', margin:0, colorScheme:'dark' }}
              />
            </div>
            <p style={{ fontFamily:'var(--font-mono)', fontSize:11, color:'rgba(255,255,255,0.20)', marginTop:16, letterSpacing:'0.06em' }}>FREE FOREVER · UNSUBSCRIBE ANYTIME</p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}

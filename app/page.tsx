import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { providers, reviews, articles } from '@/lib/data'

function Stars({ rating, size = 14 }: { rating: number; size?: number }) {
  return (
    <span style={{ fontSize: size, letterSpacing: '-1px' }}>
      {[1,2,3,4,5].map(s => (
        <span key={s} style={{ color: s <= Math.floor(rating) ? '#F59E0B' : '#E5E7EB' }}>★</span>
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
  'Unverified compounding pharmacies',
  'No licensed clinician on staff',
  'Misleading before/after photos',
  'Hidden auto-renewal billing',
  'Counterfeit peptide sources',
  'No consultation required',
  'Unlicensed telehealth operations',
  'Impossible dosage claims',
]
const warningTicker = [...warnings, ...warnings, ...warnings, ...warnings]

export default function HomePage() {
  return (
    <>
      <Nav />
      <main style={{ background: '#fff' }}>

        {/* HERO */}
        <section style={{ padding: 'clamp(52px,8vw,96px) 24px clamp(40px,6vw,72px)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 32 }}>
              {['BPC-157', 'Sermorelin', 'TB-500', 'Ipamorelin', 'NAD+', 'PT-141'].map(tag => (
                <Link key={tag} href="/start" style={{
                  display: 'inline-block', padding: '6px 16px', borderRadius: 100,
                  border: '1.5px solid #E5E7EB', fontFamily: "'Sora', sans-serif",
                  fontSize: 12, fontWeight: 500, color: '#374151', textDecoration: 'none', letterSpacing: '0.01em',
                }}>{tag}</Link>
              ))}
            </div>
            <h1 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(44px, 7vw, 80px)', fontWeight: 700,
              color: '#0A0A0A', lineHeight: 1.04, letterSpacing: '-0.03em', marginBottom: 28, maxWidth: 800,
            }}>
              Compare peptide<br />therapy providers.
            </h1>
            <div className="hero-grid">
              <div>
                <p style={{
                  fontFamily: "'Sora', sans-serif", fontSize: 'clamp(15px, 2vw, 18px)',
                  color: '#6B7280', lineHeight: 1.7, marginBottom: 36, maxWidth: 480,
                }}>
                  Save time finding legitimate peptide therapy. Compare licensed telehealth providers, read verified patient reviews, and start with confidence.
                </p>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 40 }}>
                  <Link href="/start" style={{
                    background: '#0A0A0A', color: '#fff', fontFamily: "'Sora', sans-serif",
                    fontWeight: 600, fontSize: 15, padding: '14px 30px', borderRadius: 100,
                    textDecoration: 'none', letterSpacing: '-0.01em',
                  }}>Find providers →</Link>
                  <Link href="/providers" style={{
                    background: 'white', color: '#0A0A0A', fontFamily: "'Sora', sans-serif",
                    fontWeight: 600, fontSize: 15, padding: '14px 30px', borderRadius: 100,
                    textDecoration: 'none', border: '1.5px solid #E5E7EB', letterSpacing: '-0.01em',
                  }}>Compare all</Link>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{ display: 'flex' }}>
                    {['#6366F1','#10B981','#F59E0B','#EF4444','#8B5CF6'].map((c, i) => (
                      <div key={i} style={{
                        width: 30, height: 30, borderRadius: '50%', background: c,
                        border: '2px solid white', marginLeft: i > 0 ? -8 : 0,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 9, fontWeight: 700, color: 'white', fontFamily: "'Sora', sans-serif",
                      }}>{['MT','SK','JR','EC','DM'][i]}</div>
                    ))}
                  </div>
                  <div>
                    <Stars rating={5} size={11} />
                    <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 12, color: '#9CA3AF', marginTop: 1 }}>4.8 avg · 1,500+ verified patients</div>
                  </div>
                </div>
              </div>
              <div className="hero-visual" style={{ position: 'relative', height: 420 }}>
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(145deg, #F0FDF4 0%, #ECFDF5 60%, #F9FAFB 100%)',
                  borderRadius: 28, display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 80 }}>💉</div>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, color: '#064E3B', marginTop: 10, fontWeight: 700 }}>Peptide Therapy</div>
                    <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 13, color: '#6EE7B7', marginTop: 5 }}>Doctor-supervised protocols</div>
                  </div>
                </div>
                <div style={{
                  position: 'absolute', bottom: 24, left: -18, background: 'white', borderRadius: 18,
                  padding: '16px 20px', boxShadow: '0 12px 40px rgba(0,0,0,0.1)', border: '1px solid #F3F4F6',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 38, height: 38, borderRadius: 10, background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, color: '#3B82F6', fontFamily: "'Sora', sans-serif" }}>AL</div>
                    <div>
                      <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 13, fontWeight: 700, color: '#0A0A0A' }}>Alpha Longevity</div>
                      <Stars rating={5} size={11} />
                    </div>
                  </div>
                  <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 11, color: '#10B981', fontWeight: 600, marginTop: 7 }}>🎉 20% OFF first order</div>
                </div>
                <div style={{
                  position: 'absolute', top: 24, right: -14, background: '#0A0A0A', borderRadius: 16,
                  padding: '14px 18px', boxShadow: '0 8px 28px rgba(0,0,0,0.2)',
                }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, color: 'white', fontWeight: 700, lineHeight: 1 }}>50+</div>
                  <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 10, color: '#9CA3AF', marginTop: 2 }}>Verified providers</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRESS MARQUEE */}
        <div style={{ borderTop: '1px solid #F3F4F6', borderBottom: '1px solid #F3F4F6', padding: '22px 0', overflow: 'hidden', position: 'relative' }}>
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 100, background: 'linear-gradient(to right, white 20%, transparent)', zIndex: 2, pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 100, background: 'linear-gradient(to left, white 20%, transparent)', zIndex: 2, pointerEvents: 'none' }} />
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ flexShrink: 0, padding: '0 36px 0 28px', fontFamily: "'Sora', sans-serif", fontSize: 10, fontWeight: 700, color: '#D1D5DB', textTransform: 'uppercase', letterSpacing: '0.14em', whiteSpace: 'nowrap', zIndex: 3 }}>
              Mentioned in
            </div>
            <div style={{ overflow: 'hidden', flex: 1 }}>
              <div className="press-marquee" style={{ display: 'flex', alignItems: 'center', gap: 60, width: 'max-content' }}>
                {marqueeLogos.map((logo, i) => (
                  <span key={i} style={{
                    fontFamily: logo.font, fontWeight: logo.weight, fontSize: logo.size,
                    letterSpacing: logo.spacing, fontStyle: logo.style,
                    color: '#C4CAD4', whiteSpace: 'nowrap', userSelect: 'none',
                  }}>
                    {logo.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <style>{`
            .press-marquee { animation: pressScroll 36s linear infinite; }
            .press-marquee:hover { animation-play-state: paused; }
            @keyframes pressScroll { 0% { transform: translateX(0); } 100% { transform: translateX(-25%); } }
          `}</style>
        </div>

        {/* TREATMENT CATEGORIES */}
        <section style={{ padding: 'clamp(56px,7vw,88px) 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ marginBottom: 40 }}>
              <p style={{ fontFamily: "'Sora', sans-serif", fontSize: 11, fontWeight: 700, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: 12 }}>Find treatment</p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4.5vw, 46px)', color: '#0A0A0A', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.1 }}>
                Find doctor-trusted<br />treatment options.
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16 }}>
              {[
                { name: 'BPC-157',    sub: 'Healing & recovery',  color: '#EFF6FF', accent: '#3B82F6', emoji: '🩹', price: 'from $89/mo'  },
                { name: 'Sermorelin', sub: 'HGH stimulation',     color: '#F0FDF4', accent: '#10B981', emoji: '📈', price: 'from $149/mo' },
                { name: 'TB-500',     sub: 'Tissue repair',       color: '#FDF4FF', accent: '#A855F7', emoji: '💪', price: 'from $119/mo' },
                { name: 'Ipamorelin', sub: 'Anti-aging & sleep',  color: '#FFFBEB', accent: '#F59E0B', emoji: '🌙', price: 'from $129/mo' },
                { name: 'NAD+',       sub: 'Energy & longevity',  color: '#FFF1F2', accent: '#F43F5E', emoji: '⚡', price: 'from $199/mo' },
                { name: 'PT-141',     sub: 'Sexual health',       color: '#FFF7ED', accent: '#EA580C', emoji: '❤️', price: 'from $99/mo'  },
              ].map(t => (
                <Link key={t.name} href="/start" style={{ textDecoration: 'none' }}>
                  <div style={{ background: t.color, borderRadius: 20, padding: '24px 20px 20px' }}>
                    <div style={{ fontSize: 32, marginBottom: 12 }}>{t.emoji}</div>
                    <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 15, color: '#0A0A0A', marginBottom: 3 }}>{t.name}</div>
                    <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 12, color: '#6B7280', marginBottom: 10 }}>{t.sub}</div>
                    <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 12, fontWeight: 600, color: t.accent }}>{t.price}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* TRUST TRIO */}
        <section style={{ background: '#F9FAFB', padding: 'clamp(56px,7vw,88px) 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ marginBottom: 48 }}>
              <p style={{ fontFamily: "'Sora', sans-serif", fontSize: 11, fontWeight: 700, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: 12 }}>Why us</p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4.5vw, 46px)', color: '#0A0A0A', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.1 }}>
                Choose care<br />you can trust.
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
              {[
                { icon: '🏥', label: 'Trusted providers',    body: 'Medications prescribed by licensed clinicians and filled by licensed pharmacies.', cta: 'Find a provider', href: '/start' },
                { icon: '🔬', label: 'Transparent sourcing', body: 'See compounding pharmacies used and verify their licensing and accreditation.', cta: 'Browse providers', href: '/providers' },
                { icon: '⭐', label: 'Real patient reviews',  body: 'Learn about customer experiences — not just results, but shipping, support, and pricing too.', cta: 'Read reviews', href: '/reviews' },
              ].map(card => (
                <div key={card.label} style={{ background: 'white', borderRadius: 20, padding: '32px 28px', border: '1px solid #F3F4F6' }}>
                  <div style={{ fontSize: 36, marginBottom: 18 }}>{card.icon}</div>
                  <h3 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 17, color: '#0A0A0A', marginBottom: 10 }}>{card.label}</h3>
                  <p style={{ fontFamily: "'Sora', sans-serif", fontSize: 14, color: '#6B7280', lineHeight: 1.7, marginBottom: 20 }}>{card.body}</p>
                  <Link href={card.href} style={{ fontFamily: "'Sora', sans-serif", fontSize: 13, fontWeight: 600, color: '#0A0A0A', textDecoration: 'none' }}>{card.cta} →</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WARNING TICKER — red scrolling "avoid sketchy providers" bar */}
        <div style={{ background: '#0A0A0A', padding: '18px 0', overflow: 'hidden', position: 'relative' }}>
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 120, background: 'linear-gradient(to right, #0A0A0A, transparent)', zIndex: 2, pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 120, background: 'linear-gradient(to left, #0A0A0A, transparent)', zIndex: 2, pointerEvents: 'none' }} />
          <div style={{ overflow: 'hidden' }}>
            <div className="warning-marquee" style={{ display: 'flex', alignItems: 'center', width: 'max-content' }}>
              {warningTicker.map((w, i) => (
                <span key={i} style={{ fontFamily: "'Sora', sans-serif", fontSize: 13, fontWeight: 600, color: '#EF4444', whiteSpace: 'nowrap', padding: '0 36px' }}>
                  ✕ {w}
                </span>
              ))}
            </div>
          </div>
          <style>{`
            .warning-marquee { animation: warnScroll 40s linear infinite; }
            @keyframes warnScroll { 0% { transform: translateX(0); } 100% { transform: translateX(-25%); } }
          `}</style>
        </div>

        {/* HOW IT WORKS */}
        <section style={{ padding: 'clamp(56px,7vw,88px) 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 16 }}>
              <div>
                <p style={{ fontFamily: "'Sora', sans-serif", fontSize: 11, fontWeight: 700, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: 12 }}>How it works</p>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4.5vw, 46px)', color: '#0A0A0A', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.1 }}>
                  Start treatment<br />in 3 steps.
                </h2>
              </div>
              <Link href="/start" style={{ background: '#0A0A0A', color: 'white', fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: 14, padding: '13px 26px', borderRadius: 100, textDecoration: 'none' }}>Get started →</Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 48 }}>
              {[
                { num: '01', title: 'Tell us your goals',  body: 'Answer a few quick questions about what you want to achieve with peptide therapy.' },
                { num: '02', title: 'Compare providers',   body: 'Side-by-side pricing, reviews, and pharmacy sourcing for every licensed provider.' },
                { num: '03', title: 'Start your protocol', body: 'Complete your online consultation and receive peptides shipped directly to your door.' },
              ].map(step => (
                <div key={step.num} style={{ borderTop: '1px solid #E5E7EB', paddingTop: 24 }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 72, fontWeight: 700, color: '#F3F4F6', lineHeight: 1, marginBottom: 8 }}>{step.num}</div>
                  <h3 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 18, color: '#0A0A0A', marginBottom: 10 }}>{step.title}</h3>
                  <p style={{ fontFamily: "'Sora', sans-serif", fontSize: 14, color: '#6B7280', lineHeight: 1.7 }}>{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TOP PROVIDERS — list rows */}
        <section style={{ background: '#F9FAFB', padding: 'clamp(56px,7vw,88px) 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 36, flexWrap: 'wrap', gap: 16 }}>
              <div>
                <p style={{ fontFamily: "'Sora', sans-serif", fontSize: 11, fontWeight: 700, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: 12 }}>Top providers</p>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4.5vw, 46px)', color: '#0A0A0A', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.1 }}>
                  Responsive care,<br />fast shipping.
                </h2>
              </div>
              <Link href="/providers" style={{ fontFamily: "'Sora', sans-serif", fontSize: 14, fontWeight: 600, color: '#6B7280', textDecoration: 'none' }}>See all providers →</Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {providers.slice(0, 5).map((p, i) => (
                <div key={p.slug} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '20px 24px', background: 'white',
                  borderRadius: i === 0 ? '16px 16px 0 0' : i === 4 ? '0 0 16px 16px' : 0,
                  borderBottom: i < 4 ? '1px solid #F3F4F6' : 'none',
                  flexWrap: 'wrap', gap: 12,
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16, minWidth: 0 }}>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: '#E5E7EB', width: 28, flexShrink: 0 }}>{i+1}</div>
                    <div style={{
                      width: 42, height: 42, borderRadius: 12, flexShrink: 0,
                      background: ['#EFF6FF','#F0FDF4','#FDF4FF','#FFFBEB','#FFF1F2'][i],
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 13,
                      color: ['#3B82F6','#10B981','#A855F7','#F59E0B','#F43F5E'][i],
                    }}>{p.name.slice(0,2).toUpperCase()}</div>
                    <div>
                      <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 15, color: '#0A0A0A' }}>{p.name}</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 2 }}>
                        <Stars rating={p.rating} size={11} />
                        <span style={{ fontFamily: "'Sora', sans-serif", fontSize: 12, color: '#9CA3AF' }}>{p.rating} · {p.reviewCount} reviews</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
                    <div>
                      <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 13, fontWeight: 700, color: '#0A0A0A' }}>${p.priceFrom}/mo</div>
                      <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 11, color: '#9CA3AF' }}>per month</div>
                    </div>
                    {p.badge && (
                      <span style={{ background: '#F0FDF4', color: '#15803D', fontFamily: "'Sora', sans-serif", fontSize: 10, fontWeight: 700, padding: '4px 10px', borderRadius: 100, letterSpacing: '0.04em' }}>{p.badge}</span>
                    )}
                    <Link href={`/providers/${p.slug}`} style={{ background: '#0A0A0A', color: 'white', fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: 13, padding: '10px 20px', borderRadius: 100, textDecoration: 'none', whiteSpace: 'nowrap' }}>View deal</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section style={{ padding: 'clamp(56px,7vw,88px) 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 36, flexWrap: 'wrap', gap: 16 }}>
              <div>
                <p style={{ fontFamily: "'Sora', sans-serif", fontSize: 11, fontWeight: 700, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: 12 }}>Real reviews</p>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4.5vw, 46px)', color: '#0A0A0A', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.1 }}>
                  Help thousands make<br />the right choice.
                </h2>
              </div>
              <Link href="/reviews" style={{ fontFamily: "'Sora', sans-serif", fontSize: 14, fontWeight: 600, color: '#6B7280', textDecoration: 'none' }}>Write a review →</Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 14 }}>
              {reviews.slice(0, 6).map((r, i) => (
                <div key={i} style={{ background: '#F9FAFB', borderRadius: 18, padding: 24, border: '1px solid #F3F4F6' }}>
                  <Stars rating={r.rating} size={13} />
                  <p style={{ fontFamily: "'Sora', sans-serif", fontSize: 14, color: '#374151', lineHeight: 1.7, margin: '12px 0 16px' }}>"{r.text}"</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#0A0A0A', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700, fontFamily: "'Sora', sans-serif", flexShrink: 0 }}>{r.avatar}</div>
                    <div>
                      <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 13, fontWeight: 600, color: '#0A0A0A' }}>{r.name}</div>
                      <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 11, color: '#9CA3AF' }}>{r.location}</div>
                    </div>
                    <span style={{ marginLeft: 'auto', background: '#F0FDF4', color: '#15803D', fontSize: 10, fontWeight: 700, padding: '3px 10px', borderRadius: 100, fontFamily: "'Sora', sans-serif", whiteSpace: 'nowrap' }}>{r.peptide}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BLOG */}
        <section style={{ background: '#F9FAFB', padding: 'clamp(56px,7vw,88px) 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 36, flexWrap: 'wrap', gap: 16 }}>
              <div>
                <p style={{ fontFamily: "'Sora', sans-serif", fontSize: 11, fontWeight: 700, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: 12 }}>Peptide insights</p>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4.5vw, 46px)', color: '#0A0A0A', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.1 }}>
                  Evidence-based<br />research.
                </h2>
              </div>
              <Link href="/insights" style={{ fontFamily: "'Sora', sans-serif", fontSize: 14, fontWeight: 600, color: '#6B7280', textDecoration: 'none' }}>Read all →</Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 18 }}>
              {articles.map(a => (
                <Link key={a.slug} href={`/insights/${a.slug}`} style={{ textDecoration: 'none' }}>
                  <div style={{ borderRadius: 18, overflow: 'hidden', border: '1px solid #F3F4F6', background: 'white' }}>
                    <img src={a.image} alt={a.title} style={{ width: '100%', height: 180, objectFit: 'cover', display: 'block' }} />
                    <div style={{ padding: '20px 22px' }}>
                      <span style={{ fontFamily: "'Sora', sans-serif", fontSize: 10, fontWeight: 700, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.12em' }}>{a.category}</span>
                      <h3 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 15, color: '#0A0A0A', margin: '8px 0 6px', lineHeight: 1.45 }}>{a.title}</h3>
                      <p style={{ fontFamily: "'Sora', sans-serif", fontSize: 12, color: '#9CA3AF' }}>{a.readTime} · {a.date}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* NEWSLETTER */}
        <section style={{ background: '#0A0A0A', padding: 'clamp(56px,7vw,88px) 24px' }}>
          <div style={{ maxWidth: 540, margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4.5vw, 46px)', color: 'white', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.1, marginBottom: 18 }}>
              The peptide therapy<br />newsletter.
            </h2>
            <p style={{ fontFamily: "'Sora', sans-serif", fontSize: 16, color: '#6B7280', lineHeight: 1.7, marginBottom: 32 }}>
              Weekly insights on providers, research, and patient stories. No spam, ever.
            </p>
            <div style={{ display: 'flex', gap: 8, maxWidth: 420, margin: '0 auto', flexWrap: 'wrap' }}>
              <input type="email" placeholder="Your email address" style={{
                flex: 1, minWidth: 180, height: 50, borderRadius: 100,
                border: '1px solid #374151', background: '#141414',
                padding: '0 20px', fontFamily: "'Sora', sans-serif", fontSize: 14, color: 'white', outline: 'none',
              }} />
              <button style={{
                height: 50, borderRadius: 100, background: 'white', color: '#0A0A0A',
                fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 14,
                padding: '0 24px', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap',
              }}>Subscribe</button>
            </div>
            <p style={{ fontFamily: "'Sora', sans-serif", fontSize: 12, color: '#4B5563', marginTop: 14 }}>4,200+ subscribers · Free forever</p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}

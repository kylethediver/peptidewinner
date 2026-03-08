import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { providers, reviews, articles } from '@/lib/data'

function Stars({ rating, size = 14 }: { rating: number; size?: number }) {
  return (
    <span style={{ fontSize: size, letterSpacing: '-1px' }}>
      {[1,2,3,4,5].map(s => (
        <span key={s} style={{ color: s <= Math.floor(rating) ? '#F59E0B' : '#D1D5DB' }}>★</span>
      ))}
    </span>
  )
}

export default function HomePage() {
  return (
    <>
      <Nav />
      <main style={{ background: '#fff' }}>

        {/* ── HERO ── */}
        <section style={{ padding: 'clamp(40px,6vw,80px) 20px clamp(32px,5vw,64px)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div className="hero-grid">
              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
                  {['BPC-157', 'Sermorelin', 'TB-500', 'Ipamorelin', 'NAD+', 'PT-141'].map(tag => (
                    <Link key={tag} href={`/start`} style={{
                      display: 'inline-block', padding: '7px 16px', borderRadius: 100,
                      border: '1.5px solid #E5E7EB', fontFamily: "'Sora', sans-serif",
                      fontSize: 13, fontWeight: 500, color: '#374151', textDecoration: 'none',
                    }}>{tag}</Link>
                  ))}
                </div>

                <h1 style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: 'clamp(36px, 5.5vw, 64px)', fontWeight: 700,
                  color: '#0A0A0A', lineHeight: 1.08, letterSpacing: '-0.025em', marginBottom: 20,
                }}>
                  Compare peptide<br />therapy providers.
                </h1>

                <p style={{
                  fontFamily: "'Sora', sans-serif", fontSize: 'clamp(15px,2vw,17px)',
                  color: '#6B7280', lineHeight: 1.65, marginBottom: 32, maxWidth: 480,
                }}>
                  Save time finding legitimate peptide therapy. Compare licensed telehealth providers, read verified patient reviews, and start with confidence.
                </p>

                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 36 }}>
                  <Link href="/start" style={{
                    background: '#0A0A0A', color: '#fff', fontFamily: "'Sora', sans-serif",
                    fontWeight: 600, fontSize: 15, padding: '13px 28px',
                    borderRadius: 100, textDecoration: 'none',
                  }}>Find providers →</Link>
                  <Link href="/providers" style={{
                    background: '#F9FAFB', color: '#0A0A0A', fontFamily: "'Sora', sans-serif",
                    fontWeight: 600, fontSize: 15, padding: '13px 28px',
                    borderRadius: 100, textDecoration: 'none', border: '1.5px solid #E5E7EB',
                  }}>Compare all</Link>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ display: 'flex' }}>
                    {['#6366F1','#10B981','#F59E0B','#EF4444','#8B5CF6'].map((c, i) => (
                      <div key={i} style={{
                        width: 28, height: 28, borderRadius: '50%', background: c,
                        border: '2px solid white', marginLeft: i > 0 ? -7 : 0,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 9, fontWeight: 700, color: 'white', fontFamily: "'Sora', sans-serif",
                      }}>{['MT','SK','JR','EC','DM'][i]}</div>
                    ))}
                  </div>
                  <div>
                    <Stars rating={5} size={11} />
                    <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 12, color: '#9CA3AF' }}>4.8 · 1,500+ verified patients</div>
                  </div>
                </div>
              </div>

              {/* Right panel — hidden on mobile via CSS */}
              <div className="hero-visual" style={{ position: 'relative', height: 420 }}>
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(145deg, #F0FDF4, #ECFDF5)',
                  borderRadius: 28, display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 72 }}>💉</div>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, color: '#064E3B', marginTop: 8 }}>Peptide Therapy</div>
                    <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 13, color: '#6EE7B7', marginTop: 4 }}>Doctor-supervised protocols</div>
                  </div>
                </div>
                <div style={{
                  position: 'absolute', bottom: 20, left: -16,
                  background: 'white', borderRadius: 16, padding: '14px 18px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)', border: '1px solid #F3F4F6',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, color: '#3B82F6', fontFamily: "'Sora', sans-serif" }}>AL</div>
                    <div>
                      <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 13, fontWeight: 700, color: '#0A0A0A' }}>Alpha Longevity</div>
                      <Stars rating={5} size={11} />
                    </div>
                  </div>
                  <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 11, color: '#10B981', fontWeight: 600, marginTop: 6 }}>🎉 20% OFF first order</div>
                </div>
                <div style={{
                  position: 'absolute', top: 20, right: -12,
                  background: '#0A0A0A', borderRadius: 14, padding: '12px 16px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, color: 'white', fontWeight: 700 }}>50+</div>
                  <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 10, color: '#9CA3AF' }}>Verified providers</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PRESS BAR ── */}
        <div style={{ borderTop: '1px solid #F3F4F6', borderBottom: '1px solid #F3F4F6', padding: '18px 20px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap', justifyContent: 'center' }}>
            <span style={{ fontFamily: "'Sora', sans-serif", fontSize: 10, fontWeight: 700, color: '#D1D5DB', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Mentioned in</span>
            {['Healthline', "Men's Health", 'Forbes Health', 'Muscle & Fitness', 'Well+Good'].map(pub => (
              <span key={pub} style={{ fontFamily: "'Sora', sans-serif", fontSize: 13, fontWeight: 700, color: '#D1D5DB' }}>{pub}</span>
            ))}
          </div>
        </div>

        {/* ── GOAL CATEGORIES ── */}
        <section style={{ padding: 'clamp(48px,6vw,80px) 20px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ marginBottom: 32 }}>
              <p style={{ fontFamily: "'Sora', sans-serif", fontSize: 11, fontWeight: 700, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 10 }}>Find treatment</p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px,4vw,38px)', color: '#0A0A0A', fontWeight: 700, letterSpacing: '-0.02em' }}>What are your goals?</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: 10 }}>
              {[
                { label: 'Recovery', icon: '🩹', desc: 'BPC-157, TB-500', color: '#FEF3C7' },
                { label: 'Anti-Aging', icon: '⏳', desc: 'Sermorelin, NAD+', color: '#EDE9FE' },
                { label: 'Weight Loss', icon: '⚖️', desc: 'Semaglutide', color: '#DCFCE7' },
                { label: 'Performance', icon: '⚡', desc: 'CJC-1295', color: '#DBEAFE' },
                { label: 'Sleep', icon: '🌙', desc: 'DSIP, Epitalon', color: '#FEE2E2' },
                { label: 'Sexual Health', icon: '❤️', desc: 'PT-141', color: '#FCE7F3' },
              ].map(cat => (
                <Link key={cat.label} href="/start" style={{ textDecoration: 'none' }}>
                  <div style={{ background: cat.color, borderRadius: 18, padding: '22px 18px' }}>
                    <div style={{ fontSize: 26, marginBottom: 8 }}>{cat.icon}</div>
                    <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 14, color: '#0A0A0A', marginBottom: 3 }}>{cat.label}</div>
                    <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 11, color: '#6B7280' }}>{cat.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROVIDER LIST ── */}
        <section style={{ padding: '0 20px clamp(48px,6vw,80px)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 24, flexWrap: 'wrap', gap: 10 }}>
              <div>
                <p style={{ fontFamily: "'Sora', sans-serif", fontSize: 11, fontWeight: 700, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 10 }}>Verified providers</p>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px,4vw,38px)', color: '#0A0A0A', fontWeight: 700, letterSpacing: '-0.02em' }}>Trusted by thousands.</h2>
              </div>
              <Link href="/providers" style={{ fontFamily: "'Sora', sans-serif", fontSize: 14, fontWeight: 600, color: '#6B7280', textDecoration: 'none' }}>See all →</Link>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {providers.slice(0, 5).map((p, i) => (
                <Link key={p.id} href={`/providers/${p.slug}`} style={{ textDecoration: 'none' }}>
                  <div style={{
                    display: 'grid', gridTemplateColumns: '44px 1fr auto',
                    alignItems: 'center', gap: 14, padding: '18px 20px',
                    borderRadius: 14, background: i === 0 ? '#F9FAFB' : 'white',
                    border: `1px solid ${i === 0 ? '#E5E7EB' : 'transparent'}`,
                  }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: 11, background: p.color + '18',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 11, color: p.color,
                    }}>{p.logo}</div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap', marginBottom: 3 }}>
                        <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 14, color: '#0A0A0A' }}>{p.name}</span>
                        {p.featured && <span style={{ background: '#FEF3C7', color: '#92400E', fontSize: 9, fontWeight: 700, padding: '2px 7px', borderRadius: 100, fontFamily: "'Sora', sans-serif" }}>{p.badge}</span>}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
                        <Stars rating={p.rating} size={11} />
                        <span style={{ fontFamily: "'Sora', sans-serif", fontSize: 11, color: '#9CA3AF' }}>{p.rating} · {p.peptides.slice(0,2).join(', ')}</span>
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 16, color: '#0A0A0A' }}>${p.priceFrom}<span style={{ fontSize: 11, fontWeight: 400, color: '#9CA3AF' }}>/mo</span></div>
                      <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 11, color: '#10B981', fontWeight: 600, marginTop: 2 }}>View deal →</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: 20 }}>
              <Link href="/providers" style={{
                fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: 14,
                color: '#0A0A0A', textDecoration: 'none', padding: '12px 28px',
                border: '1.5px solid #E5E7EB', borderRadius: 100, display: 'inline-block',
              }}>Compare all {providers.length} providers</Link>
            </div>
          </div>
        </section>

        {/* ── TRUST DARK ── */}
        <section style={{ background: '#0A0A0A', padding: 'clamp(48px,6vw,80px) 20px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <p style={{ fontFamily: "'Sora', sans-serif", fontSize: 11, fontWeight: 700, color: '#4B5563', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 10 }}>Why PeptideWinner</p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px,4vw,40px)', color: 'white', fontWeight: 700, letterSpacing: '-0.02em' }}>Choose care you can trust.</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 1, borderRadius: 20, overflow: 'hidden' }}>
              {[
                { icon: '🔬', title: 'Trusted providers', body: 'Prescribed by licensed clinicians, filled by licensed pharmacies.' },
                { icon: '🏥', title: 'Transparent sourcing', body: 'See which compounding pharmacies are used and verify their licensing.' },
                { icon: '⭐', title: 'Real patient reviews', body: 'Verified reviews from real patients — not marketing copy.' },
                { icon: '🛡️', title: 'No pay-to-rank', body: 'Providers cannot pay for better rankings. Ever.' },
              ].map(t => (
                <div key={t.title} style={{ background: '#141414', padding: '28px 24px' }}>
                  <div style={{ fontSize: 24, marginBottom: 12 }}>{t.icon}</div>
                  <h3 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 15, color: 'white', marginBottom: 6 }}>{t.title}</h3>
                  <p style={{ fontFamily: "'Sora', sans-serif", fontSize: 13, color: '#6B7280', lineHeight: 1.6 }}>{t.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section style={{ padding: 'clamp(48px,6vw,80px) 20px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <p style={{ fontFamily: "'Sora', sans-serif", fontSize: 11, fontWeight: 700, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 10 }}>How it works</p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px,4vw,40px)', color: '#0A0A0A', fontWeight: 700, letterSpacing: '-0.02em' }}>Start treatment in 3 steps.</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 40 }}>
              {[
                { num: '01', title: 'Tell us your goals', body: 'Answer a few quick questions about what you want to achieve.', href: '/start' },
                { num: '02', title: 'Compare providers', body: 'Side-by-side pricing, reviews, and pharmacy sourcing for every provider.', href: '/providers' },
                { num: '03', title: 'Start your protocol', body: 'Complete your online consultation and receive peptides at your door.', href: '/providers' },
              ].map(step => (
                <div key={step.num}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 64, fontWeight: 700, color: '#F3F4F6', lineHeight: 1, marginBottom: 4 }}>{step.num}</div>
                  <h3 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 17, color: '#0A0A0A', marginBottom: 8 }}>{step.title}</h3>
                  <p style={{ fontFamily: "'Sora', sans-serif", fontSize: 14, color: '#6B7280', lineHeight: 1.65, marginBottom: 14 }}>{step.body}</p>
                  <Link href={step.href} style={{ fontFamily: "'Sora', sans-serif", fontSize: 13, fontWeight: 600, color: '#0A0A0A', textDecoration: 'none' }}>Get started →</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── REVIEWS ── */}
        <section style={{ background: '#F9FAFB', padding: 'clamp(48px,6vw,80px) 20px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 32, flexWrap: 'wrap', gap: 12 }}>
              <div>
                <p style={{ fontFamily: "'Sora', sans-serif", fontSize: 11, fontWeight: 700, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 10 }}>Real reviews</p>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px,4vw,38px)', color: '#0A0A0A', fontWeight: 700, letterSpacing: '-0.02em' }}>Help thousands make the right choice.</h2>
              </div>
              <Link href="/reviews" style={{ fontFamily: "'Sora', sans-serif", fontSize: 14, fontWeight: 600, color: '#6B7280', textDecoration: 'none' }}>Write a review →</Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))', gap: 14 }}>
              {reviews.slice(0, 6).map((r, i) => (
                <div key={i} style={{ background: 'white', borderRadius: 16, padding: 22, border: '1px solid #F3F4F6' }}>
                  <Stars rating={r.rating} size={12} />
                  <p style={{ fontFamily: "'Sora', sans-serif", fontSize: 13, color: '#374151', lineHeight: 1.65, margin: '10px 0 14px' }}>"{r.text}"</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 30, height: 30, borderRadius: '50%', background: '#0A0A0A', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 700, fontFamily: "'Sora', sans-serif", flexShrink: 0 }}>{r.avatar}</div>
                    <div>
                      <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 12, fontWeight: 600, color: '#0A0A0A' }}>{r.name}</div>
                      <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 11, color: '#9CA3AF' }}>{r.location}</div>
                    </div>
                    <span style={{ marginLeft: 'auto', background: '#F0FDF4', color: '#15803D', fontSize: 9, fontWeight: 700, padding: '2px 8px', borderRadius: 100, fontFamily: "'Sora', sans-serif" }}>{r.peptide}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BLOG ── */}
        <section style={{ padding: 'clamp(48px,6vw,80px) 20px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 32, flexWrap: 'wrap', gap: 12 }}>
              <div>
                <p style={{ fontFamily: "'Sora', sans-serif", fontSize: 11, fontWeight: 700, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 10 }}>Peptide insights</p>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px,4vw,38px)', color: '#0A0A0A', fontWeight: 700, letterSpacing: '-0.02em' }}>Evidence-based research.</h2>
              </div>
              <Link href="/insights" style={{ fontFamily: "'Sora', sans-serif", fontSize: 14, fontWeight: 600, color: '#6B7280', textDecoration: 'none' }}>Read all →</Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
              {articles.map(a => (
                <Link key={a.slug} href={`/insights/${a.slug}`} style={{ textDecoration: 'none' }}>
                  <div style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid #F3F4F6' }}>
                    <img src={a.image} alt={a.title} style={{ width: '100%', height: 170, objectFit: 'cover', display: 'block' }} />
                    <div style={{ padding: 18 }}>
                      <span style={{ fontFamily: "'Sora', sans-serif", fontSize: 10, fontWeight: 700, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{a.category}</span>
                      <h3 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 14, color: '#0A0A0A', margin: '7px 0 5px', lineHeight: 1.4 }}>{a.title}</h3>
                      <p style={{ fontFamily: "'Sora', sans-serif", fontSize: 12, color: '#9CA3AF' }}>{a.readTime} · {a.date}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── NEWSLETTER ── */}
        <section style={{ background: '#0A0A0A', padding: 'clamp(48px,6vw,80px) 20px' }}>
          <div style={{ maxWidth: 520, margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px,4vw,38px)', color: 'white', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 14 }}>
              The peptide therapy newsletter.
            </h2>
            <p style={{ fontFamily: "'Sora', sans-serif", fontSize: 15, color: '#6B7280', lineHeight: 1.65, marginBottom: 28 }}>
              Weekly insights on providers, research, and patient stories. No spam.
            </p>
            <div style={{ display: 'flex', gap: 8, maxWidth: 400, margin: '0 auto', flexWrap: 'wrap' }}>
              <input type="email" placeholder="Your email" style={{
                flex: 1, minWidth: 180, height: 46, borderRadius: 100,
                border: '1px solid #374151', background: '#141414',
                padding: '0 18px', fontFamily: "'Sora', sans-serif",
                fontSize: 14, color: 'white', outline: 'none',
              }} />
              <button style={{
                height: 46, borderRadius: 100, background: 'white', color: '#0A0A0A',
                fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 14,
                padding: '0 22px', border: 'none', cursor: 'pointer',
              }}>Subscribe</button>
            </div>
            <p style={{ fontFamily: "'Sora', sans-serif", fontSize: 12, color: '#4B5563', marginTop: 10 }}>4,200+ subscribers · Free forever</p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}

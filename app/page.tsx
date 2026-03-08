import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ProviderCard from '@/components/ProviderCard'
import { providers, reviews, articles } from '@/lib/data'

function Stars({ rating }: { rating: number }) {
  return (
    <span>
      {[1,2,3,4,5].map(s => (
        <span key={s} style={{ color: '#F59E0B', fontSize: 14 }}>{s <= Math.floor(rating) ? '★' : '☆'}</span>
      ))}
    </span>
  )
}

function ReviewCard({ review }: { review: typeof reviews[0] }) {
  return (
    <div style={{
      width: 300, flexShrink: 0, background: 'white',
      border: '1px solid #E2E8F0', borderRadius: 16, padding: 20,
    }}>
      <Stars rating={review.rating} />
      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#374151', lineHeight: 1.55, margin: '8px 0 14px' }}>
        "{review.text}"
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#0EA5E9', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 700, flexShrink: 0 }}>
          {review.avatar}
        </div>
        <div>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 600, color: '#0F172A' }}>{review.name}</div>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: '#9CA3AF' }}>{review.location} · {review.peptide}</div>
        </div>
      </div>
    </div>
  )
}

export default function HomePage() {
  const row1 = [...reviews, ...reviews]
  const row2 = [...reviews.slice().reverse(), ...reviews.slice().reverse()]

  return (
    <>
      <Nav />
      <main>

        {/* ── HERO ── */}
        <section style={{ background: 'white', padding: '80px 24px 72px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#F0F9FF', border: '1px solid #BAE6FD', borderRadius: 100, padding: '6px 16px', marginBottom: 20 }}>
                <span style={{ width: 8, height: 8, background: '#10B981', borderRadius: '50%', display: 'inline-block' }} />
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 500, color: '#0369A1' }}>Trusted by thousands of patients</span>
              </div>

              <h1 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 'clamp(36px, 4vw, 54px)', color: '#0F172A', lineHeight: 1.15, marginBottom: 20 }}>
                Compare peptide therapy<br />providers you can trust.
              </h1>

              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 17, color: '#374151', lineHeight: 1.65, marginBottom: 32, maxWidth: 520 }}>
                Save time and money finding legitimate peptide therapy. Compare licensed telehealth providers, read real patient reviews, and verify pharmacy sourcing — all in one place.
              </p>

              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 32 }}>
                <Link href="/start" className="btn-primary" style={{ fontSize: 16, padding: '14px 28px' }}>Find My Provider →</Link>
                <Link href="/providers" className="btn-secondary" style={{ fontSize: 16, padding: '14px 28px' }}>Compare All Providers</Link>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ display: 'flex' }}>
                  {['#0EA5E9','#059669','#7C3AED','#D97706','#DC2626'].map((color, i) => (
                    <div key={i} style={{ width: 32, height: 32, borderRadius: '50%', background: color, border: '2px solid white', marginLeft: i > 0 ? -8 : 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700, color: 'white', fontFamily: "'Inter', sans-serif" }}>
                      {['MT','SK','JR','EC','DM'][i]}
                    </div>
                  ))}
                </div>
                <div>
                  <div><Stars rating={5} /></div>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#6B7280' }}>4.8 avg from 1,500+ verified patients</span>
                </div>
              </div>
            </div>

            {/* Right panel */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ background: '#F8FAFC', borderRadius: 20, padding: 24, border: '1px solid #E2E8F0' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                  <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: 14, fontWeight: 700, color: '#0F172A' }}>Top Provider Match</span>
                  <span className="verified-badge">✓ Verified</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: '#E0F2FE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Manrope', sans-serif", fontWeight: 700, color: '#0EA5E9', fontSize: 14 }}>AL</div>
                  <div>
                    <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 15, color: '#0F172A' }}>Alpha Longevity Health</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 2 }}>
                      <Stars rating={5} />
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#6B7280' }}>4.9 (312)</span>
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 16 }}>
                  {['BPC-157', 'TB-500', 'Sermorelin'].map(p => (
                    <span key={p} style={{ background: '#F0F9FF', color: '#0369A1', fontSize: 11, fontWeight: 600, padding: '3px 10px', borderRadius: 100, fontFamily: "'Inter', sans-serif" }}>{p}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: 22, color: '#0F172A' }}>$149<span style={{ fontSize: 13, fontWeight: 400, color: '#9CA3AF', fontFamily: "'Inter', sans-serif" }}>/mo</span></span>
                  <Link href="/providers/alpha-longevity" className="btn-primary" style={{ fontSize: 12, padding: '8px 16px' }}>View Deal</Link>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {[{ v: '50+', l: 'Verified Providers', i: '🏥' }, { v: '1,500+', l: 'Patient Reviews', i: '⭐' }, { v: '12+', l: 'Peptides Covered', i: '💉' }, { v: '$89', l: 'Starting From', i: '💰' }].map(s => (
                  <div key={s.l} style={{ background: 'white', border: '1px solid #E2E8F0', borderRadius: 12, padding: 16, textAlign: 'center' }}>
                    <div style={{ fontSize: 20 }}>{s.i}</div>
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: 18, color: '#0F172A' }}>{s.v}</div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: '#9CA3AF', marginTop: 2 }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── TRUST BAR ── */}
        <section style={{ background: '#F8FAFC', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0', padding: '28px 24px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 32, flexWrap: 'wrap', justifyContent: 'center' }}>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 500, color: '#9CA3AF', whiteSpace: 'nowrap' }}>As seen in</span>
            <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
              {['Healthline', "Men's Health", 'Forbes Health', 'Muscle & Fitness', 'Well+Good', 'Biohacker Summit'].map(pub => (
                <span key={pub} style={{ fontFamily: "'Manrope', sans-serif", fontSize: 14, fontWeight: 700, color: '#9CA3AF', letterSpacing: '-0.02em' }}>{pub}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROVIDERS ── */}
        <section style={{ background: 'white', padding: '96px 24px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <p className="eyebrow" style={{ marginBottom: 12 }}>VERIFIED PROVIDERS</p>
              <h2 className="section-headline">Find trusted peptide therapy</h2>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 17, color: '#6B7280', maxWidth: 560, margin: '16px auto 0', lineHeight: 1.6 }}>
                Doctor-supervised treatments from licensed telehealth providers. Every provider verified for licensing, pricing transparency, and pharmacy sourcing.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 24 }}>
              {providers.map(p => <ProviderCard key={p.id} provider={p} />)}
            </div>
            <div style={{ textAlign: 'center', marginTop: 40 }}>
              <Link href="/providers" className="btn-secondary" style={{ fontSize: 15, padding: '12px 28px' }}>View All Providers →</Link>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section style={{ background: '#F8FAFC', padding: '96px 24px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <p className="eyebrow" style={{ marginBottom: 12 }}>HOW IT WORKS</p>
              <h2 className="section-headline">Navigate peptide therapy with confidence.</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32 }}>
              {[
                { num: '01', icon: '🎯', title: 'Tell us what you need', body: 'Answer a few questions about your health goals — weight loss, recovery, anti-aging, or performance. We match you to providers who specialize in exactly what you\'re looking for.', cta: 'Take the quiz →', href: '/start' },
                { num: '02', icon: '📊', title: 'Compare verified providers', body: 'Side-by-side pricing, pharmacy sourcing details, patient reviews, and treatment options. No more guesswork or sketchy research.', cta: 'Compare now →', href: '/providers' },
                { num: '03', icon: '🏥', title: 'Start your protocol', body: 'Click through to your matched provider, complete your online consultation, and receive prescription-grade peptides from a licensed compounding pharmacy.', cta: 'Find providers →', href: '/providers' },
              ].map(step => (
                <div key={step.num} style={{ background: 'white', borderRadius: 20, padding: '36px 28px', border: '1px solid #E2E8F0', borderTop: '3px solid #0EA5E9', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: 16, right: 20, fontFamily: "'JetBrains Mono', monospace", fontSize: 52, fontWeight: 700, color: '#E0F2FE', lineHeight: 1 }}>{step.num}</div>
                  <div style={{ fontSize: 36, marginBottom: 16 }}>{step.icon}</div>
                  <h3 style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 20, color: '#0F172A', marginBottom: 12 }}>{step.title}</h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: '#6B7280', lineHeight: 1.6, marginBottom: 20 }}>{step.body}</p>
                  <Link href={step.href} style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 600, color: '#0EA5E9', textDecoration: 'none' }}>{step.cta}</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TRUST STATEMENTS ── */}
        <section style={{ background: 'white', padding: '72px 24px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 32 }}>
            {[
              { icon: '🔬', title: 'Evidence-Based', body: 'Every peptide we cover is backed by peer-reviewed research. We link to the studies.' },
              { icon: '🏥', title: 'Licensed Providers Only', body: 'We only list providers with licensed physicians and FDA-registered pharmacy partnerships.' },
              { icon: '💰', title: 'No Pay-to-Rank', body: 'Providers cannot pay for higher rankings. Ratings are based solely on patient reviews.' },
              { icon: '🔒', title: 'Pharmacy Verified', body: 'We verify each provider\'s compounding pharmacy is FDA-registered and in good standing.' },
            ].map(trust => (
              <div key={trust.title} style={{ textAlign: 'center', padding: 24 }}>
                <div style={{ fontSize: 36, marginBottom: 12 }}>{trust.icon}</div>
                <h3 style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 16, color: '#0F172A', marginBottom: 8 }}>{trust.title}</h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#6B7280', lineHeight: 1.6 }}>{trust.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── REVIEWS MARQUEE ── */}
        <section style={{ background: '#F8FAFC', padding: '96px 0' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', textAlign: 'center', marginBottom: 56 }}>
            <p className="eyebrow" style={{ marginBottom: 12 }}>REAL REVIEWS</p>
            <h2 className="section-headline">Help thousands make the right choice.</h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 17, color: '#6B7280', marginTop: 12 }}>Share your experience on PeptideWinner, where real reviews make a difference.</p>
            <Link href="/reviews" className="btn-secondary" style={{ marginTop: 16, display: 'inline-flex' }}>Write a Review</Link>
          </div>
          <div style={{ overflow: 'hidden', marginBottom: 20 }}>
            <div className="marquee-left" style={{ display: 'flex', gap: 20, width: 'max-content' }}>
              {row1.map((r, i) => <ReviewCard key={i} review={r} />)}
            </div>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <div className="marquee-right" style={{ display: 'flex', gap: 20, width: 'max-content' }}>
              {row2.map((r, i) => <ReviewCard key={i} review={r} />)}
            </div>
          </div>
        </section>

        {/* ── BLOG ── */}
        <section style={{ background: 'white', padding: '96px 24px 80px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 48, flexWrap: 'wrap', gap: 16 }}>
              <div>
                <p className="eyebrow" style={{ marginBottom: 12 }}>PEPTIDE INSIGHTS</p>
                <h2 className="section-headline">Discover peptide research.</h2>
              </div>
              <Link href="/insights" style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 600, color: '#0EA5E9', textDecoration: 'none' }}>Read all articles →</Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 28 }}>
              {articles.map(article => (
                <Link key={article.slug} href={`/insights/${article.slug}`} style={{ textDecoration: 'none' }}>
                  <div className="card-hover" style={{ background: 'white', border: '1px solid #E2E8F0', borderRadius: 16, overflow: 'hidden' }}>
                    <img src={article.image} alt={article.title} style={{ width: '100%', height: 200, objectFit: 'cover' }} />
                    <div style={{ padding: 24 }}>
                      <span style={{ background: '#F0F9FF', color: '#0369A1', fontSize: 11, fontWeight: 700, padding: '4px 12px', borderRadius: 100, fontFamily: "'Inter', sans-serif" }}>{article.category}</span>
                      <h3 style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 17, color: '#0F172A', margin: '12px 0 8px', lineHeight: 1.4 }}>{article.title}</h3>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#6B7280', lineHeight: 1.5, marginBottom: 12 }}>{article.excerpt}</p>
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#9CA3AF' }}>{article.date} · {article.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── NEWSLETTER ── */}
        <section style={{ background: 'linear-gradient(135deg, #0F3460 0%, #1E4D8C 100%)', padding: '80px 24px' }}>
          <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
            <p className="eyebrow" style={{ color: '#7DD3FC', marginBottom: 16 }}>STAY INFORMED</p>
            <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 'clamp(28px, 4vw, 38px)', color: 'white', lineHeight: 1.2, marginBottom: 16 }}>
              The peptide therapy newsletter for serious patients.
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: '#CBD5E1', lineHeight: 1.65, marginBottom: 32 }}>
              Weekly insights on new providers, peptide research, and patient stories. No spam.
            </p>
            <div style={{ display: 'flex', gap: 12, maxWidth: 440, margin: '0 auto', flexWrap: 'wrap' }}>
              <input type="email" placeholder="Your email address" style={{ flex: 1, minWidth: 200, height: 48, borderRadius: 8, border: 'none', padding: '0 16px', fontFamily: "'Inter', sans-serif", fontSize: 14, outline: 'none' }} />
              <button className="btn-primary" style={{ height: 48, padding: '0 24px', fontSize: 15 }}>Subscribe</button>
            </div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#94A3B8', marginTop: 12 }}>Join 4,200+ subscribers. Free forever.</p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}

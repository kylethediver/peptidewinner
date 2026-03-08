import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { providers, reviews } from '@/lib/data'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return providers.map(p => ({ slug: p.slug }))
}

function Stars({ rating }: { rating: number }) {
  return <span>{[1,2,3,4,5].map(s => <span key={s} style={{ color: '#F59E0B', fontSize: 14 }}>{s <= Math.floor(rating) ? '★' : '☆'}</span>)}</span>
}

export default function ProviderDetailPage({ params }: { params: { slug: string } }) {
  const provider = providers.find(p => p.slug === params.slug)
  if (!provider) notFound()

  const providerReviews = reviews.slice(0, 4)

  return (
    <>
      <Nav />
      <main>
        <section style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0', padding: '48px 24px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#6B7280', marginBottom: 24 }}>
              <Link href="/" style={{ color: '#6B7280', textDecoration: 'none' }}>Home</Link> / <Link href="/providers" style={{ color: '#6B7280', textDecoration: 'none' }}>Providers</Link> / {provider.name}
            </p>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 24, flexWrap: 'wrap' }}>
              <div style={{ width: 80, height: 80, borderRadius: '50%', background: provider.color + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 22, color: provider.color, flexShrink: 0 }}>{provider.logo}</div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 8 }}>
                  <h1 style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 'clamp(24px, 3vw, 32px)', color: '#0F172A' }}>{provider.name}</h1>
                  <span className="verified-badge">✓ Verified Provider</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                  <Stars rating={provider.rating} />
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 600 }}>{provider.rating}</span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#9CA3AF' }}>({provider.reviewCount} reviews)</span>
                </div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#6B7280' }}>📍 {provider.location}</p>
              </div>
            </div>
          </div>
        </section>

        <section style={{ padding: '48px 24px 96px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 320px', gap: 48, alignItems: 'start' }}>
            <div>
              {/* Tabs */}
              <div style={{ display: 'flex', borderBottom: '1px solid #E2E8F0', marginBottom: 32, overflowX: 'auto' }}>
                {['Overview', 'Reviews', 'Pricing', 'Pharmacies', 'FAQ'].map((tab, i) => (
                  <div key={tab} style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 600, color: i === 0 ? '#0EA5E9' : '#6B7280', borderBottom: i === 0 ? '2px solid #0EA5E9' : 'none', padding: '12px 20px', cursor: 'pointer', whiteSpace: 'nowrap' }}>{tab}</div>
                ))}
              </div>

              <h2 style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 22, color: '#0F172A', marginBottom: 12 }}>About {provider.name}</h2>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: '#374151', lineHeight: 1.7, marginBottom: 32 }}>
                {provider.name} is a licensed telehealth provider offering physician-supervised peptide therapy protocols. {provider.highlight} They provide consultation, prescription, and dispensing through FDA-registered compounding pharmacies.
              </p>

              <h3 style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 18, color: '#0F172A', marginBottom: 16 }}>Peptides Offered</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 32 }}>
                {provider.peptides.map(p => (
                  <span key={p} style={{ background: '#F0F9FF', color: '#0369A1', border: '1px solid #BAE6FD', fontSize: 13, fontWeight: 600, padding: '6px 14px', borderRadius: 100, fontFamily: "'Inter', sans-serif" }}>{p}</span>
                ))}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 32 }}>
                <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: 12, padding: 20 }}>
                  <h4 style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 14, color: '#15803D', marginBottom: 12 }}>✓ Pros</h4>
                  {provider.pros.map(pro => (
                    <div key={pro} style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                      <span style={{ color: '#059669' }}>✓</span>
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#374151' }}>{pro}</span>
                    </div>
                  ))}
                </div>
                <div style={{ background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: 12, padding: 20 }}>
                  <h4 style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 14, color: '#DC2626', marginBottom: 12 }}>✗ Cons</h4>
                  {provider.cons.map(con => (
                    <div key={con} style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                      <span style={{ color: '#DC2626' }}>—</span>
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#374151' }}>{con}</span>
                    </div>
                  ))}
                </div>
              </div>

              <h3 style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 18, color: '#0F172A', marginBottom: 16 }}>Recent Patient Reviews</h3>
              {providerReviews.map((r, i) => (
                <div key={i} style={{ border: '1px solid #E2E8F0', borderRadius: 12, padding: 20, marginBottom: 16 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, flexWrap: 'wrap', gap: 8 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#0EA5E9', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 700 }}>{r.avatar}</div>
                      <div>
                        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 600, color: '#0F172A' }}>{r.name}</div>
                        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#9CA3AF' }}>{r.location}</div>
                      </div>
                    </div>
                    <Stars rating={r.rating} />
                  </div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#374151', lineHeight: 1.6, marginBottom: 8 }}>{r.text}</p>
                  <span style={{ background: '#F0F9FF', color: '#0369A1', fontSize: 11, fontWeight: 600, padding: '3px 10px', borderRadius: 100, fontFamily: "'Inter', sans-serif" }}>{r.peptide}</span>
                </div>
              ))}
            </div>

            {/* Sticky Sidebar */}
            <div style={{ position: 'sticky', top: 88 }}>
              <div style={{ background: 'white', border: `2px solid ${provider.color}40`, borderRadius: 16, padding: 28, boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
                <div style={{ height: 3, background: provider.color, margin: '-28px -28px 24px', borderRadius: '14px 14px 0 0' }} />
                {provider.discount && (
                  <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: 8, padding: '10px 14px', marginBottom: 20 }}>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 700, color: '#15803D' }}>🎉 {provider.discount}</span>
                  </div>
                )}
                <div style={{ marginBottom: 20 }}>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#9CA3AF' }}>Starting from</span>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: 36, color: '#0F172A' }}>${provider.priceFrom}</span>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#9CA3AF' }}>/month</span>
                  </div>
                </div>
                <a href="#" className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: 15, padding: '14px', marginBottom: 12, display: 'flex' }}>
                  Visit {provider.name} →
                </a>
                <Link href="/start" className="btn-secondary" style={{ width: '100%', justifyContent: 'center', fontSize: 14, padding: '12px', display: 'flex' }}>
                  Take Matching Quiz
                </Link>
                <div style={{ marginTop: 20, paddingTop: 20, borderTop: '1px solid #F1F5F9' }}>
                  {['Licensed physicians', 'FDA-registered pharmacy', 'PeptideWinner verified'].map(item => (
                    <div key={item} style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 8 }}>
                      <span style={{ color: '#059669' }}>🛡️</span>
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#374151' }}>{item}</span>
                    </div>
                  ))}
                </div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: '#9CA3AF', marginTop: 16, lineHeight: 1.5 }}>
                  *PeptideWinner may earn a commission. This does not affect our rankings.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

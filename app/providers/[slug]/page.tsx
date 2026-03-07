import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { providers, reviews } from '@/lib/data'
import { Star, CheckCircle, MapPin, ExternalLink, Shield, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return providers.map(p => ({ slug: p.slug }))
}

export default function ProviderDetailPage({ params }: { params: { slug: string } }) {
  const provider = providers.find(p => p.slug === params.slug)
  if (!provider) notFound()

  const providerReviews = reviews.filter(r =>
    r.provider.toLowerCase().includes(provider.name.split(' ')[0].toLowerCase())
  ).slice(0, 4)

  return (
    <>
      <Nav />
      <main>
        {/* Header */}
        <section style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0', padding: '48px 24px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            {/* Breadcrumb */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 24, fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#6B7280' }}>
              <Link href="/" style={{ color: '#6B7280', textDecoration: 'none' }}>Home</Link>
              <ChevronRight size={12} />
              <Link href="/providers" style={{ color: '#6B7280', textDecoration: 'none' }}>Providers</Link>
              <ChevronRight size={12} />
              <span style={{ color: '#0F172A' }}>{provider.name}</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 24, flexWrap: 'wrap' }}>
              <div style={{
                width: 80, height: 80, borderRadius: '50%',
                background: provider.color + '20',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 22, color: provider.color, flexShrink: 0,
              }}>{provider.logo}</div>

              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 8 }}>
                  <h1 style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 32, color: '#0F172A', margin: 0 }}>
                    {provider.name}
                  </h1>
                  <span className="verified-badge">✓ Verified Provider</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 8 }}>
                  <div style={{ display: 'flex', gap: 2 }}>
                    {[1,2,3,4,5].map(s => <Star key={s} size={16} fill={s <= Math.floor(provider.rating) ? '#F59E0B' : 'none'} color="#F59E0B" />)}
                  </div>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, fontWeight: 600, color: '#374151' }}>{provider.rating}</span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#9CA3AF' }}>({provider.reviewCount} reviews)</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <MapPin size={14} color="#9CA3AF" />
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#6B7280' }}>{provider.location}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section style={{ padding: '48px 24px 96px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 340px', gap: 48, alignItems: 'start' }}>
            {/* Left */}
            <div>
              {/* Tabs */}
              <div style={{ display: 'flex', gap: 0, borderBottom: '1px solid #E2E8F0', marginBottom: 32, overflowX: 'auto' }}>
                {['Overview', 'Reviews', 'Pricing', 'Pharmacies', 'FAQ'].map((tab, i) => (
                  <button key={tab} style={{
                    fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 600,
                    color: i === 0 ? '#0EA5E9' : '#6B7280',
                    borderBottom: i === 0 ? '2px solid #0EA5E9' : 'none',
                    padding: '12px 20px', background: 'none', border: 'none',
                    cursor: 'pointer', whiteSpace: 'nowrap',
                  }}>{tab}</button>
                ))}
              </div>

              {/* About */}
              <h2 style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 22, color: '#0F172A', marginBottom: 12 }}>About {provider.name}</h2>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: '#374151', lineHeight: 1.7, marginBottom: 32 }}>
                {provider.name} is a licensed telehealth provider offering physician-supervised peptide therapy protocols. {provider.highlight} They provide consultation, prescription, and dispensing through FDA-registered compounding pharmacies with full transparency on sourcing.
              </p>

              {/* Peptides offered */}
              <h3 style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 18, color: '#0F172A', marginBottom: 16 }}>Peptides Offered</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 32 }}>
                {provider.peptides.map(p => (
                  <span key={p} style={{
                    background: '#F0F9FF', color: '#0369A1', border: '1px solid #BAE6FD',
                    fontSize: 13, fontWeight: 600, padding: '6px 14px',
                    borderRadius: 100, fontFamily: "'Inter', sans-serif",
                  }}>{p}</span>
                ))}
              </div>

              {/* Pros & Cons */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 32 }}>
                <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: 12, padding: 20 }}>
                  <h4 style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 14, color: '#15803D', marginBottom: 12 }}>✓ Pros</h4>
                  {provider.pros.map(pro => (
                    <div key={pro} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 8 }}>
                      <CheckCircle size={14} color="#059669" style={{ marginTop: 2, flexShrink: 0 }} />
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#374151' }}>{pro}</span>
                    </div>
                  ))}
                </div>
                <div style={{ background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: 12, padding: 20 }}>
                  <h4 style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 14, color: '#DC2626', marginBottom: 12 }}>✗ Cons</h4>
                  {provider.cons.map(con => (
                    <div key={con} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 8 }}>
                      <span style={{ color: '#DC2626', fontSize: 14, flexShrink: 0 }}>—</span>
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#374151' }}>{con}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent reviews */}
              <h3 style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 18, color: '#0F172A', marginBottom: 16 }}>Recent Patient Reviews</h3>
              {(providerReviews.length > 0 ? providerReviews : reviews.slice(0, 3)).map((r, i) => (
                <div key={i} style={{ border: '1px solid #E2E8F0', borderRadius: 12, padding: 20, marginBottom: 16 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, flexWrap: 'wrap', gap: 8 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#0EA5E9', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 700 }}>{r.avatar}</div>
                      <div>
                        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 600, color: '#0F172A' }}>{r.name}</div>
                        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#9CA3AF' }}>{r.location}</div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: 2 }}>
                      {[1,2,3,4,5].map(s => <Star key={s} size={12} fill={s <= r.rating ? '#F59E0B' : 'none'} color="#F59E0B" />)}
                    </div>
                  </div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#374151', lineHeight: 1.6 }}>{r.text}</p>
                  <span style={{ background: '#F0F9FF', color: '#0369A1', fontSize: 11, fontWeight: 600, padding: '3px 10px', borderRadius: 100, fontFamily: "'Inter', sans-serif" }}>{r.peptide}</span>
                </div>
              ))}
            </div>

            {/* Sticky Sidebar */}
            <div style={{ position: 'sticky', top: 88 }}>
              <div style={{ background: 'white', border: `2px solid ${provider.color}30`, borderRadius: 16, padding: 28, boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
                <div style={{ borderTop: `3px solid ${provider.color}`, margin: '-28px -28px 24px', borderRadius: '14px 14px 0 0' }} />

                {provider.discount && (
                  <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: 8, padding: '10px 14px', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
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

                <a href={`https://${provider.name.toLowerCase().replace(/ /g, '')}.com`} target="_blank" rel="noopener noreferrer nofollow" className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: 15, padding: '14px', marginBottom: 12 }}>
                  Visit {provider.name} <ExternalLink size={14} />
                </a>
                <Link href="/start" className="btn-secondary" style={{ width: '100%', justifyContent: 'center', fontSize: 14, padding: '12px' }}>
                  Take Matching Quiz
                </Link>

                <div style={{ marginTop: 20, paddingTop: 20, borderTop: '1px solid #F1F5F9' }}>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 8 }}>
                    <Shield size={14} color="#059669" />
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#374151' }}>Licensed physicians</span>
                  </div>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 8 }}>
                    <Shield size={14} color="#059669" />
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#374151' }}>FDA-registered pharmacy</span>
                  </div>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    <Shield size={14} color="#059669" />
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#374151' }}>PeptideWinner verified</span>
                  </div>
                </div>

                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: '#9CA3AF', marginTop: 16, lineHeight: 1.5 }}>
                  *PeptideWinner may earn a commission when you click provider links. This does not affect our rankings.
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

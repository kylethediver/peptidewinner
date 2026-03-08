import Link from 'next/link'

interface Provider {
  id: string; slug: string; name: string; logo: string; rating: number;
  reviewCount: number; featured: boolean; verified: boolean; badge: string;
  location: string; priceFrom: number; priceTo: number; peptides: string[];
  highlight: string; pros: string[]; cons: string[]; discount: string; color: string;
}

function Stars({ rating }: { rating: number }) {
  return (
    <span style={{ fontSize: 12, letterSpacing: '-1px' }}>
      {[1,2,3,4,5].map(s => <span key={s} style={{ color: s <= Math.round(rating) ? '#F59E0B' : '#D1D5DB' }}>★</span>)}
    </span>
  )
}

export default function ProviderCard({ provider }: { provider: Provider }) {
  return (
    <div style={{
      background: 'white', borderRadius: 20, overflow: 'hidden',
      border: provider.featured ? '1.5px solid #D1FAE5' : '1px solid #F3F4F6',
      boxShadow: provider.featured ? '0 4px 24px rgba(16,185,129,0.08)' : '0 1px 4px rgba(0,0,0,0.04)',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    }}>
      {/* Top accent */}
      <div style={{ height: 3, background: provider.color }} />

      <div style={{ padding: '22px 22px 20px' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{
              width: 46, height: 46, borderRadius: 12,
              background: provider.color + '15',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 12, color: provider.color,
              flexShrink: 0,
            }}>{provider.logo}</div>
            <div>
              <h3 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 15, color: '#0A0A0A', marginBottom: 3 }}>{provider.name}</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <Stars rating={provider.rating} />
                <span style={{ fontFamily: "'Sora', sans-serif", fontSize: 12, fontWeight: 600, color: '#374151' }}>{provider.rating}</span>
                <span style={{ fontFamily: "'Sora', sans-serif", fontSize: 11, color: '#9CA3AF' }}>({provider.reviewCount})</span>
              </div>
            </div>
          </div>
          {provider.featured && (
            <span style={{ background: '#FEF3C7', color: '#92400E', fontSize: 10, fontWeight: 700, padding: '3px 9px', borderRadius: 100, fontFamily: "'Sora', sans-serif", whiteSpace: 'nowrap' }}>
              ⭐ {provider.badge}
            </span>
          )}
        </div>

        {/* Highlight */}
        <p style={{ fontFamily: "'Sora', sans-serif", fontSize: 13, color: '#6B7280', lineHeight: 1.6, marginBottom: 14 }}>
          {provider.highlight}
        </p>

        {/* Peptide tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 14 }}>
          {provider.peptides.slice(0, 4).map(p => (
            <span key={p} style={{ background: '#F9FAFB', color: '#374151', fontSize: 11, fontWeight: 500, padding: '3px 10px', borderRadius: 100, fontFamily: "'Sora', sans-serif", border: '1px solid #E5E7EB' }}>{p}</span>
          ))}
        </div>

        {/* Pros */}
        <div style={{ marginBottom: 14 }}>
          {provider.pros.map(pro => (
            <div key={pro} style={{ display: 'flex', alignItems: 'flex-start', gap: 7, marginBottom: 5 }}>
              <span style={{ color: '#10B981', fontSize: 13, lineHeight: 1.4, flexShrink: 0 }}>✓</span>
              <span style={{ fontFamily: "'Sora', sans-serif", fontSize: 13, color: '#374151', lineHeight: 1.4 }}>{pro}</span>
            </div>
          ))}
        </div>

        {/* Discount */}
        {provider.discount && (
          <div style={{ background: '#F0FDF4', border: '1px solid #D1FAE5', borderRadius: 8, padding: '8px 12px', marginBottom: 16 }}>
            <span style={{ fontFamily: "'Sora', sans-serif", fontSize: 12, fontWeight: 700, color: '#059669' }}>🎉 {provider.discount}</span>
          </div>
        )}

        {/* Footer */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 24, fontWeight: 700, color: '#0A0A0A' }}>${provider.priceFrom}</span>
            <span style={{ fontFamily: "'Sora', sans-serif", fontSize: 12, color: '#9CA3AF' }}>/mo from</span>
          </div>
          <Link href={`/providers/${provider.slug}`} style={{
            background: '#0A0A0A', color: 'white',
            fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: 13,
            padding: '9px 18px', borderRadius: 100, textDecoration: 'none',
          }}>View deal →</Link>
        </div>
      </div>
    </div>
  )
}

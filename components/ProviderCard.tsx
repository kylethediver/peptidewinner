import Link from 'next/link'
import { Star, CheckCircle, MapPin, ChevronRight, Zap } from 'lucide-react'

interface Provider {
  id: string
  slug: string
  name: string
  logo: string
  rating: number
  reviewCount: number
  featured: boolean
  verified: boolean
  badge: string
  location: string
  priceFrom: number
  priceTo: number
  peptides: string[]
  highlight: string
  pros: string[]
  cons: string[]
  discount: string
  url: string
  color: string
}

export default function ProviderCard({ provider }: { provider: Provider }) {
  return (
    <div className="card-hover" style={{
      background: 'white',
      border: `1px solid ${provider.featured ? '#BAE6FD' : '#E2E8F0'}`,
      borderRadius: 16,
      overflow: 'hidden',
      position: 'relative',
      boxShadow: provider.featured ? '0 4px 24px rgba(14, 165, 233, 0.1)' : '0 1px 4px rgba(0,0,0,0.05)',
    }}>
      {/* Top accent */}
      <div style={{ height: 4, background: provider.color }} />

      {/* Featured badge */}
      {provider.featured && (
        <div style={{
          position: 'absolute', top: 16, right: 16,
          background: '#FEF3C7', color: '#92400E',
          border: '1px solid #FDE68A',
          fontSize: 10, fontWeight: 700, padding: '3px 10px',
          borderRadius: 100, letterSpacing: '0.05em', textTransform: 'uppercase',
          fontFamily: "'Inter', sans-serif",
        }}>
          ⭐ {provider.badge}
        </div>
      )}

      <div style={{ padding: '24px 24px 20px' }}>
        {/* Header row */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 16 }}>
          <div style={{
            width: 52, height: 52, borderRadius: 12,
            background: provider.color + '20',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: "'Manrope', sans-serif", fontWeight: 700,
            fontSize: 15, color: provider.color, flexShrink: 0,
          }}>
            {provider.logo}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
              <h3 style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 16, color: '#0F172A', margin: 0 }}>
                {provider.name}
              </h3>
              {provider.verified && (
                <span className="verified-badge">✓ Verified</span>
              )}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 4 }}>
              <div style={{ display: 'flex', gap: 2 }}>
                {[1,2,3,4,5].map(s => (
                  <Star key={s} size={12} fill={s <= Math.floor(provider.rating) ? '#F59E0B' : 'none'} color="#F59E0B" />
                ))}
              </div>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 600, color: '#374151' }}>{provider.rating}</span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#9CA3AF' }}>({provider.reviewCount} reviews)</span>
            </div>
          </div>
        </div>

        {/* Location */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 12 }}>
          <MapPin size={13} color="#9CA3AF" />
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#6B7280' }}>{provider.location}</span>
        </div>

        {/* Highlight */}
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#374151', lineHeight: 1.5, marginBottom: 16 }}>
          {provider.highlight}
        </p>

        {/* Peptides */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
          {provider.peptides.slice(0, 4).map(p => (
            <span key={p} style={{
              background: '#F0F9FF', color: '#0369A1',
              fontSize: 11, fontWeight: 600, padding: '3px 10px',
              borderRadius: 100, fontFamily: "'Inter', sans-serif",
            }}>{p}</span>
          ))}
        </div>

        {/* Pros */}
        <div style={{ marginBottom: 16 }}>
          {provider.pros.map(pro => (
            <div key={pro} style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 5 }}>
              <CheckCircle size={13} color="#059669" />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#374151' }}>{pro}</span>
            </div>
          ))}
        </div>

        {/* Discount */}
        {provider.discount && (
          <div style={{
            background: '#F0FDF4', border: '1px solid #BBF7D0',
            borderRadius: 8, padding: '8px 12px',
            display: 'flex', alignItems: 'center', gap: 6, marginBottom: 16,
          }}>
            <Zap size={13} color="#059669" />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 600, color: '#15803D' }}>{provider.discount}</span>
          </div>
        )}

        {/* Price + CTA */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <div>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 20, fontWeight: 700, color: '#0F172A' }}>
              ${provider.priceFrom}
            </span>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#9CA3AF' }}>/mo from</span>
          </div>
          <Link href={provider.url} className="btn-primary" style={{ fontSize: 13, padding: '9px 16px' }}>
            View Provider <ChevronRight size={13} />
          </Link>
        </div>
      </div>
    </div>
  )
}

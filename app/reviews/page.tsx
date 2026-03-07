import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { reviews, providers } from '@/lib/data'
import { Star } from 'lucide-react'

export const metadata = {
  title: 'Peptide Therapy Provider Reviews | PeptideWinner',
  description: 'Real patient reviews for peptide therapy providers. Verified and moderated by PeptideWinner.',
}

export default function ReviewsPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Header */}
        <section style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0', padding: '64px 24px 48px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <p className="eyebrow" style={{ marginBottom: 12 }}>REAL REVIEWS</p>
            <h1 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 'clamp(32px, 4vw, 48px)', color: '#0F172A', marginBottom: 16 }}>
              Patient Reviews
            </h1>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 17, color: '#6B7280', maxWidth: 560, lineHeight: 1.6 }}>
              {reviews.length}+ verified reviews from real patients across {providers.length} providers.
            </p>
          </div>
        </section>

        <section style={{ padding: '48px 24px 96px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            {/* Write review CTA */}
            <div style={{ background: 'linear-gradient(135deg, #0F3460, #1E4D8C)', borderRadius: 16, padding: '32px 40px', marginBottom: 48, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
              <div>
                <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 26, color: 'white', marginBottom: 8 }}>Share your experience</h2>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: '#CBD5E1' }}>Your review helps thousands of patients make the right choice.</p>
              </div>
              <a href="mailto:reviews@peptidewinner.com" className="btn-primary" style={{ background: 'white', color: '#0F3460', fontSize: 15, padding: '12px 24px' }}>
                Write a Review
              </a>
            </div>

            {/* Reviews grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 24 }}>
              {reviews.map((r, i) => (
                <div key={i} style={{ background: 'white', border: '1px solid #E2E8F0', borderRadius: 16, padding: 24, boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12, alignItems: 'flex-start' }}>
                    <div style={{ display: 'flex', gap: 2 }}>
                      {[1,2,3,4,5].map(s => <Star key={s} size={14} fill={s <= r.rating ? '#F59E0B' : 'none'} color="#F59E0B" />)}
                    </div>
                    <span style={{ background: '#F0F9FF', color: '#0369A1', fontSize: 11, fontWeight: 600, padding: '3px 10px', borderRadius: 100, fontFamily: "'Inter', sans-serif" }}>{r.peptide}</span>
                  </div>

                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#374151', lineHeight: 1.6, marginBottom: 16 }}>
                    "{r.text}"
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#0EA5E9', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 700, flexShrink: 0 }}>{r.avatar}</div>
                    <div>
                      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 600, color: '#0F172A' }}>{r.name}</div>
                      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: '#9CA3AF' }}>{r.location} · {r.provider}</div>
                    </div>
                    <div style={{ marginLeft: 'auto' }}>
                      <span className="verified-badge" style={{ fontSize: 10 }}>✓</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

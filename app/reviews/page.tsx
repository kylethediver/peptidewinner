import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { reviews } from '@/lib/data'

export const metadata = { title: 'Patient Reviews | PeptideWinner' }

function Stars({ rating }: { rating: number }) {
  return <span>{[1,2,3,4,5].map(s => <span key={s} style={{ color: '#F59E0B', fontSize: 13 }}>{s <= rating ? '★' : '☆'}</span>)}</span>
}

export default function ReviewsPage() {
  return (
    <>
      <Nav />
      <main>
        <section style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0', padding: '64px 24px 48px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <p className="eyebrow" style={{ marginBottom: 12 }}>REAL REVIEWS</p>
            <h1 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 'clamp(32px, 4vw, 48px)', color: '#0F172A', marginBottom: 16 }}>Patient Reviews</h1>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 17, color: '#6B7280', maxWidth: 560, lineHeight: 1.6 }}>{reviews.length}+ verified reviews from real patients.</p>
          </div>
        </section>
        <section style={{ padding: '48px 24px 96px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ background: 'linear-gradient(135deg, #0F3460, #1E4D8C)', borderRadius: 16, padding: '32px 40px', marginBottom: 48, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
              <div>
                <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 26, color: 'white', marginBottom: 8 }}>Share your experience</h2>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: '#CBD5E1' }}>Your review helps thousands of patients make the right choice.</p>
              </div>
              <a href="mailto:reviews@peptidewinner.com" style={{ background: 'white', color: '#0F3460', fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 15, padding: '12px 24px', borderRadius: 8, textDecoration: 'none' }}>Write a Review</a>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
              {reviews.map((r, i) => (
                <div key={i} style={{ background: 'white', border: '1px solid #E2E8F0', borderRadius: 16, padding: 24 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10, alignItems: 'flex-start' }}>
                    <Stars rating={r.rating} />
                    <span style={{ background: '#F0F9FF', color: '#0369A1', fontSize: 11, fontWeight: 600, padding: '3px 10px', borderRadius: 100, fontFamily: "'Inter', sans-serif" }}>{r.peptide}</span>
                  </div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#374151', lineHeight: 1.6, marginBottom: 14 }}>"{r.text}"</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#0EA5E9', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 700, flexShrink: 0 }}>{r.avatar}</div>
                    <div>
                      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 600, color: '#0F172A' }}>{r.name}</div>
                      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: '#9CA3AF' }}>{r.location} · {r.provider}</div>
                    </div>
                    <span className="verified-badge" style={{ marginLeft: 'auto', fontSize: 10 }}>✓</span>
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

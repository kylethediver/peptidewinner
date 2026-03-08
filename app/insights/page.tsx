import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { articles } from '@/lib/data'
import Link from 'next/link'

export const metadata = { title: 'Peptide Therapy Insights | PeptideWinner' }

export default function InsightsPage() {
  return (
    <>
      <Nav />
      <main>
        <section style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0', padding: '64px 24px 48px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <p className="eyebrow" style={{ marginBottom: 12 }}>PEPTIDE INSIGHTS</p>
            <h1 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 'clamp(32px, 4vw, 48px)', color: '#0F172A', marginBottom: 16 }}>Evidence-based peptide research.</h1>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 17, color: '#6B7280', maxWidth: 560, lineHeight: 1.6 }}>We translate complex peptide science into clear, actionable information.</p>
          </div>
        </section>
        <section style={{ padding: '64px 24px 96px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 28 }}>
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
      </main>
      <Footer />
    </>
  )
}

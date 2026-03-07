import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { articles } from '@/lib/data'
import Link from 'next/link'

export const metadata = {
  title: 'Peptide Therapy Insights & Research | PeptideWinner',
  description: 'Evidence-based articles on peptide therapy, comparisons, protocols, and research.',
}

const allArticles = [
  ...articles,
  {
    slug: 'semaglutide-vs-tirzepatide',
    title: 'Semaglutide vs Tirzepatide for Weight Loss: 2026 Comparison',
    excerpt: 'Both peptides show remarkable weight loss results. Here is how to choose the right one for your situation based on cost, efficacy, and side effects.',
    category: 'COMPARISONS',
    readTime: '12 min read',
    date: 'Mar 1, 2026',
    author: 'Dr. Sarah Mills',
    image: 'https://images.unsplash.com/photo-1631549916768-4119b4220292?w=600&q=80',
  },
  {
    slug: 'tb-500-for-athletes',
    title: 'TB-500 for Athletes: Recovery Times, Dosing, and What to Expect',
    excerpt: 'TB-500 (Thymosin Beta-4) is one of the most popular peptides for athletic recovery. Here is what real clinical data says.',
    category: 'ATHLETE GUIDE',
    readTime: '10 min read',
    date: 'Feb 15, 2026',
    author: 'Dr. Michael Torres',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80',
  },
  {
    slug: 'how-to-spot-fake-peptides',
    title: 'How to Spot Fake or Underdosed Peptides — Red Flags Every Patient Should Know',
    excerpt: 'The peptide market has quality problems. Learn how to verify your compounding pharmacy, read COAs, and protect yourself.',
    category: 'PATIENT SAFETY',
    readTime: '7 min read',
    date: 'Feb 10, 2026',
    author: 'PeptideWinner Editorial',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80',
  },
]

export default function InsightsPage() {
  const featured = allArticles[0]
  const rest = allArticles.slice(1)

  return (
    <>
      <Nav />
      <main>
        {/* Header */}
        <section style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0', padding: '64px 24px 48px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <p className="eyebrow" style={{ marginBottom: 12 }}>PEPTIDE INSIGHTS</p>
            <h1 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 'clamp(32px, 4vw, 48px)', color: '#0F172A', marginBottom: 16 }}>
              Evidence-based peptide research.<br />Written for patients.
            </h1>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 17, color: '#6B7280', maxWidth: 560, lineHeight: 1.6 }}>
              We translate complex peptide science into clear, actionable information to help you make the best decisions for your health.
            </p>
          </div>
        </section>

        <section style={{ padding: '64px 24px 96px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            {/* Featured */}
            <Link href={`/insights/${featured.slug}`} style={{ textDecoration: 'none', display: 'block', marginBottom: 64 }}>
              <div className="card-hover" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, background: 'white', border: '1px solid #E2E8F0', borderRadius: 20, overflow: 'hidden', alignItems: 'center' }}>
                <img src={featured.image} alt={featured.title} style={{ width: '100%', height: 360, objectFit: 'cover' }} />
                <div style={{ padding: '40px 40px 40px 0' }}>
                  <span style={{ background: '#F0F9FF', color: '#0369A1', fontSize: 11, fontWeight: 700, padding: '4px 12px', borderRadius: 100, fontFamily: "'Inter', sans-serif" }}>
                    {featured.category}
                  </span>
                  <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 32, color: '#0F172A', margin: '16px 0 12px', lineHeight: 1.3 }}>{featured.title}</h2>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: '#6B7280', lineHeight: 1.65, marginBottom: 24 }}>{featured.excerpt}</p>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#374151', fontWeight: 500 }}>{featured.author}</span>
                    <span style={{ color: '#E2E8F0' }}>·</span>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#9CA3AF' }}>{featured.date}</span>
                    <span style={{ color: '#E2E8F0' }}>·</span>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#9CA3AF' }}>{featured.readTime}</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 28 }}>
              {rest.map(article => (
                <Link key={article.slug} href={`/insights/${article.slug}`} style={{ textDecoration: 'none' }}>
                  <div className="card-hover" style={{ background: 'white', border: '1px solid #E2E8F0', borderRadius: 16, overflow: 'hidden' }}>
                    <img src={article.image} alt={article.title} style={{ width: '100%', height: 200, objectFit: 'cover' }} />
                    <div style={{ padding: 24 }}>
                      <span style={{ background: '#F0F9FF', color: '#0369A1', fontSize: 11, fontWeight: 700, padding: '4px 12px', borderRadius: 100, fontFamily: "'Inter', sans-serif" }}>{article.category}</span>
                      <h3 style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 17, color: '#0F172A', margin: '12px 0 8px', lineHeight: 1.4 }}>{article.title}</h3>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#6B7280', lineHeight: 1.5, marginBottom: 16 }}>{article.excerpt}</p>
                      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#9CA3AF' }}>{article.date}</span>
                        <span style={{ color: '#E2E8F0' }}>·</span>
                        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#9CA3AF' }}>{article.readTime}</span>
                      </div>
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

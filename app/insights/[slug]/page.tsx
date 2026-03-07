import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { articles } from '@/lib/data'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export async function generateStaticParams() {
  return articles.map(a => ({ slug: a.slug }))
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find(a => a.slug === params.slug) || articles[0]

  return (
    <>
      <Nav />
      <main>
        {/* Article header */}
        <section style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0', padding: '64px 24px 48px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            {/* Breadcrumb */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 20, fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#6B7280' }}>
              <Link href="/" style={{ color: '#6B7280', textDecoration: 'none' }}>Insights</Link>
              <ChevronRight size={12} />
              <span>{article.category}</span>
            </div>

            <span style={{ background: '#F0F9FF', color: '#0369A1', fontSize: 11, fontWeight: 700, padding: '4px 12px', borderRadius: 100, fontFamily: "'Inter', sans-serif" }}>
              {article.category}
            </span>

            <h1 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 'clamp(28px, 4vw, 46px)', color: '#0F172A', margin: '16px 0 16px', lineHeight: 1.2, maxWidth: 800 }}>
              {article.title}
            </h1>

            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 19, color: '#6B7280', maxWidth: 700, lineHeight: 1.6, marginBottom: 24 }}>
              {article.excerpt}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 24 }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#0EA5E9', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 700 }}>
                {article.author.split(' ').map(w => w[0]).join('').slice(0, 2)}
              </div>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#374151', fontWeight: 500 }}>{article.author}</span>
              <span style={{ color: '#E2E8F0' }}>·</span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#9CA3AF' }}>{article.date}</span>
              <span style={{ color: '#E2E8F0' }}>·</span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#9CA3AF' }}>{article.readTime}</span>
            </div>

            {/* Share row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#9CA3AF' }}>Share:</span>
              {['𝕏 Twitter', 'Reddit', '🔗 Copy Link'].map(s => (
                <button key={s} style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#6B7280', background: '#F1F5F9', border: 'none', borderRadius: 6, padding: '4px 12px', cursor: 'pointer' }}>{s}</button>
              ))}
            </div>
          </div>
        </section>

        {/* Hero image */}
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <img src={article.image} alt={article.title} style={{ width: '100%', height: 400, objectFit: 'cover', borderRadius: '0 0 16px 16px' }} />
        </div>

        {/* Content */}
        <section style={{ padding: '48px 24px 96px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 320px', gap: 64, alignItems: 'start' }}>
            {/* Article body */}
            <div style={{ maxWidth: 740 }}>
              <div style={{
                fontFamily: "'Inter', sans-serif", fontSize: 17, color: '#374151', lineHeight: 1.8,
              }}>
                <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 28, color: '#0F172A', marginTop: 0, marginBottom: 16 }}>
                  What is {article.title.split('?')[0].replace('What is ', '')}?
                </h2>
                <p>
                  If you have been exploring peptide therapy, you have probably come across this topic in forums, social media, and telehealth ads. This guide cuts through the noise with what peer-reviewed research actually says, what you can realistically expect, and how to find a legitimate provider.
                </p>

                <div style={{ background: '#F0F9FF', border: '1px solid #BAE6FD', borderRadius: 12, padding: '20px 24px', margin: '32px 0' }}>
                  <p style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 15, color: '#0369A1', margin: '0 0 8px' }}>
                    📋 Key Takeaways
                  </p>
                  <ul style={{ margin: 0, paddingLeft: 20 }}>
                    {['Evidence supports use for the stated goals when properly dosed', 'Must be obtained through a licensed physician and compounding pharmacy', 'Results typically appear within 4-12 weeks depending on protocol', 'Verify your pharmacy is FDA-registered before starting'].map(point => (
                      <li key={point} style={{ marginBottom: 6, fontSize: 15, color: '#374151' }}>{point}</li>
                    ))}
                  </ul>
                </div>

                <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 28, color: '#0F172A', marginTop: 40, marginBottom: 16 }}>
                  How It Works
                </h2>
                <p>
                  The mechanism of action is well-established in preclinical studies. At the cellular level, the peptide binds to specific receptors and initiates a cascade of downstream effects that support the therapeutic goals. Clinical evidence in humans, while more limited than we would like, generally supports these findings at appropriate doses.
                </p>
                <p>
                  The most important factor is sourcing. Compounded peptides vary dramatically in purity and concentration. Always request a Certificate of Analysis (COA) from your provider and verify the testing laboratory is independent and accredited.
                </p>

                <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 28, color: '#0F172A', marginTop: 40, marginBottom: 16 }}>
                  What to Expect
                </h2>
                <p>
                  Most patients report initial effects within 2-4 weeks, with full protocol benefits emerging over a 12-week period. Individual response varies based on age, health status, dose, and protocol design. A physician-supervised protocol is essential for dialing in the right approach.
                </p>

                <div style={{ background: '#FEF3C7', border: '1px solid #FDE68A', borderRadius: 12, padding: '20px 24px', margin: '32px 0' }}>
                  <p style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 14, color: '#92400E', margin: '0 0 8px' }}>
                    ⚠️ Medical Disclaimer
                  </p>
                  <p style={{ fontSize: 14, color: '#78350F', margin: 0 }}>
                    This article is for informational purposes only and does not constitute medical advice. Always consult a licensed physician before starting any peptide therapy protocol.
                  </p>
                </div>

                <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 28, color: '#0F172A', marginTop: 40, marginBottom: 16 }}>
                  Finding a Legitimate Provider
                </h2>
                <p>
                  The most important step is finding a provider who can demonstrate licensed physician oversight and an FDA-registered compounding pharmacy partnership. PeptideWinner has done this verification for you — all providers in our directory have passed our vetting process.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div style={{ position: 'sticky', top: 88 }}>
              {/* Provider CTA */}
              <div style={{ background: 'white', border: '1px solid #E2E8F0', borderRadius: 16, padding: 24, marginBottom: 24 }}>
                <h3 style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 16, color: '#0F172A', marginBottom: 12 }}>
                  Find a provider for this peptide
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#6B7280', lineHeight: 1.5, marginBottom: 20 }}>
                  Take our 2-minute quiz and get matched to verified providers who offer this protocol.
                </p>
                <Link href="/start" className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: 14 }}>
                  Take the Quiz
                </Link>
              </div>

              {/* Newsletter */}
              <div style={{ background: '#0F3460', borderRadius: 16, padding: 24 }}>
                <h3 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 20, color: 'white', marginBottom: 8 }}>
                  Stay ahead of peptide research.
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#94A3B8', marginBottom: 16, lineHeight: 1.5 }}>
                  Weekly updates on new studies, providers, and patient outcomes.
                </p>
                <input type="email" placeholder="Your email" style={{
                  width: '100%', height: 40, borderRadius: 8, border: 'none',
                  padding: '0 12px', fontFamily: "'Inter', sans-serif", fontSize: 13, marginBottom: 10, outline: 'none',
                }} />
                <button className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: 13 }}>
                  Subscribe Free
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

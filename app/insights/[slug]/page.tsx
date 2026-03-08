import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { articles } from '@/lib/data'
import Link from 'next/link'

export async function generateStaticParams() {
  return articles.map(a => ({ slug: a.slug }))
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = articles.find(a => a.slug === slug) || articles[0]
  return (
    <>
      <Nav />
      <main>
        <section style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0', padding: '64px 24px 48px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#6B7280', marginBottom: 16 }}>
              <Link href="/insights" style={{ color: '#6B7280', textDecoration: 'none' }}>Insights</Link> / {article.category}
            </p>
            <span style={{ background: '#F0F9FF', color: '#0369A1', fontSize: 11, fontWeight: 700, padding: '4px 12px', borderRadius: 100, fontFamily: "'Inter', sans-serif" }}>{article.category}</span>
            <h1 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 'clamp(28px, 4vw, 46px)', color: '#0F172A', margin: '16px 0', lineHeight: 1.2, maxWidth: 800 }}>{article.title}</h1>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 19, color: '#6B7280', maxWidth: 700, lineHeight: 1.6, marginBottom: 20 }}>{article.excerpt}</p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#9CA3AF' }}>{article.author} · {article.date} · {article.readTime}</p>
          </div>
        </section>

        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <img src={article.image} alt={article.title} style={{ width: '100%', height: 400, objectFit: 'cover', borderRadius: '0 0 16px 16px' }} />
        </div>

        <section style={{ padding: '48px 24px 96px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 300px', gap: 64, alignItems: 'start' }}>
            <div style={{ maxWidth: 740 }}>
              <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 28, color: '#0F172A', marginBottom: 16 }}>Overview</h2>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 17, color: '#374151', lineHeight: 1.8, marginBottom: 24 }}>
                If you have been exploring peptide therapy, you have probably come across this topic. This guide cuts through the noise with what peer-reviewed research actually says, what you can realistically expect, and how to find a legitimate provider.
              </p>
              <div style={{ background: '#F0F9FF', border: '1px solid #BAE6FD', borderRadius: 12, padding: '20px 24px', marginBottom: 32 }}>
                <p style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 15, color: '#0369A1', marginBottom: 8 }}>📋 Key Takeaways</p>
                <ul style={{ paddingLeft: 20 }}>
                  {['Evidence supports use for the stated goals when properly dosed', 'Must be obtained through a licensed physician and compounding pharmacy', 'Results typically appear within 4-12 weeks', 'Verify your pharmacy is FDA-registered before starting'].map(p => (
                    <li key={p} style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: '#374151', marginBottom: 6 }}>{p}</li>
                  ))}
                </ul>
              </div>
              <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 28, color: '#0F172A', marginBottom: 16 }}>How It Works</h2>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 17, color: '#374151', lineHeight: 1.8, marginBottom: 24 }}>
                The mechanism of action is well-established in preclinical studies. At the cellular level, the peptide binds to specific receptors and initiates a cascade of downstream effects that support the therapeutic goals. Clinical evidence in humans generally supports these findings at appropriate doses.
              </p>
              <div style={{ background: '#FEF3C7', border: '1px solid #FDE68A', borderRadius: 12, padding: '20px 24px', marginBottom: 32 }}>
                <p style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 14, color: '#92400E', marginBottom: 8 }}>⚠️ Medical Disclaimer</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#78350F' }}>This article is for informational purposes only and does not constitute medical advice. Always consult a licensed physician before starting any peptide therapy protocol.</p>
              </div>
              <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 28, color: '#0F172A', marginBottom: 16 }}>Finding a Legitimate Provider</h2>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 17, color: '#374151', lineHeight: 1.8 }}>
                The most important step is finding a provider who can demonstrate licensed physician oversight and an FDA-registered compounding pharmacy partnership. PeptideWinner has done this verification for you.
              </p>
            </div>

            <div style={{ position: 'sticky', top: 88 }}>
              <div style={{ background: 'white', border: '1px solid #E2E8F0', borderRadius: 16, padding: 24, marginBottom: 24 }}>
                <h3 style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 16, color: '#0F172A', marginBottom: 12 }}>Find a provider for this peptide</h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#6B7280', lineHeight: 1.5, marginBottom: 20 }}>Take our 2-minute quiz and get matched to verified providers.</p>
                <Link href="/start" className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: 14, display: 'flex' }}>Take the Quiz →</Link>
              </div>
              <div style={{ background: '#0F3460', borderRadius: 16, padding: 24 }}>
                <h3 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 20, color: 'white', marginBottom: 8 }}>Stay ahead of peptide research.</h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#94A3B8', marginBottom: 16, lineHeight: 1.5 }}>Weekly updates on new studies and providers.</p>
                <input type="email" placeholder="Your email" style={{ width: '100%', height: 40, borderRadius: 8, border: 'none', padding: '0 12px', fontFamily: "'Inter', sans-serif", fontSize: 13, marginBottom: 10, outline: 'none', display: 'block' }} />
                <button className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: 13, display: 'flex' }}>Subscribe Free</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

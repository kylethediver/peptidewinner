import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
export const metadata = { title: 'Terms of Use | PeptideWinner' }
export default function TermsPage() {
  const sections = [
    { title: 'Acceptance of Terms', body: 'By accessing PeptideWinner.com, you agree to these Terms of Use.' },
    { title: 'No Medical Advice', body: 'PeptideWinner is an informational comparison resource only. Nothing on this site constitutes medical advice, diagnosis, or treatment recommendations. Always consult a licensed physician before starting any peptide therapy.' },
    { title: 'Affiliate Relationships', body: 'PeptideWinner has affiliate relationships with providers listed on the platform. We earn compensation when users click through and make purchases. This is disclosed on every relevant page.' },
    { title: 'User Content', body: 'By submitting a review, you grant PeptideWinner a license to use, display, and distribute your content. You represent that your content is truthful.' },
    { title: 'Limitation of Liability', body: 'PeptideWinner is not liable for any damages arising from your use of the site or reliance on provider information. Use of providers listed on our platform is at your own risk.' },
  ]
  return (
    <>
      <Nav />
      <main>
        <section style={{ padding: '64px 24px 96px' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <h1 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 48, color: '#0F172A', marginBottom: 8 }}>Terms of Use</h1>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#9CA3AF', marginBottom: 40 }}>Last updated: March 2026</p>
            {sections.map(s => (
              <div key={s.title} style={{ marginBottom: 40 }}>
                <h2 style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 20, color: '#0F172A', marginBottom: 12 }}>{s.title}</h2>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: '#374151', lineHeight: 1.75 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

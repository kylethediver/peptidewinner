import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = { title: 'Terms of Use | PeptideWinner' }

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main>
        <section style={{ padding: '64px 24px 96px' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <h1 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 48, color: '#0F172A', marginBottom: 8 }}>Terms of Use</h1>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#9CA3AF', marginBottom: 40 }}>Last updated: March 2026</p>

            {[
              { title: 'Acceptance of Terms', body: 'By accessing PeptideWinner.com, you agree to these Terms of Use. If you do not agree, please do not use the site.' },
              { title: 'No Medical Advice', body: 'PeptideWinner is an informational comparison resource only. Nothing on this site constitutes medical advice, diagnosis, or treatment recommendations. Always consult a licensed physician before starting any peptide therapy or making any health decisions. PeptideWinner does not prescribe medications.' },
              { title: 'Affiliate Relationships', body: 'PeptideWinner has affiliate relationships with providers listed on the platform. We earn compensation when users click through and make purchases. This is disclosed on every relevant page.' },
              { title: 'User Content', body: 'By submitting a review or other content, you grant PeptideWinner a non-exclusive, worldwide license to use, display, and distribute your content. You represent that your content is truthful and does not violate any laws.' },
              { title: 'Limitation of Liability', body: 'PeptideWinner is not liable for any damages arising from your use of the site, reliance on provider information, or outcomes from peptide therapy. Use of providers listed on our platform is at your own risk.' },
              { title: 'Changes to Terms', body: 'We may update these Terms at any time. Continued use of the site constitutes acceptance of updated Terms.' },
            ].map(section => (
              <div key={section.title} style={{ marginBottom: 40 }}>
                <h2 style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 20, color: '#0F172A', marginBottom: 12 }}>{section.title}</h2>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: '#374151', lineHeight: 1.75 }}>{section.body}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
export const metadata = { title: 'Privacy Policy | PeptideWinner' }
export default function PrivacyPage() {
  const sections = [
    { title: 'Information We Collect', body: 'We collect information you provide directly to us, such as when you submit a review, sign up for our newsletter, or contact us. We also collect standard analytics data through Google Analytics.' },
    { title: 'How We Use Your Information', body: 'We use your information to provide and improve our services, send newsletters (with your consent), and respond to inquiries. We do not sell your personal information to third parties.' },
    { title: 'Affiliate Disclosure', body: 'PeptideWinner participates in affiliate programs with providers listed on our platform. We earn a commission when you click through and make a purchase. This does not influence our editorial rankings.' },
    { title: 'Cookies', body: 'We use cookies to analyze site traffic and serve relevant content. You can control cookie settings through your browser.' },
    { title: 'Contact', body: 'For privacy-related questions, contact us at privacy@peptidewinner.com.' },
  ]
  return (
    <>
      <Nav />
      <main>
        <section style={{ padding: '64px 24px 96px' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <h1 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 48, color: '#0F172A', marginBottom: 8 }}>Privacy Policy</h1>
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

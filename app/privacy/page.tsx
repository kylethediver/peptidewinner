import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = { title: 'Privacy Policy | PeptideWinner' }

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main>
        <section style={{ padding: '64px 24px 96px' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <h1 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 48, color: '#0F172A', marginBottom: 8 }}>Privacy Policy</h1>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#9CA3AF', marginBottom: 40 }}>Last updated: March 2026</p>

            {[
              { title: 'Information We Collect', body: 'We collect information you provide directly to us, such as when you submit a review, sign up for our newsletter, or contact us. This includes name, email address, and any messages you send. We also collect standard analytics data (pages visited, referral source) through Google Analytics.' },
              { title: 'How We Use Your Information', body: 'We use your information to provide and improve our services, send you newsletters (with your consent), respond to your inquiries, and prevent fraud. We do not sell your personal information to third parties.' },
              { title: 'Affiliate Disclosure', body: 'PeptideWinner participates in affiliate programs with the providers listed on our platform. We earn a commission when you click through to a provider and make a purchase. This affiliate relationship does not influence our editorial rankings, which are based solely on patient reviews and our verification criteria.' },
              { title: 'Cookies', body: 'We use cookies to remember your preferences, analyze site traffic, and serve relevant content. You can control cookie settings through your browser. We use Google Analytics and may use advertising cookies for remarketing.' },
              { title: 'Data Security', body: 'We implement appropriate technical measures to protect your personal information. However, no internet transmission is 100% secure, and we cannot guarantee absolute security.' },
              { title: 'Contact', body: 'For privacy-related questions, contact us at privacy@peptidewinner.com.' },
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

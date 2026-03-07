import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'About PeptideWinner — Our Mission',
  description: 'PeptideWinner was built to bring transparency to the peptide therapy market. Learn our story.',
}

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section style={{ background: 'linear-gradient(160deg, #0F3460 0%, #1E4D8C 100%)', padding: '96px 24px' }}>
          <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
            <h1 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 'clamp(36px, 5vw, 56px)', color: 'white', marginBottom: 16 }}>
              PeptideWinner
            </h1>
            <p style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 'clamp(20px, 3vw, 28px)', color: 'rgba(255,255,255,0.8)' }}>
              We built the resource we wished existed.
            </p>
          </div>
        </section>

        {/* Founder story */}
        <section style={{ background: 'white', padding: '80px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>
            <div>
              <blockquote style={{
                fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 22, color: '#0F172A',
                borderLeft: '4px solid #0EA5E9', paddingLeft: 24, fontStyle: 'italic',
                lineHeight: 1.5, marginBottom: 32,
              }}>
                "I was paying $875 a month for a peptide protocol and had no idea if the pharmacy was even legitimate. So I built the tool I needed."
              </blockquote>

              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: '#374151', lineHeight: 1.75, marginBottom: 20 }}>
                We know it is difficult to compare pricing and providers directly. It is even harder to verify where your compounded peptides are coming from. Social media bombards you with ads, and transparent pricing is nearly impossible to find.
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: '#374151', lineHeight: 1.75, marginBottom: 20 }}>
                PeptideWinner was built to fix that. We are a comparison resource for real people — we do not sell medications, we do not prescribe them. We help you navigate the ecosystem.
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: '#374151', lineHeight: 1.75 }}>
                Every provider on our platform has been verified for physician licensing, pharmacy registration, and pricing transparency. Our rankings are driven by patient reviews, not advertising spend.
              </p>
            </div>

            <div style={{ background: '#F8FAFC', borderRadius: 24, padding: 48, textAlign: 'center' }}>
              <div style={{ width: 120, height: 120, borderRadius: '50%', background: 'linear-gradient(135deg, #0F3460, #0EA5E9)', margin: '0 auto 24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 48, color: 'white' }}>PW</span>
              </div>
              <h2 style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 22, color: '#0F172A', marginBottom: 8 }}>The PeptideWinner Team</h2>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#6B7280', lineHeight: 1.6 }}>
                A team of patients, researchers, and health journalists passionate about bringing transparency to the peptide therapy market.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section style={{ background: '#F8FAFC', padding: '80px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 38, color: '#0F172A', textAlign: 'center', marginBottom: 48 }}>
              What we stand for.
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 32 }}>
              {[
                { icon: '🔬', title: 'Evidence First', body: 'Every claim we make is backed by peer-reviewed research. We link to sources and are transparent about the limits of current evidence.' },
                { icon: '💰', title: 'Honest Economics', body: 'We earn affiliate commissions from providers. We disclose this on every page and never allow it to influence rankings or editorial coverage.' },
                { icon: '🏥', title: 'Patient Safety', body: 'We only list providers who work with licensed physicians and FDA-registered pharmacies. No exceptions, no grey areas.' },
                { icon: '📊', title: 'Real Reviews', body: 'Our reviews come from real patients. We moderate for authenticity and remove fake or paid submissions immediately.' },
              ].map(v => (
                <div key={v.title} style={{ background: 'white', borderRadius: 16, padding: 28, border: '1px solid #E2E8F0' }}>
                  <div style={{ fontSize: 32, marginBottom: 12 }}>{v.icon}</div>
                  <h3 style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 17, color: '#0F172A', marginBottom: 10 }}>{v.title}</h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#6B7280', lineHeight: 1.65 }}>{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: 'white', padding: '80px 24px', textAlign: 'center' }}>
          <div style={{ maxWidth: 560, margin: '0 auto' }}>
            <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 36, color: '#0F172A', marginBottom: 16 }}>
              Ready to find your provider?
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: '#6B7280', marginBottom: 32 }}>
              Take our 2-minute quiz and get matched to verified peptide therapy providers that fit your goals and budget.
            </p>
            <Link href="/start" className="btn-primary" style={{ fontSize: 16, padding: '14px 32px' }}>
              Take the Matching Quiz
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

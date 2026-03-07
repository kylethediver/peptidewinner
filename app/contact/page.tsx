import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Contact PeptideWinner',
}

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main>
        <section style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0', padding: '64px 24px 48px' }}>
          <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
            <h1 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 48, color: '#0F172A', marginBottom: 16 }}>Contact Us</h1>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 17, color: '#6B7280', lineHeight: 1.6 }}>
              Questions, partnerships, provider listings, or press inquiries — we reply within 24 hours.
            </p>
          </div>
        </section>

        <section style={{ padding: '64px 24px 96px' }}>
          <div style={{ maxWidth: 600, margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
              <div>
                <label style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 600, color: '#374151', display: 'block', marginBottom: 6 }}>First Name</label>
                <input style={{ width: '100%', height: 44, border: '1px solid #E2E8F0', borderRadius: 8, padding: '0 14px', fontFamily: "'Inter', sans-serif", fontSize: 14, outline: 'none' }} />
              </div>
              <div>
                <label style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 600, color: '#374151', display: 'block', marginBottom: 6 }}>Last Name</label>
                <input style={{ width: '100%', height: 44, border: '1px solid #E2E8F0', borderRadius: 8, padding: '0 14px', fontFamily: "'Inter', sans-serif", fontSize: 14, outline: 'none' }} />
              </div>
            </div>
            <div style={{ marginBottom: 16 }}>
              <label style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 600, color: '#374151', display: 'block', marginBottom: 6 }}>Email</label>
              <input type="email" style={{ width: '100%', height: 44, border: '1px solid #E2E8F0', borderRadius: 8, padding: '0 14px', fontFamily: "'Inter', sans-serif", fontSize: 14, outline: 'none' }} />
            </div>
            <div style={{ marginBottom: 16 }}>
              <label style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 600, color: '#374151', display: 'block', marginBottom: 6 }}>Subject</label>
              <select style={{ width: '100%', height: 44, border: '1px solid #E2E8F0', borderRadius: 8, padding: '0 14px', fontFamily: "'Inter', sans-serif", fontSize: 14, outline: 'none', background: 'white' }}>
                <option>General Question</option>
                <option>Provider Partnership / Listing</option>
                <option>Press / Media</option>
                <option>Report an Issue</option>
                <option>Write a Review</option>
              </select>
            </div>
            <div style={{ marginBottom: 24 }}>
              <label style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 600, color: '#374151', display: 'block', marginBottom: 6 }}>Message</label>
              <textarea rows={6} style={{ width: '100%', border: '1px solid #E2E8F0', borderRadius: 8, padding: '12px 14px', fontFamily: "'Inter', sans-serif", fontSize: 14, outline: 'none', resize: 'vertical' }} />
            </div>
            <button className="btn-primary" style={{ fontSize: 15, padding: '14px 32px' }}>
              Send Message
            </button>

            <div style={{ marginTop: 48, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
              {[
                { label: 'General inquiries', email: 'hello@peptidewinner.com' },
                { label: 'Provider listings', email: 'providers@peptidewinner.com' },
                { label: 'Press & media', email: 'press@peptidewinner.com' },
                { label: 'Reviews', email: 'reviews@peptidewinner.com' },
              ].map(c => (
                <div key={c.label} style={{ background: '#F8FAFC', borderRadius: 12, padding: 20, border: '1px solid #E2E8F0' }}>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#9CA3AF', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{c.label}</div>
                  <a href={`mailto:${c.email}`} style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#0EA5E9', textDecoration: 'none', fontWeight: 500 }}>{c.email}</a>
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

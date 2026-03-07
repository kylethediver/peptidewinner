import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <>
      <Nav />
      <main>
        <section style={{ padding: '120px 24px', textAlign: 'center' }}>
          <div style={{ maxWidth: 480, margin: '0 auto' }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 80, fontWeight: 700, color: '#E2E8F0', marginBottom: 8 }}>404</div>
            <h1 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 36, color: '#0F172A', marginBottom: 16 }}>Page not found</h1>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: '#6B7280', marginBottom: 32 }}>
              The page you are looking for does not exist. Let us help you find what you need.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
              <Link href="/" className="btn-primary">Back to Home</Link>
              <Link href="/providers" className="btn-secondary">Browse Providers</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

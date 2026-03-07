import Link from 'next/link'

export default function NotFound() {
  return (
    <html>
      <body style={{ margin: 0, fontFamily: 'Inter, system-ui, sans-serif', background: '#fff' }}>
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 24px', textAlign: 'center' }}>
          <div style={{ fontSize: 80, fontWeight: 700, color: '#E2E8F0', fontFamily: 'monospace', marginBottom: 8 }}>404</div>
          <h1 style={{ fontSize: 36, color: '#0F172A', marginBottom: 16, fontFamily: 'Georgia, serif' }}>Page not found</h1>
          <p style={{ fontSize: 16, color: '#6B7280', marginBottom: 32, maxWidth: 400 }}>
            The page you are looking for does not exist. Let us help you find what you need.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/" style={{ background: '#0EA5E9', color: 'white', padding: '12px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 15 }}>Back to Home</Link>
            <Link href="/providers" style={{ background: 'white', color: '#0EA5E9', padding: '12px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 15, border: '1.5px solid #0EA5E9' }}>Browse Providers</Link>
          </div>
        </div>
      </body>
    </html>
  )
}

export default function NotFound() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 24px', textAlign: 'center', fontFamily: 'Inter, system-ui, sans-serif' }}>
      <div style={{ fontSize: 80, fontWeight: 700, color: '#E2E8F0', fontFamily: 'monospace', lineHeight: 1 }}>404</div>
      <h1 style={{ fontSize: 36, color: '#0F172A', margin: '16px 0', fontFamily: 'Georgia, serif' }}>Page not found</h1>
      <p style={{ fontSize: 16, color: '#6B7280', marginBottom: 32, maxWidth: 400, lineHeight: 1.6 }}>
        The page you are looking for does not exist.
      </p>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
        <a href="/" style={{ background: '#0EA5E9', color: 'white', padding: '12px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 600 }}>Back to Home</a>
        <a href="/providers" style={{ background: 'white', color: '#0EA5E9', padding: '12px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, border: '1.5px solid #0EA5E9' }}>Browse Providers</a>
      </div>
    </div>
  )
}

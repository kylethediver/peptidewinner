import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: '#0F172A', color: 'white', padding: '64px 24px 40px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 48, marginBottom: 48 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 16 }}>
              <span style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 22, color: 'white' }}>Peptide</span>
              <span style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 22, color: '#0EA5E9' }}>Winner</span>
              <span style={{ width: 7, height: 7, background: '#10B981', borderRadius: '50%', marginLeft: 4, display: 'inline-block' }} />
            </div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#9CA3AF', lineHeight: 1.6, maxWidth: 240 }}>
              The #1 trusted comparison guide for peptide therapy providers.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#6B7280', marginTop: 12 }}>
              *We earn commissions from providers. This never affects our rankings.
            </p>
          </div>

          <div>
            <h4 style={{ fontFamily: "'Manrope', sans-serif", fontSize: 12, fontWeight: 700, color: 'white', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Providers</h4>
            {['Compare All Providers', 'Top Rated 2026', 'Best for Weight Loss', 'Best for Recovery', 'List Your Practice'].map(item => (
              <Link key={item} href="/providers" style={{ display: 'block', fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#9CA3AF', textDecoration: 'none', marginBottom: 10 }}>{item}</Link>
            ))}
          </div>

          <div>
            <h4 style={{ fontFamily: "'Manrope', sans-serif", fontSize: 12, fontWeight: 700, color: 'white', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Peptides</h4>
            {['BPC-157', 'Sermorelin', 'CJC-1295/Ipamorelin', 'TB-500', 'Semaglutide', 'NAD+', 'PT-141'].map(item => (
              <Link key={item} href="/insights" style={{ display: 'block', fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#9CA3AF', textDecoration: 'none', marginBottom: 10 }}>{item}</Link>
            ))}
          </div>

          <div>
            <h4 style={{ fontFamily: "'Manrope', sans-serif", fontSize: 12, fontWeight: 700, color: 'white', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Company</h4>
            {[
              { label: 'About Us', href: '/about' },
              { label: 'FAQ', href: '/faq' },
              { label: 'Reviews', href: '/reviews' },
              { label: 'Contact', href: '/contact' },
              { label: 'Privacy Policy', href: '/privacy' },
              { label: 'Terms of Use', href: '/terms' },
            ].map(item => (
              <Link key={item.href} href={item.href} style={{ display: 'block', fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#9CA3AF', textDecoration: 'none', marginBottom: 10 }}>{item.label}</Link>
            ))}
          </div>
        </div>

        <div style={{ borderTop: '1px solid #1E293B', paddingTop: 32, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#6B7280' }}>© 2026 PeptideWinner.com. All rights reserved.</p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#4B5563', maxWidth: 560, lineHeight: 1.5 }}>
            <strong style={{ color: '#6B7280' }}>Disclaimer:</strong> PeptideWinner is a comparison and information website only. We do not provide medical advice or prescriptions. Consult a licensed physician before starting any peptide therapy.
          </p>
        </div>
      </div>
    </footer>
  )
}

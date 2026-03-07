import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: '#0F172A', color: 'white', paddingTop: 64, paddingBottom: 40 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 48, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 16 }}>
              <span style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 22, color: 'white' }}>Peptide</span>
              <span style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 22, color: '#0EA5E9' }}>Winner</span>
              <span style={{ width: 7, height: 7, background: '#10B981', borderRadius: '50%', display: 'inline-block', marginLeft: 2 }} />
            </div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#9CA3AF', lineHeight: 1.6, maxWidth: 260 }}>
              The #1 trusted comparison guide for peptide therapy providers. We help you find, compare, and review licensed telehealth providers.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#6B7280', marginTop: 16 }}>
              *We earn commissions from providers. This never affects our rankings.
            </p>
          </div>

          {/* Providers */}
          <div>
            <h4 style={{ fontFamily: "'Manrope', sans-serif", fontSize: 13, fontWeight: 700, color: 'white', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Providers</h4>
            {['Compare All Providers', 'Top Rated 2026', 'Best for Weight Loss', 'Best for Recovery', 'Best for Anti-Aging', 'List Your Practice'].map(item => (
              <Link key={item} href="/providers" style={{ display: 'block', fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#9CA3AF', textDecoration: 'none', marginBottom: 10 }}
                onMouseEnter={e => (e.currentTarget.style.color = 'white')}
                onMouseLeave={e => (e.currentTarget.style.color = '#9CA3AF')}>
                {item}
              </Link>
            ))}
          </div>

          {/* Peptides */}
          <div>
            <h4 style={{ fontFamily: "'Manrope', sans-serif", fontSize: 13, fontWeight: 700, color: 'white', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Peptides</h4>
            {['BPC-157', 'Sermorelin', 'CJC-1295/Ipamorelin', 'TB-500', 'Semaglutide', 'NAD+', 'PT-141'].map(item => (
              <Link key={item} href="/insights" style={{ display: 'block', fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#9CA3AF', textDecoration: 'none', marginBottom: 10 }}
                onMouseEnter={e => (e.currentTarget.style.color = 'white')}
                onMouseLeave={e => (e.currentTarget.style.color = '#9CA3AF')}>
                {item}
              </Link>
            ))}
          </div>

          {/* Company */}
          <div>
            <h4 style={{ fontFamily: "'Manrope', sans-serif", fontSize: 13, fontWeight: 700, color: 'white', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Company</h4>
            {[
              { label: 'About Us', href: '/about' },
              { label: 'FAQ', href: '/faq' },
              { label: 'Reviews', href: '/reviews' },
              { label: 'Insights', href: '/insights' },
              { label: 'Contact', href: '/contact' },
              { label: 'Privacy Policy', href: '/privacy' },
              { label: 'Terms of Use', href: '/terms' },
            ].map(item => (
              <Link key={item.href} href={item.href} style={{ display: 'block', fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#9CA3AF', textDecoration: 'none', marginBottom: 10 }}
                onMouseEnter={e => (e.currentTarget.style.color = 'white')}
                onMouseLeave={e => (e.currentTarget.style.color = '#9CA3AF')}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div style={{ borderTop: '1px solid #1E293B', paddingTop: 32, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#6B7280' }}>
            © 2026 PeptideWinner.com. All rights reserved.
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#4B5563', maxWidth: 600, lineHeight: 1.5 }}>
            <strong style={{ color: '#6B7280' }}>Disclaimer:</strong> PeptideWinner is a comparison and information website. We do not provide medical advice, diagnoses, or prescriptions. Consult a licensed physician before starting any peptide therapy. Results vary.
          </p>
        </div>
      </div>
    </footer>
  )
}

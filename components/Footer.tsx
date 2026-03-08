import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: '#0A0A0A', color: 'white', padding: 'clamp(48px,6vw,72px) 20px 32px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 40, marginBottom: 48 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 2, marginBottom: 14 }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700 }}>Peptide</span>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: '#10B981' }}>Winner</span>
            </div>
            <p style={{ fontFamily: "'Sora', sans-serif", fontSize: 13, color: '#6B7280', lineHeight: 1.6, maxWidth: 220 }}>
              The #1 trusted comparison guide for peptide therapy providers.
            </p>
            <p style={{ fontFamily: "'Sora', sans-serif", fontSize: 11, color: '#4B5563', marginTop: 10 }}>
              *Affiliate commissions do not affect rankings.
            </p>
          </div>

          {[
            {
              title: 'Providers',
              links: [
                { label: 'Compare All', href: '/providers' },
                { label: 'Best for Recovery', href: '/providers' },
                { label: 'Best for Weight Loss', href: '/providers' },
                { label: 'Best Value', href: '/providers' },
                { label: 'List Your Practice', href: '/contact' },
              ]
            },
            {
              title: 'Peptides',
              links: [
                { label: 'BPC-157', href: '/insights' },
                { label: 'Sermorelin', href: '/insights' },
                { label: 'TB-500', href: '/insights' },
                { label: 'Semaglutide', href: '/insights' },
                { label: 'NAD+', href: '/insights' },
              ]
            },
            {
              title: 'Company',
              links: [
                { label: 'About', href: '/about' },
                { label: 'Reviews', href: '/reviews' },
                { label: 'FAQ', href: '/faq' },
                { label: 'Contact', href: '/contact' },
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Terms', href: '/terms' },
              ]
            }
          ].map(col => (
            <div key={col.title}>
              <h4 style={{ fontFamily: "'Sora', sans-serif", fontSize: 11, fontWeight: 700, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>{col.title}</h4>
              {col.links.map(l => (
                <Link key={l.label} href={l.href} style={{ display: 'block', fontFamily: "'Sora', sans-serif", fontSize: 13, color: '#6B7280', textDecoration: 'none', marginBottom: 9 }}>{l.label}</Link>
              ))}
            </div>
          ))}
        </div>

        <div style={{ borderTop: '1px solid #1F2937', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontFamily: "'Sora', sans-serif", fontSize: 12, color: '#4B5563' }}>© 2026 PeptideWinner.com</p>
          <p style={{ fontFamily: "'Sora', sans-serif", fontSize: 11, color: '#374151', maxWidth: 560, lineHeight: 1.5 }}>
            PeptideWinner is for informational purposes only and does not provide medical advice. Always consult a licensed physician before starting any peptide therapy.
          </p>
        </div>
      </div>
    </footer>
  )
}

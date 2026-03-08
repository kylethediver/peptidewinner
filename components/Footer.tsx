import Link from 'next/link'

const LogoMark = () => (
  <svg width="28" height="28" viewBox="0 0 36 36" fill="none">
    <circle cx="18" cy="18" r="5" fill="#fff"/>
    <circle cx="18" cy="9" r="2.5" fill="#C8DEFA"/>
    <circle cx="25.2" cy="13.5" r="2.5" fill="#C9EDDF"/>
    <circle cx="25.2" cy="22.5" r="2.5" fill="#DDD5F5"/>
    <circle cx="18" cy="27" r="2.5" fill="#F5D8E8"/>
    <circle cx="10.8" cy="22.5" r="2.5" fill="#C8DEFA"/>
    <circle cx="10.8" cy="13.5" r="2.5" fill="#F2F0C8"/>
  </svg>
)

export default function Footer() {
  return (
    <footer style={{ background: '#0E1120', color: 'white', padding: '72px 32px 40px' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 48, marginBottom: 64 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <LogoMark />
              <div style={{ lineHeight: 1 }}>
                <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 600, color: 'white', letterSpacing: '-0.03em' }}>Peptide</span>
                <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: 10, fontWeight: 400, color: 'rgba(255,255,255,0.40)', letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: 1 }}>Winner</span>
              </div>
            </div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(255,255,255,0.35)', lineHeight: 1.75, maxWidth: 220 }}>
              Compare licensed telehealth peptide providers. Unbiased reviews, transparent pricing.
            </p>
          </div>

          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'rgba(255,255,255,0.30)', textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: 20 }}>Providers</div>
            {[
              { href: '/providers', label: 'Telehealth Providers' },
              { href: '/pharmacies', label: 'Compounding Pharmacies' },
              { href: '/start', label: 'Find My Provider' },
            ].map(l => (
              <Link key={l.href} href={l.href} style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(255,255,255,0.45)', textDecoration: 'none', marginBottom: 12, transition: 'color 0.2s' }}>{l.label}</Link>
            ))}
          </div>

          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'rgba(255,255,255,0.30)', textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: 20 }}>Peptides</div>
            {[
              { href: '/peptides/bpc-157', label: 'BPC-157' },
              { href: '/peptides/sermorelin', label: 'Sermorelin' },
              { href: '/peptides/ipamorelin', label: 'Ipamorelin' },
              { href: '/peptides/cjc-1295', label: 'CJC-1295' },
              { href: '/peptides/tb-500', label: 'TB-500' },
              { href: '/peptides/nad-plus', label: 'NAD+' },
              { href: '/peptides/pt-141', label: 'PT-141' },
              { href: '/peptides/semaglutide', label: 'Semaglutide' },
              { href: '/peptides/thymosin-alpha-1', label: 'Thymosin Alpha-1' },
              { href: '/peptides/ghk-cu', label: 'GHK-Cu' },
            ].map(l => (
              <Link key={l.href} href={l.href} style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(255,255,255,0.45)', textDecoration: 'none', marginBottom: 10 }}>{l.label}</Link>
            ))}
          </div>

          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'rgba(255,255,255,0.30)', textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: 20 }}>Resources</div>
            {[
              { href: '/insights', label: 'Insights' },
              { href: '/reviews', label: 'Reviews' },
              { href: '/faq', label: 'FAQ' },
              { href: '/about', label: 'About' },
              { href: '/contact', label: 'Contact' },
            ].map(l => (
              <Link key={l.href} href={l.href} style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(255,255,255,0.45)', textDecoration: 'none', marginBottom: 12 }}>{l.label}</Link>
            ))}
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 32, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'rgba(255,255,255,0.20)', letterSpacing: '0.04em' }}>© 2026 PeptideWinner · Affiliate disclosure: we earn commissions when you use our links.</p>
          <div style={{ display: 'flex', gap: 24 }}>
            <Link href="/privacy" style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'rgba(255,255,255,0.25)', textDecoration: 'none', letterSpacing: '0.04em' }}>Privacy</Link>
            <Link href="/terms" style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'rgba(255,255,255,0.25)', textDecoration: 'none', letterSpacing: '0.04em' }}>Terms</Link>
          </div>
        </div>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'rgba(255,255,255,0.15)', lineHeight: 1.7, marginTop: 20, maxWidth: 800 }}>
          Medical Disclaimer: The content on PeptideWinner is for informational purposes only and does not constitute medical advice. Always consult a licensed physician before beginning any peptide therapy protocol. Compounded medications are not FDA-approved finished products.
        </p>
      </div>
    </footer>
  )
}

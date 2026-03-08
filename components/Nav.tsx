'use client'
import Link from 'next/link'
import { useState } from 'react'

const LogoMark = () => (
  <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
    <circle cx="18" cy="18" r="5" fill="#0E1120"/>
    <circle cx="18" cy="9" r="2.5" fill="#C8DEFA"/>
    <circle cx="25.2" cy="13.5" r="2.5" fill="#C9EDDF"/>
    <circle cx="25.2" cy="22.5" r="2.5" fill="#DDD5F5"/>
    <circle cx="18" cy="27" r="2.5" fill="#F5D8E8"/>
    <circle cx="10.8" cy="22.5" r="2.5" fill="#C8DEFA"/>
    <circle cx="10.8" cy="13.5" r="2.5" fill="#F2F0C8"/>
  </svg>
)

export default function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: 'rgba(250,251,255,0.92)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(20,24,38,0.07)',
    }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 32px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
          <LogoMark />
          <div style={{ lineHeight: 1 }}>
            <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 600, color: '#0E1120', letterSpacing: '-0.03em' }}>Peptide</span>
            <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: 10, fontWeight: 400, color: 'var(--pw-ink-60)', letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: 1 }}>Winner</span>
          </div>
        </Link>

        <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {[
            { href: '/providers', label: 'Telehealth Providers' },
            { href: '/pharmacies', label: 'Compounding Pharmacies' },
            { href: '/reviews', label: 'Reviews' },
            { href: '/insights', label: 'Insights' },
            { href: '/faq', label: 'FAQ' },
          ].map(l => (
            <Link key={l.href} href={l.href} style={{
              fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 400,
              color: 'var(--pw-ink-60)', textDecoration: 'none',
              padding: '6px 14px', borderRadius: 8,
              transition: 'color 0.2s',
            }}>{l.label}</Link>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <Link href="/start" style={{
            background: 'var(--pw-midnight)', color: 'white',
            fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 14,
            padding: '10px 22px', borderRadius: 100, textDecoration: 'none',
            boxShadow: '0 4px 20px rgba(14,17,32,0.22)',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}>Find providers →</Link>
          <button className="nav-hamburger" onClick={() => setOpen(!open)} style={{
            display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 6,
          }}>
            <div style={{ width: 22, height: 2, background: '#0E1120', marginBottom: 5, borderRadius: 2 }} />
            <div style={{ width: 22, height: 2, background: '#0E1120', marginBottom: 5, borderRadius: 2 }} />
            <div style={{ width: 22, height: 2, background: '#0E1120', borderRadius: 2 }} />
          </button>
        </div>
      </div>

      {open && (
        <div style={{ background: 'var(--pw-white)', borderTop: '1px solid rgba(20,24,38,0.07)', padding: '12px 32px 20px' }}>
          {[
            { href: '/providers', label: 'Telehealth Providers' },
            { href: '/pharmacies', label: 'Compounding Pharmacies' },
            { href: '/reviews', label: 'Reviews' },
            { href: '/insights', label: 'Insights' },
            { href: '/faq', label: 'FAQ' },
            { href: '/start', label: 'Find Providers →' },
          ].map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
              display: 'block', fontFamily: 'var(--font-body)', fontSize: 15,
              color: 'var(--pw-ink)', textDecoration: 'none', padding: '11px 0',
              borderBottom: '1px solid rgba(20,24,38,0.06)',
            }}>{l.label}</Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  )
}

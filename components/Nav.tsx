'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: 'rgba(10,10,10,0.95)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(255,255,255,0.08)',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: 'white', letterSpacing: '-0.03em' }}>Peptide</span>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: '#10B981', letterSpacing: '-0.03em' }}>Winner</span>
        </Link>

        {/* Desktop nav */}
        <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {[
            { href: '/providers', label: 'Telehealth Providers' },
            { href: '/pharmacies', label: 'Compounding Pharmacies' },
            { href: '/reviews', label: 'Reviews' },
            { href: '/insights', label: 'Insights' },
            { href: '/faq', label: 'FAQ' },
          ].map(l => (
            <Link key={l.href} href={l.href} style={{
              fontFamily: "'Sora', sans-serif", fontSize: 13, fontWeight: 500,
              color: 'rgba(255,255,255,0.65)', textDecoration: 'none',
              padding: '6px 12px', borderRadius: 8,
              letterSpacing: '-0.01em',
            }}>{l.label}</Link>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <Link href="/start" style={{
            background: '#10B981', color: 'white',
            fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: 13,
            padding: '8px 18px', borderRadius: 100, textDecoration: 'none',
            letterSpacing: '-0.01em',
          }}>Find providers →</Link>
          <button className="nav-hamburger" onClick={() => setOpen(!open)} style={{
            display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 4,
          }}>
            <div style={{ width: 22, height: 2, background: 'white', marginBottom: 5, borderRadius: 2 }} />
            <div style={{ width: 22, height: 2, background: 'white', marginBottom: 5, borderRadius: 2 }} />
            <div style={{ width: 22, height: 2, background: 'white', borderRadius: 2 }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: '#0A0A0A', borderTop: '1px solid rgba(255,255,255,0.08)', padding: '12px 24px 20px' }}>
          {[
            { href: '/providers', label: 'Telehealth Providers' },
            { href: '/pharmacies', label: 'Compounding Pharmacies' },
            { href: '/reviews', label: 'Reviews' },
            { href: '/insights', label: 'Insights' },
            { href: '/faq', label: 'FAQ' },
            { href: '/start', label: 'Find Providers →' },
          ].map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
              display: 'block', fontFamily: "'Sora', sans-serif", fontSize: 15,
              color: 'rgba(255,255,255,0.8)', textDecoration: 'none', padding: '10px 0',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
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

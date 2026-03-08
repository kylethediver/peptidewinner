'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const links = [
    { label: 'Compare Providers', href: '/providers' },
    { label: 'Reviews', href: '/reviews' },
    { label: 'Insights', href: '/insights' },
    { label: 'About', href: '/about' },
    { label: 'FAQ', href: '/faq' },
  ]

  return (
    <nav style={{ position: 'sticky', top: 0, zIndex: 50, background: 'white', borderBottom: '1px solid #E2E8F0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}>
          <span style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 22, color: '#0F3460' }}>Peptide</span>
          <span style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 22, color: '#0EA5E9' }}>Winner</span>
          <span style={{ width: 8, height: 8, background: '#10B981', borderRadius: '50%', marginLeft: 4, display: 'inline-block' }} />
        </Link>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: 28, alignItems: 'center' }} className="hide-mobile">
          {links.map(link => (
            <Link key={link.href} href={link.href} style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 500, color: '#374151', textDecoration: 'none' }}>
              {link.label}
            </Link>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <Link href="/start" className="btn-primary" style={{ fontSize: 14, padding: '9px 18px' }}>
            Find Providers
          </Link>
          <button
            onClick={() => setMobileOpen(true)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 22, color: '#0F3460', display: 'none' }}
            aria-label="Menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', zIndex: 100 }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 280, background: 'white', padding: 32 }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
              <span style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 20, color: '#0F3460' }}>Menu</span>
              <button onClick={() => setMobileOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 20 }}>✕</button>
            </div>
            {links.map(link => (
              <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
                style={{ display: 'block', fontFamily: "'Inter', sans-serif", fontSize: 18, color: '#374151', textDecoration: 'none', padding: '14px 0', borderBottom: '1px solid #F1F5F9' }}>
                {link.label}
              </Link>
            ))}
            <Link href="/start" className="btn-primary" onClick={() => setMobileOpen(false)} style={{ marginTop: 24, width: '100%', justifyContent: 'center' }}>
              Find My Provider
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

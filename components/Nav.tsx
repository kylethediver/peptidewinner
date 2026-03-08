'use client'
import { useState } from 'react'
import Link from 'next/link'

const links = [
  { label: 'Compare', href: '/providers' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Insights', href: '/insights' },
  { label: 'FAQ', href: '/faq' },
  { label: 'About', href: '/about' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <nav style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #F3F4F6',
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 20px', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 2 }}>
            <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 20, fontWeight: 700, color: '#0A0A0A' }}>Peptide</span>
            <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 20, fontWeight: 700, color: '#10B981' }}>Winner</span>
            <span style={{ width: 6, height: 6, background: '#10B981', borderRadius: '50%', display: 'inline-block', marginLeft: 3 }} />
          </Link>

          {/* Desktop links */}
          <div className="nav-links" style={{ gap: 32, alignItems: 'center' }}>
            {links.map(l => (
              <Link key={l.href} href={l.href} style={{ fontFamily: "'Sora', sans-serif", fontSize: 14, fontWeight: 500, color: '#6B7280', textDecoration: 'none' }}>
                {l.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Link href="/start" style={{
              background: '#0A0A0A', color: 'white',
              fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: 13,
              padding: '9px 18px', borderRadius: 100, textDecoration: 'none',
            }}>Find providers</Link>

            {/* Hamburger - visible on mobile */}
            <button
              className="nav-hamburger"
              onClick={() => setOpen(true)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 6, color: '#0A0A0A', alignItems: 'center' }}
              aria-label="Menu"
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 100 }}>
          {/* Backdrop */}
          <div onClick={() => setOpen(false)} style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)' }} />
          {/* Panel */}
          <div style={{
            position: 'absolute', right: 0, top: 0, bottom: 0, width: 'min(300px, 85vw)',
            background: 'white', padding: '24px 28px',
            display: 'flex', flexDirection: 'column',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: '#0A0A0A' }}>Menu</span>
              <button onClick={() => setOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 22, color: '#6B7280' }}>✕</button>
            </div>
            {links.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
                fontFamily: "'Sora', sans-serif", fontSize: 17, fontWeight: 500,
                color: '#0A0A0A', textDecoration: 'none',
                padding: '14px 0', borderBottom: '1px solid #F9FAFB', display: 'block',
              }}>{l.label}</Link>
            ))}
            <Link href="/start" onClick={() => setOpen(false)} style={{
              marginTop: 24, background: '#0A0A0A', color: 'white',
              fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: 15,
              padding: '14px', borderRadius: 100, textDecoration: 'none',
              textAlign: 'center', display: 'block',
            }}>Find my provider →</Link>
          </div>
        </div>
      )}
    </>
  )
}

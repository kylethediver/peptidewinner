'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Search, Menu, X, ChevronRight } from 'lucide-react'

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="sticky-nav">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 22, color: '#0F3460' }}>Peptide</span>
          <span style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 22, color: '#0EA5E9' }}>Winner</span>
          <span style={{ width: 8, height: 8, background: '#10B981', borderRadius: '50%', display: 'inline-block', marginLeft: 2 }} />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex" style={{ gap: 32, alignItems: 'center' }}>
          {[
            { label: 'Compare Providers', href: '/providers' },
            { label: 'Reviews', href: '/reviews' },
            { label: 'Insights', href: '/insights' },
            { label: 'About', href: '/about' },
            { label: 'FAQ', href: '/faq' },
          ].map(link => (
            <Link key={link.href} href={link.href} style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 14, fontWeight: 500,
              color: '#374151', textDecoration: 'none',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#0EA5E9')}
            onMouseLeave={e => (e.currentTarget.style.color = '#374151')}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden md:flex" style={{ alignItems: 'center', gap: 12 }}>
          <div style={{ position: 'relative' }}>
            <Search style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: '#9CA3AF', width: 14 }} />
            <input
              placeholder="Search providers..."
              style={{
                width: 200, height: 36,
                border: '1px solid #E2E8F0', borderRadius: 100,
                paddingLeft: 32, paddingRight: 12,
                fontFamily: "'Inter', sans-serif", fontSize: 13,
                color: '#374151', outline: 'none',
              }}
            />
          </div>
          <Link href="/start" className="btn-primary" style={{ height: 40 }}>
            Find Providers <ChevronRight size={14} />
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden" onClick={() => setMobileOpen(true)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <Menu size={24} color="#0F3460" />
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 100,
          background: 'rgba(0,0,0,0.4)',
        }} onClick={() => setMobileOpen(false)}>
          <div style={{
            position: 'absolute', right: 0, top: 0, bottom: 0,
            width: 280, background: 'white', padding: 32,
          }} onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
              <span style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 20, color: '#0F3460' }}>Menu</span>
              <button onClick={() => setMobileOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                <X size={24} color="#374151" />
              </button>
            </div>
            {[
              { label: 'Compare Providers', href: '/providers' },
              { label: 'Reviews', href: '/reviews' },
              { label: 'Insights', href: '/insights' },
              { label: 'About', href: '/about' },
              { label: 'FAQ', href: '/faq' },
            ].map(link => (
              <Link key={link.href} href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{ display: 'block', fontFamily: "'Inter', sans-serif", fontSize: 18, color: '#374151', textDecoration: 'none', padding: '12px 0', borderBottom: '1px solid #F1F5F9' }}>
                {link.label}
              </Link>
            ))}
            <Link href="/start" className="btn-primary" style={{ marginTop: 24, width: '100%', justifyContent: 'center' }}>
              Find My Provider
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

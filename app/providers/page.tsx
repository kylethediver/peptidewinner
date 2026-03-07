import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ProviderCard from '@/components/ProviderCard'
import { providers } from '@/lib/data'
import { Shield } from 'lucide-react'

export const metadata = {
  title: 'Compare Peptide Therapy Providers | PeptideWinner',
  description: 'Compare all verified peptide therapy telehealth providers. Filter by peptide, price, and state availability.',
}

export default function ProvidersPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0', padding: '64px 24px 48px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <Shield size={20} color="#0EA5E9" />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#6B7280' }}>Home / Providers</span>
            </div>
            <h1 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 'clamp(32px, 4vw, 48px)', color: '#0F172A', marginBottom: 16 }}>
              Compare Verified Peptide Therapy Providers
            </h1>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 17, color: '#6B7280', maxWidth: 620, lineHeight: 1.6 }}>
              {providers.length} verified providers ranked by patient reviews, pricing transparency, and pharmacy sourcing quality.
            </p>
          </div>
        </section>

        <section style={{ padding: '48px 24px 96px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            {/* Filter bar */}
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 40, padding: '20px 24px', background: '#F8FAFC', borderRadius: 12, border: '1px solid #E2E8F0' }}>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 600, color: '#374151' }}>Filter:</span>
              {['All Peptides', 'All States', 'Price: Any', 'Sort: Top Rated'].map(filter => (
                <select key={filter} style={{
                  height: 40, border: '1px solid #E2E8F0', borderRadius: 8,
                  fontFamily: "'Inter', sans-serif", fontSize: 13, background: 'white',
                  padding: '0 14px', color: '#374151', cursor: 'pointer', outline: 'none',
                }}>
                  <option>{filter}</option>
                </select>
              ))}
            </div>

            {/* Featured first */}
            <div style={{ marginBottom: 16 }}>
              <h2 style={{ fontFamily: "'Manrope', sans-serif", fontSize: 13, fontWeight: 700, color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 20 }}>
                ⭐ Featured Providers
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 24, marginBottom: 48 }}>
                {providers.filter(p => p.featured).map(p => <ProviderCard key={p.id} provider={p} />)}
              </div>

              <h2 style={{ fontFamily: "'Manrope', sans-serif", fontSize: 13, fontWeight: 700, color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 20 }}>
                All Verified Providers
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 24 }}>
                {providers.filter(p => !p.featured).map(p => <ProviderCard key={p.id} provider={p} />)}
              </div>
            </div>

            {/* List your practice CTA */}
            <div style={{
              marginTop: 64, background: 'linear-gradient(135deg, #0F3460, #1E4D8C)',
              borderRadius: 20, padding: '48px', textAlign: 'center',
            }}>
              <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 32, color: 'white', marginBottom: 12 }}>
                Are you a peptide therapy provider?
              </h2>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: '#CBD5E1', maxWidth: 480, margin: '0 auto 24px', lineHeight: 1.6 }}>
                Get listed on PeptideWinner and reach thousands of patients actively searching for peptide therapy. Verification required.
              </p>
              <a href="mailto:providers@peptidewinner.com" className="btn-primary" style={{ fontSize: 15, padding: '14px 28px', background: 'white', color: '#0F3460' }}>
                Apply to Get Listed
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

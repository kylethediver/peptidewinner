'use client'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

// Per-peptide gradient backgrounds using brand kit pastels
const PEPTIDE_CARDS = [
  {
    slug: 'bpc-157',
    name: 'BPC-157',
    subtitle: 'Body Protection Compound',
    category: 'Recovery & Healing',
    priceRange: '$89–$199/mo',
    gradient: 'linear-gradient(145deg, #9EC8F8 0%, #C8DEFA 40%, #A8D8F0 100%)',
    description: 'Doctor-prescribed injectable peptide for accelerated tissue repair, joint healing, and gut health.',
  },
  {
    slug: 'sermorelin',
    name: 'Sermorelin',
    subtitle: 'Growth Hormone Releasing Hormone Analog',
    category: 'Anti-Aging & Hormones',
    priceRange: '$149–$299/mo',
    gradient: 'linear-gradient(145deg, #C5C0F0 0%, #DDD5F5 40%, #BFB8F0 100%)',
    description: 'Stimulates natural growth hormone release for improved sleep, body composition, and energy.',
  },
  {
    slug: 'ipamorelin',
    name: 'Ipamorelin',
    subtitle: 'Selective Growth Hormone Secretagogue',
    category: 'Anti-Aging & Hormones',
    priceRange: '$129–$249/mo',
    gradient: 'linear-gradient(145deg, #B8E8D0 0%, #C9EDDF 40%, #A8E0C8 100%)',
    description: 'One of the most selective growth hormone secretagogues with minimal side effects.',
  },
  {
    slug: 'tb-500',
    name: 'TB-500',
    subtitle: 'Thymosin Beta-4 Analog',
    category: 'Recovery & Healing',
    priceRange: '$119–$229/mo',
    gradient: 'linear-gradient(145deg, #9EC8F8 0%, #C8DEFA 40%, #B8D8F8 100%)',
    description: 'Systemic healing peptide that promotes cell migration, wound recovery, and flexibility.',
  },
  {
    slug: 'nad-plus',
    name: 'NAD+',
    subtitle: 'Nicotinamide Adenine Dinucleotide',
    category: 'Longevity & Energy',
    priceRange: '$199–$499/mo',
    gradient: 'linear-gradient(145deg, #EAE8B0 0%, #F2F0C8 40%, #E8E6A8 100%)',
    description: 'Foundational longevity coenzyme that restores cellular energy and supports DNA repair.',
  },
  {
    slug: 'pt-141',
    name: 'PT-141',
    subtitle: 'Bremelanotide — Sexual Health Peptide',
    category: 'Sexual Health',
    priceRange: '$99–$199/mo',
    gradient: 'linear-gradient(145deg, #EDBED8 0%, #F5D8E8 40%, #F0C8E0 100%)',
    description: 'FDA-approved mechanism for sexual arousal in both men and women. Non-hormonal.',
  },
  {
    slug: 'cjc-1295',
    name: 'CJC-1295',
    subtitle: 'Long-Acting GHRH Analog',
    category: 'Anti-Aging & Hormones',
    priceRange: '$149–$279/mo',
    gradient: 'linear-gradient(145deg, #C5C0F0 0%, #DDD5F5 40%, #D0C8F5 100%)',
    description: 'Extended half-life GHRH analog often stacked with Ipamorelin for synergistic GH release.',
  },
  {
    slug: 'thymosin-alpha-1',
    name: 'Thymosin α-1',
    subtitle: 'Immune System Optimizer',
    category: 'Immune & Longevity',
    priceRange: '$179–$399/mo',
    gradient: 'linear-gradient(145deg, #B8E8D0 0%, #C9EDDF 40%, #B0E0C8 100%)',
    description: 'Approved in 37 countries for immune modulation, chronic infection, and longevity protocols.',
  },
  {
    slug: 'ghk-cu',
    name: 'GHK-Cu',
    subtitle: 'Copper Peptide — Skin, Tissue & Anti-Aging',
    category: 'Anti-Aging & Skin',
    priceRange: '$79–$199/mo',
    gradient: 'linear-gradient(145deg, #EDBED8 0%, #F5D8E8 40%, #ECC8DC 100%)',
    description: 'Naturally occurring copper-binding peptide that stimulates collagen and reverses skin aging.',
  },
  {
    slug: 'semaglutide',
    name: 'Semaglutide',
    subtitle: 'GLP-1 Receptor Agonist',
    category: 'Weight Loss',
    priceRange: '$99–$299/mo',
    gradient: 'linear-gradient(145deg, #B8E8D0 0%, #C9EDDF 40%, #A8DFC8 100%)',
    description: 'Compounded GLP-1 agonist for significant weight loss. Requires medical necessity evaluation.',
  },
]

const PLACEHOLDER_IMG = '/placeholder-vial.jpeg'

export default function PeptideCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const goTo = (index: number) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setActiveIndex(index)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const next = () => goTo((activeIndex + 1) % PEPTIDE_CARDS.length)
  const prev = () => goTo((activeIndex - 1 + PEPTIDE_CARDS.length) % PEPTIDE_CARDS.length)

  useEffect(() => {
    intervalRef.current = setInterval(next, 4500)
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [activeIndex])

  const resetTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(next, 4500)
  }

  // Show 3 cards: prev (partial), active, next (partial)
  const getVisible = () => {
    const len = PEPTIDE_CARDS.length
    return [
      PEPTIDE_CARDS[(activeIndex - 1 + len) % len],
      PEPTIDE_CARDS[activeIndex],
      PEPTIDE_CARDS[(activeIndex + 1) % len],
      PEPTIDE_CARDS[(activeIndex + 2) % len],
    ]
  }

  const visible = getVisible()

  return (
    <section style={{ padding: 'clamp(64px,7vw,96px) 0', background: 'var(--pw-white)', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 32px', marginBottom: 40 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16 }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <span style={{ display: 'block', width: 32, height: 1, background: 'var(--pw-ink-30)' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.20em', textTransform: 'uppercase', color: 'var(--pw-ink-60)' }}>Peptide Library</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px,4.5vw,52px)', fontWeight: 600, color: 'var(--pw-midnight)', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: 12 }}>
              Find doctor-trusted<br />treatment options.
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 300, color: 'var(--pw-ink-60)', lineHeight: 1.7, maxWidth: 440 }}>
              Every peptide in our library is covered by licensed telehealth providers with transparent pricing.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={() => { prev(); resetTimer() }} style={{
              width: 44, height: 44, borderRadius: '50%', background: 'var(--pw-surface)',
              border: '1.5px solid rgba(20,24,38,0.12)', cursor: 'pointer',
              fontFamily: 'var(--font-mono)', fontSize: 16, color: 'var(--pw-midnight)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'background 0.2s',
            }}>←</button>
            <button onClick={() => { next(); resetTimer() }} style={{
              width: 44, height: 44, borderRadius: '50%', background: 'var(--pw-midnight)',
              border: 'none', cursor: 'pointer',
              fontFamily: 'var(--font-mono)', fontSize: 16, color: 'white',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'background 0.2s',
            }}>→</button>
          </div>
        </div>
      </div>

      {/* Carousel track */}
      <div style={{ paddingLeft: 32, display: 'flex', gap: 16, transition: isTransitioning ? 'none' : undefined, overflowX: 'hidden' }}>
        {visible.map((card, i) => {
          const isActive = i === 1
          const isPartial = i === 0 || i === 3
          return (
            <div
              key={card.slug + '-' + i}
              onClick={() => { if (!isActive) { i === 0 ? prev() : next(); resetTimer() } }}
              style={{
                flexShrink: 0,
                width: isActive ? 'clamp(300px, 38vw, 480px)' : isPartial ? 'clamp(80px, 10vw, 140px)' : 'clamp(240px, 30vw, 360px)',
                height: 'clamp(380px, 48vw, 580px)',
                borderRadius: 24,
                background: card.gradient,
                position: 'relative',
                overflow: 'hidden',
                cursor: isActive ? 'default' : 'pointer',
                transition: 'width 0.5s cubic-bezier(0.22,1,0.36,1), opacity 0.5s',
                opacity: isPartial ? 0.5 : 1,
                flexDirection: 'column',
                display: 'flex',
              }}
            >
              {/* Product image — centered */}
              <div style={{
                position: 'absolute', inset: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                paddingTop: 40,
              }}>
                <img
                  src={PLACEHOLDER_IMG}
                  alt={card.name}
                  style={{
                    height: '62%',
                    width: 'auto',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 20px 40px rgba(14,17,32,0.18))',
                    opacity: isActive ? 1 : 0.7,
                    transition: 'opacity 0.5s',
                  }}
                />
              </div>

              {/* Peptide name — top right */}
              {isActive && (
                <div style={{ position: 'absolute', top: 24, right: 24, textAlign: 'right' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px,4vw,48px)', fontWeight: 700, color: 'var(--pw-midnight)', letterSpacing: '-0.03em', lineHeight: 0.95 }}>{card.name}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'rgba(14,17,32,0.45)', letterSpacing: '0.10em', textTransform: 'uppercase', marginTop: 6 }}>{card.category}</div>
                </div>
              )}

              {/* Frosted bottom strip */}
              {isActive && (
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  background: 'linear-gradient(to bottom, rgba(14,17,32,0) 0%, rgba(14,17,32,0.65) 40%, rgba(14,17,32,0.88) 100%)',
                  padding: '48px 24px 24px',
                }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 600, color: 'white', letterSpacing: '-0.01em', marginBottom: 4 }}>{card.subtitle}</div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 300, color: 'rgba(255,255,255,0.65)', lineHeight: 1.6, marginBottom: 16 }}>{card.description}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.70)', letterSpacing: '0.04em' }}>{card.priceRange}</span>
                    <Link
                      href={`/peptides/${card.slug}`}
                      style={{
                        background: 'white', color: 'var(--pw-midnight)',
                        fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 13,
                        padding: '10px 20px', borderRadius: 100, textDecoration: 'none',
                        whiteSpace: 'nowrap', boxShadow: '0 4px 16px rgba(0,0,0,0.20)',
                      }}
                    >Find a provider →</Link>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Dot indicators */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 28 }}>
        {PEPTIDE_CARDS.map((_, i) => (
          <button
            key={i}
            onClick={() => { goTo(i); resetTimer() }}
            style={{
              width: i === activeIndex ? 24 : 6,
              height: 6, borderRadius: 100,
              background: i === activeIndex ? 'var(--pw-midnight)' : 'rgba(20,24,38,0.15)',
              border: 'none', cursor: 'pointer', padding: 0,
              transition: 'width 0.3s, background 0.3s',
            }}
          />
        ))}
      </div>
    </section>
  )
}

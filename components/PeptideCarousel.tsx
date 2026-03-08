'use client'
import Link from 'next/link'
import { useState, useEffect, useRef, useCallback } from 'react'

const CARDS = [
  { slug: 'bpc-157',          name: 'BPC-157',        subtitle: 'Body Protection Compound',                 category: 'Recovery & Healing',    priceRange: '$89–$199/mo',  gradient: 'linear-gradient(160deg,#7BB8F5 0%,#C8DEFA 60%,#A8CCF0 100%)', description: 'Doctor-prescribed injectable for accelerated tissue repair, joint healing, and gut health.' },
  { slug: 'sermorelin',       name: 'Sermorelin',     subtitle: 'Growth Hormone Releasing Hormone Analog', category: 'Anti-Aging & Hormones', priceRange: '$149–$299/mo', gradient: 'linear-gradient(160deg,#A098E8 0%,#DDD5F5 60%,#C0B8F0 100%)', description: 'Stimulates natural GH release for improved sleep, body composition, and energy.' },
  { slug: 'ipamorelin',       name: 'Ipamorelin',     subtitle: 'Selective Growth Hormone Secretagogue',   category: 'Anti-Aging & Hormones', priceRange: '$129–$249/mo', gradient: 'linear-gradient(160deg,#7ED4B0 0%,#C9EDDF 60%,#A0DFC8 100%)', description: 'One of the most selective GH secretagogues — clean pulse release with minimal side effects.' },
  { slug: 'tb-500',           name: 'TB-500',         subtitle: 'Thymosin Beta-4 Analog',                  category: 'Recovery & Healing',    priceRange: '$119–$229/mo', gradient: 'linear-gradient(160deg,#5AACE0 0%,#C8DEFA 60%,#8CC8F0 100%)', description: 'Systemic healing peptide that promotes cell migration, wound recovery, and flexibility.' },
  { slug: 'nad-plus',         name: 'NAD+',           subtitle: 'Nicotinamide Adenine Dinucleotide',        category: 'Longevity & Energy',    priceRange: '$199–$499/mo', gradient: 'linear-gradient(160deg,#D8D490 0%,#F2F0C8 60%,#E8E4A8 100%)', description: 'Foundational longevity coenzyme that restores cellular energy and supports DNA repair.' },
  { slug: 'pt-141',           name: 'PT-141',         subtitle: 'Bremelanotide — Sexual Health Peptide',   category: 'Sexual Health',         priceRange: '$99–$199/mo',  gradient: 'linear-gradient(160deg,#E898C8 0%,#F5D8E8 60%,#F0B8D8 100%)', description: 'FDA-approved mechanism for sexual arousal in both men and women. Non-hormonal.' },
  { slug: 'cjc-1295',         name: 'CJC-1295',       subtitle: 'Long-Acting GHRH Analog',                 category: 'Anti-Aging & Hormones', priceRange: '$149–$279/mo', gradient: 'linear-gradient(160deg,#A098E8 0%,#DDD5F5 60%,#BEB4F0 100%)', description: 'Extended half-life GHRH analog stacked with Ipamorelin for synergistic GH release.' },
  { slug: 'thymosin-alpha-1', name: 'Thymosin α-1',  subtitle: 'Immune System Optimizer',                 category: 'Immune & Longevity',    priceRange: '$179–$399/mo', gradient: 'linear-gradient(160deg,#70C8A8 0%,#C9EDDF 60%,#98DCC0 100%)', description: 'Approved in 37 countries for immune modulation, chronic infection, and longevity.' },
  { slug: 'ghk-cu',           name: 'GHK-Cu',         subtitle: 'Copper Peptide — Anti-Aging & Skin',      category: 'Anti-Aging & Skin',     priceRange: '$79–$199/mo',  gradient: 'linear-gradient(160deg,#E090C0 0%,#F5D8E8 60%,#ECC0D8 100%)', description: 'Naturally occurring copper-binding peptide that stimulates collagen production.' },
  { slug: 'semaglutide',      name: 'Semaglutide',    subtitle: 'GLP-1 Receptor Agonist',                  category: 'Weight Loss',           priceRange: '$99–$299/mo',  gradient: 'linear-gradient(160deg,#60C4A0 0%,#C9EDDF 60%,#88D8B8 100%)', description: 'Compounded GLP-1 agonist for significant weight loss. Requires medical necessity.' },
]

// Card dimensions matching GLP Winner exactly
// Desktop: 384px wide, 539px tall | Mobile: 244px wide, 326px tall
// Gap between cards: 24px (pr-6 equivalent)
const DESKTOP_W = 384
const DESKTOP_H = 539
const MOBILE_W  = 244
const MOBILE_H  = 326
const GAP       = 20  // gap between cards

export default function PeptideCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const autoRef   = useRef<NodeJS.Timeout | null>(null)
  const pointerX  = useRef(0)
  const isDrag    = useRef(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const cardW = isMobile ? MOBILE_W : DESKTOP_W
  const step  = cardW + GAP

  const resetAuto = useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current)
    autoRef.current = setInterval(() =>
      setCurrentIndex(i => (i + 1) % CARDS.length), 4000)
  }, [])

  useEffect(() => { resetAuto(); return () => { if (autoRef.current) clearInterval(autoRef.current) } }, [resetAuto])

  const goTo = (i: number) => {
    setCurrentIndex(((i % CARDS.length) + CARDS.length) % CARDS.length)
    resetAuto()
  }

  const onPointerDown = (e: React.PointerEvent) => {
    pointerX.current = e.clientX
    isDrag.current = true
  }
  const onPointerUp = (e: React.PointerEvent) => {
    if (!isDrag.current) return
    isDrag.current = false
    const diff = pointerX.current - e.clientX
    if (diff > 40)       goTo(currentIndex + 1)
    else if (diff < -40) goTo(currentIndex - 1)
  }

  const translateX = currentIndex * step

  return (
    <section style={{ padding: 'clamp(64px,7vw,96px) 0', background: 'var(--pw-white)' }}>

      {/* ── Header ── */}
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 clamp(20px,5vw,48px)', marginBottom: 36 }}>
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
            <button onClick={() => goTo(currentIndex - 1)} aria-label="Previous" style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--pw-surface)', border: '1.5px solid rgba(20,24,38,0.12)', cursor: 'pointer', fontSize: 15, color: 'var(--pw-midnight)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>←</button>
            <button onClick={() => goTo(currentIndex + 1)} aria-label="Next"     style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--pw-midnight)', border: 'none',                                cursor: 'pointer', fontSize: 15, color: 'white',                display: 'flex', alignItems: 'center', justifyContent: 'center' }}>→</button>
          </div>
        </div>
      </div>

      {/* ── Carousel viewport ── overflow:hidden, full bleed */}
      <div
        style={{ overflow: 'hidden', cursor: 'grab' }}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerLeave={(e) => { if (isDrag.current) onPointerUp(e) }}
      >
        {/* Track — slides left via translateX */}
        <div style={{
          display: 'flex',
          paddingLeft: 'clamp(20px,5vw,48px)', // mirrors page margin so first card aligns with text
          transform: `translateX(-${translateX}px)`,
          transition: 'transform 0.52s cubic-bezier(0.22,1,0.36,1)',
          willChange: 'transform',
          userSelect: 'none',
        }}>
          {CARDS.map((card) => (
            // Wrapper: fixed width + right padding = gap
            <div
              key={card.slug}
              style={{
                flexShrink: 0,
                width: isMobile ? MOBILE_W + GAP : DESKTOP_W + GAP,
                paddingRight: GAP,
              }}
            >
              {/* The actual card */}
              <div style={{
                width: '100%',
                height: isMobile ? MOBILE_H : DESKTOP_H,
                borderRadius: 20,
                background: card.gradient,
                position: 'relative',
                overflow: 'hidden',
              }}>

                {/* Name — top left */}
                <div style={{ position: 'absolute', top: 20, left: 20, right: 20, zIndex: 2 }}>
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: isMobile ? 22 : 28,
                    fontWeight: 700,
                    color: 'var(--pw-midnight)',
                    letterSpacing: '-0.03em',
                    lineHeight: 1.0,
                  }}>{card.name}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'rgba(14,17,32,0.40)', letterSpacing: '0.14em', textTransform: 'uppercase', marginTop: 5 }}>{card.category}</div>
                </div>

                {/* Product image — centered in upper 60% */}
                <div style={{
                  position: 'absolute', top: 55, left: 0, right: 0,
                  bottom: isMobile ? 130 : 160,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <img
                    src="/placeholder-vial.png"
                    alt={card.name}
                    draggable={false}
                    style={{
                      height: '100%', width: 'auto', objectFit: 'contain',
                      filter: 'drop-shadow(0 10px 20px rgba(14,17,32,0.16))',
                      pointerEvents: 'none',
                    }}
                  />
                </div>

                {/* Frosted dark bottom — always visible on every card */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  background: 'linear-gradient(to bottom, rgba(14,17,32,0) 0%, rgba(14,17,32,0.52) 28%, rgba(14,17,32,0.83) 100%)',
                  padding: isMobile ? '36px 16px 16px' : '48px 20px 20px',
                  zIndex: 2,
                }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: isMobile ? 12 : 13, fontWeight: 600, color: 'white', letterSpacing: '-0.01em', marginBottom: 4, lineHeight: 1.3 }}>{card.subtitle}</div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: isMobile ? 11 : 12, fontWeight: 300, color: 'rgba(255,255,255,0.62)', lineHeight: 1.55, marginBottom: isMobile ? 10 : 14 }}>{card.description}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: isMobile ? 9 : 10, fontWeight: 700, color: 'rgba(255,255,255,0.58)', letterSpacing: '0.02em' }}>{card.priceRange}</span>
                    <Link
                      href={`/peptides/${card.slug}`}
                      onClick={e => e.stopPropagation()}
                      style={{
                        background: 'white', color: 'var(--pw-midnight)',
                        fontFamily: 'var(--font-body)', fontWeight: 500,
                        fontSize: isMobile ? 11 : 12,
                        padding: isMobile ? '7px 13px' : '9px 16px',
                        borderRadius: 100, textDecoration: 'none',
                        whiteSpace: 'nowrap',
                        boxShadow: '0 3px 12px rgba(0,0,0,0.18)',
                        flexShrink: 0,
                      }}
                    >Find a provider ›</Link>
                  </div>
                </div>

              </div>
            </div>
          ))}

          {/* Trailing spacer */}
          <div style={{ flexShrink: 0, width: 'clamp(20px,5vw,48px)' }} />
        </div>
      </div>

      {/* ── Dot indicators ── */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 24 }}>
        {CARDS.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: i === currentIndex ? 22 : 6, height: 6, borderRadius: 100,
              background: i === currentIndex ? 'var(--pw-midnight)' : 'rgba(20,24,38,0.15)',
              border: 'none', cursor: 'pointer', padding: 0,
              transition: 'width 0.3s cubic-bezier(0.22,1,0.36,1), background 0.3s',
            }}
          />
        ))}
      </div>

    </section>
  )
}

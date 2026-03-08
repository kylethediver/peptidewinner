import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { peptides } from '@/lib/data'

export default function PeptidesPage() {
  return (
    <>
      <Nav />
      <main style={{ background:'#080C10', minHeight:'100vh', padding:'clamp(48px,6vw,80px) 24px' }}>
        <div style={{ maxWidth:1100, margin:'0 auto' }}>
          <p style={{ fontFamily:"'Sora', sans-serif", fontSize:11, fontWeight:700, color:'#10B981', textTransform:'uppercase', letterSpacing:'0.14em', marginBottom:16 }}>Peptide Library</p>
          <h1 style={{ fontFamily:"'Playfair Display', serif", fontSize:'clamp(32px,5vw,60px)', color:'white', fontWeight:800, letterSpacing:'-0.03em', marginBottom:16, lineHeight:1.08 }}>
            Peptide Therapy<br />Reference Guide
          </h1>
          <p style={{ fontFamily:"'Sora', sans-serif", fontSize:16, color:'rgba(255,255,255,0.45)', maxWidth:560, lineHeight:1.7, marginBottom:56 }}>
            Learn about each peptide, how it works, what it treats, and find licensed telehealth providers who offer it.
          </p>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(260px, 1fr))', gap:16 }}>
            {peptides.map(p => (
              <Link key={p.slug} href={`/peptides/${p.slug}`} style={{ textDecoration:'none' }}>
                <div style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:22, padding:'28px 24px', transition:'border-color 0.2s' }}>
                  <div style={{ fontSize:40, marginBottom:16 }}>{p.emoji}</div>
                  <div style={{ fontFamily:"'Sora', sans-serif", fontSize:10, fontWeight:700, color:p.color, textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:8 }}>{p.category}</div>
                  <div style={{ fontFamily:"'Playfair Display', serif", fontWeight:700, fontSize:22, color:'white', marginBottom:6, letterSpacing:'-0.02em' }}>{p.name}</div>
                  <div style={{ fontFamily:"'Sora', sans-serif", fontSize:13, color:'rgba(255,255,255,0.4)', marginBottom:16, lineHeight:1.5 }}>{p.subtitle}</div>
                  <div style={{ fontFamily:"'Sora', sans-serif", fontSize:12, fontWeight:600, color:p.color }}>{p.priceRange}</div>
                  <div style={{ marginTop:20, fontFamily:"'Sora', sans-serif", fontSize:12, fontWeight:600, color:'rgba(255,255,255,0.5)' }}>Learn more →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

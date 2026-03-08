import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { peptides } from '@/lib/data'

const categoryColors: Record<string,string> = {
  'Recovery & Healing':   '#C8DEFA',
  'Anti-Aging & Hormones':'#DDD5F5',
  'Anti-Aging & Skin':    '#F5D8E8',
  'Longevity & Energy':   '#F2F0C8',
  'Sexual Health':        '#F5D8E8',
  'Weight Loss':          '#C9EDDF',
  'Weight & Metabolic':   '#C9EDDF',
  'Immune & Longevity':   '#C9EDDF',
  'Performance & Recovery':'#C8DEFA',
}

export default function PeptidesPage() {
  return (
    <>
      <Nav />
      <main style={{ background:'var(--pw-white)', minHeight:'100vh' }}>
        <section style={{ padding:'clamp(64px,7vw,96px) 32px', background:'var(--pw-midnight)', position:'relative', overflow:'hidden' }}>
          <div style={{ position:'absolute', top:-80, left:-80, width:500, height:500, borderRadius:'50%', background:'var(--pw-lavender)', filter:'blur(80px)', opacity:0.25, pointerEvents:'none' }} />
          <div style={{ position:'absolute', bottom:-60, right:-60, width:400, height:400, borderRadius:'50%', background:'var(--pw-mint)', filter:'blur(80px)', opacity:0.20, pointerEvents:'none' }} />
          <div style={{ maxWidth:1160, margin:'0 auto', position:'relative', zIndex:1 }}>
            <div style={{ display:'inline-flex', alignItems:'center', gap:10, marginBottom:24 }}>
              <span style={{ display:'block', width:32, height:1, background:'rgba(255,255,255,0.20)' }} />
              <span style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.20em', textTransform:'uppercase', color:'rgba(255,255,255,0.40)' }}>Peptide Library</span>
            </div>
            <h1 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(40px,6vw,72px)', color:'white', fontWeight:700, letterSpacing:'-0.03em', lineHeight:0.95, marginBottom:20 }}>
              Peptide Therapy<br/>
              <span style={{ background:'linear-gradient(135deg,#C8DEFA,#DDD5F5,#F5D8E8)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>Reference Guide</span>
            </h1>
            <p style={{ fontFamily:'var(--font-body)', fontSize:18, fontWeight:300, color:'rgba(255,255,255,0.50)', maxWidth:480, lineHeight:1.75 }}>
              Learn about each peptide, how it works, what it treats, and find licensed telehealth providers who offer it.
            </p>
          </div>
        </section>

        <section style={{ padding:'clamp(48px,5vw,72px) 32px' }}>
          <div style={{ maxWidth:1160, margin:'0 auto' }}>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(220px, 1fr))', gap:14 }}>
              {peptides.map(p => {
                const bg = categoryColors[p.category] || '#F5F6FA'
                return (
                  <Link key={p.slug} href={`/peptides/${p.slug}`} style={{ textDecoration:'none' }}>
                    <div style={{ background:bg, borderRadius:20, padding:'28px 24px 24px', cursor:'pointer', transition:'transform 0.2s, box-shadow 0.2s', height:'100%' }}>
                      <div style={{ fontSize:32, marginBottom:14 }}>{p.emoji}</div>
                      <div style={{ fontFamily:'var(--font-mono)', fontSize:10, color:'rgba(14,17,32,0.45)', textTransform:'uppercase', letterSpacing:'0.12em', marginBottom:8 }}>{p.category}</div>
                      <div style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:18, color:'var(--pw-midnight)', marginBottom:6, letterSpacing:'-0.01em' }}>{p.name}</div>
                      <div style={{ fontFamily:'var(--font-body)', fontSize:13, color:'rgba(14,17,32,0.55)', marginBottom:16, lineHeight:1.5 }}>{p.subtitle}</div>
                      <div style={{ fontFamily:'var(--font-mono)', fontSize:12, fontWeight:700, color:'var(--pw-midnight)', letterSpacing:'0.02em' }}>{p.priceRange}</div>
                      <div style={{ marginTop:14, fontFamily:'var(--font-body)', fontSize:13, fontWeight:500, color:'var(--pw-midnight)' }}>Learn more →</div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { pharmacies } from '@/lib/data'

export default function PharmaciesPage() {
  return (
    <>
      <Nav />
      <main style={{ background:'var(--pw-white)', minHeight:'100vh' }}>
        <section style={{ padding:'clamp(64px,7vw,96px) 32px', background:'var(--pw-midnight)', position:'relative', overflow:'hidden' }}>
          <div style={{ position:'absolute', top:-80, right:-80, width:500, height:500, borderRadius:'50%', background:'var(--pw-mint)', filter:'blur(80px)', opacity:0.20, pointerEvents:'none' }} />
          <div style={{ maxWidth:1160, margin:'0 auto', position:'relative', zIndex:1 }}>
            <div style={{ display:'inline-flex', alignItems:'center', gap:10, marginBottom:24 }}>
              <span style={{ display:'block', width:32, height:1, background:'rgba(255,255,255,0.20)' }} />
              <span style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.20em', textTransform:'uppercase', color:'rgba(255,255,255,0.40)' }}>Compounding Pharmacies</span>
            </div>
            <h1 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(40px,6vw,72px)', color:'white', fontWeight:700, letterSpacing:'-0.03em', lineHeight:0.95, marginBottom:20 }}>
              Verified compounding<br/>
              <span style={{ background:'linear-gradient(135deg,#C9EDDF,#C8DEFA)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>pharmacies.</span>
            </h1>
            <p style={{ fontFamily:'var(--font-body)', fontSize:18, fontWeight:300, color:'rgba(255,255,255,0.50)', maxWidth:520, lineHeight:1.75 }}>
              Every pharmacy in our directory is PCAB-accredited and licensed for sterile compounding across the US.
            </p>
          </div>
        </section>
        <section style={{ padding:'clamp(48px,5vw,72px) 32px' }}>
          <div style={{ maxWidth:1160, margin:'0 auto' }}>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(320px, 1fr))', gap:16 }}>
              {pharmacies.map((ph, i) => (
                <div key={i} style={{ background:'white', borderRadius:20, padding:'28px', border:'1px solid rgba(20,24,38,0.07)', boxShadow:'0 2px 12px rgba(14,17,32,0.05)' }}>
                  <div style={{ display:'flex', alignItems:'flex-start', gap:14, marginBottom:16 }}>
                    <div style={{ width:44, height:44, borderRadius:12, background:'var(--pw-mint)', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'var(--font-mono)', fontWeight:700, fontSize:14, color:'#1A5C3A', flexShrink:0 }}>{ph.logo}</div>
                    <div>
                      <div style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:17, color:'var(--pw-midnight)', letterSpacing:'-0.01em' }}>{ph.name}</div>
                      <div style={{ fontFamily:'var(--font-mono)', fontSize:10, color:'var(--pw-ink-60)', letterSpacing:'0.06em', textTransform:'uppercase', marginTop:3 }}>{ph.location}</div>
                    </div>
                    {ph.pcab && <span style={{ marginLeft:'auto', background:'var(--pw-mint)', color:'#1A5C3A', fontFamily:'var(--font-mono)', fontSize:9, fontWeight:700, padding:'3px 10px', borderRadius:100, letterSpacing:'0.08em', textTransform:'uppercase', whiteSpace:'nowrap' }}>PCAB ✓</span>}
                  </div>
                  <p style={{ fontFamily:'var(--font-body)', fontSize:14, fontWeight:300, color:'var(--pw-ink-60)', lineHeight:1.7, marginBottom:14 }}>{ph.description}</p>
                  <div style={{ display:'flex', flexWrap:'wrap', gap:5 }}>
                    {ph.peptides?.slice(0,4).map((pp:string) => (
                      <span key={pp} style={{ background:'var(--pw-surface)', color:'var(--pw-ink-60)', fontFamily:'var(--font-mono)', fontSize:10, padding:'3px 10px', borderRadius:100, letterSpacing:'0.06em', textTransform:'uppercase' }}>{pp}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

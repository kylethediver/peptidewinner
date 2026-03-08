import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main style={{ background:'var(--pw-white)', minHeight:'100vh' }}>
        <section style={{ padding:'clamp(64px,7vw,96px) 32px', background:'var(--pw-midnight)', position:'relative', overflow:'hidden' }}>
          <div style={{ position:'absolute', top:-100, right:-100, width:600, height:600, borderRadius:'50%', background:'var(--pw-sky)', filter:'blur(80px)', opacity:0.20, pointerEvents:'none' }} />
          <div style={{ maxWidth:1160, margin:'0 auto', position:'relative', zIndex:1 }}>
            <div style={{ display:'inline-flex', alignItems:'center', gap:10, marginBottom:24 }}>
              <span style={{ display:'block', width:32, height:1, background:'rgba(255,255,255,0.20)' }} />
              <span style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.20em', textTransform:'uppercase', color:'rgba(255,255,255,0.40)' }}>About</span>
            </div>
            <h1 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(40px,6vw,72px)', color:'white', fontWeight:700, letterSpacing:'-0.03em', lineHeight:0.95, marginBottom:24 }}>
              Built for patients,<br/>
              <span style={{ background:'linear-gradient(135deg,#C8DEFA,#DDD5F5)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>not providers.</span>
            </h1>
            <p style={{ fontFamily:'var(--font-body)', fontSize:18, fontWeight:300, color:'rgba(255,255,255,0.50)', maxWidth:520, lineHeight:1.75 }}>
              PeptideWinner exists to bring clarity to a confusing market. We research, compare, and verify so you don't have to.
            </p>
          </div>
        </section>
        <section style={{ padding:'clamp(64px,7vw,96px) 32px' }}>
          <div style={{ maxWidth:760, margin:'0 auto' }}>
            {[
              { label:'Our mission', text:'Peptide therapy is one of the most promising areas in regenerative medicine — but the market is flooded with unverified providers, questionable sourcing, and confusing pricing. PeptideWinner was built to cut through the noise and give patients a trustworthy resource for finding licensed, transparent care.' },
              { label:'How we evaluate', text:"Every provider in our directory is evaluated on medical licensing, compounding pharmacy accreditation, clinical staff qualifications, pricing transparency, patient communication standards, and real patient reviews. We don't accept payment to change provider rankings." },
              { label:'Affiliate disclosure', text:'PeptideWinner earns affiliate commissions when you click provider links and make a purchase. This helps fund our research. Our editorial rankings are never influenced by affiliate relationships — providers earn their position through merit.' },
            ].map((s, i) => (
              <div key={i} style={{ marginBottom:56 }}>
                <div style={{ display:'inline-flex', alignItems:'center', gap:10, marginBottom:16 }}>
                  <span style={{ display:'block', width:24, height:1, background:'var(--pw-ink-30)' }} />
                  <span style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.20em', textTransform:'uppercase', color:'var(--pw-ink-60)' }}>{s.label}</span>
                </div>
                <p style={{ fontFamily:'var(--font-body)', fontSize:16, fontWeight:300, color:'var(--pw-ink)', lineHeight:1.8 }}>{s.text}</p>
              </div>
            ))}
            <Link href="/contact" style={{ display:'inline-block', background:'var(--pw-midnight)', color:'white', fontFamily:'var(--font-body)', fontWeight:500, fontSize:15, padding:'14px 32px', borderRadius:100, textDecoration:'none', boxShadow:'0 4px 20px rgba(14,17,32,0.22)' }}>Get in touch →</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

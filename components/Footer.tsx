import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background:'#050709', borderTop:'1px solid rgba(255,255,255,0.07)', padding:'60px 24px 40px' }}>
      <div style={{ maxWidth:1100, margin:'0 auto' }}>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(180px, 1fr))', gap:40, marginBottom:56 }}>
          <div>
            <div style={{ fontFamily:"'Playfair Display',serif", fontSize:22, fontWeight:800, color:'white', letterSpacing:'-0.03em', marginBottom:10 }}>
              Peptide<span style={{ color:'#10B981' }}>Winner</span>
            </div>
            <p style={{ fontFamily:"'Sora',sans-serif", fontSize:13, color:'rgba(255,255,255,0.35)', lineHeight:1.7 }}>
              Compare licensed telehealth peptide providers. Unbiased reviews, transparent pricing.
            </p>
          </div>
          <div>
            <div style={{ fontFamily:"'Sora',sans-serif", fontSize:11, fontWeight:700, color:'rgba(255,255,255,0.3)', textTransform:'uppercase', letterSpacing:'0.12em', marginBottom:16 }}>Providers</div>
            {[
              { href:'/providers', label:'Telehealth Providers' },
              { href:'/pharmacies', label:'Compounding Pharmacies' },
              { href:'/start', label:'Find My Provider' },
            ].map(l => <Link key={l.href} href={l.href} style={{ display:'block', fontFamily:"'Sora',sans-serif", fontSize:13, color:'rgba(255,255,255,0.45)', textDecoration:'none', marginBottom:10 }}>{l.label}</Link>)}
          </div>
          <div>
            <div style={{ fontFamily:"'Sora',sans-serif", fontSize:11, fontWeight:700, color:'rgba(255,255,255,0.3)', textTransform:'uppercase', letterSpacing:'0.12em', marginBottom:16 }}>Peptides</div>
            {[
              { href:'/peptides/bpc-157', label:'BPC-157' },
              { href:'/peptides/sermorelin', label:'Sermorelin' },
              { href:'/peptides/ipamorelin', label:'Ipamorelin' },
              { href:'/peptides/nad-plus', label:'NAD+' },
              { href:'/peptides/semaglutide', label:'Semaglutide' },
              { href:'/peptides/pt-141', label:'PT-141' },
            ].map(l => <Link key={l.href} href={l.href} style={{ display:'block', fontFamily:"'Sora',sans-serif", fontSize:13, color:'rgba(255,255,255,0.45)', textDecoration:'none', marginBottom:10 }}>{l.label}</Link>)}
          </div>
          <div>
            <div style={{ fontFamily:"'Sora',sans-serif", fontSize:11, fontWeight:700, color:'rgba(255,255,255,0.3)', textTransform:'uppercase', letterSpacing:'0.12em', marginBottom:16 }}>Resources</div>
            {[
              { href:'/insights', label:'Insights' },
              { href:'/reviews', label:'Reviews' },
              { href:'/faq', label:'FAQ' },
              { href:'/about', label:'About' },
              { href:'/contact', label:'Contact' },
            ].map(l => <Link key={l.href} href={l.href} style={{ display:'block', fontFamily:"'Sora',sans-serif", fontSize:13, color:'rgba(255,255,255,0.45)', textDecoration:'none', marginBottom:10 }}>{l.label}</Link>)}
          </div>
        </div>
        <div style={{ borderTop:'1px solid rgba(255,255,255,0.06)', paddingTop:28, display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:16 }}>
          <p style={{ fontFamily:"'Sora',sans-serif", fontSize:12, color:'rgba(255,255,255,0.2)' }}>© 2026 PeptideWinner. Affiliate disclosure: we earn commissions when you use our links.</p>
          <div style={{ display:'flex', gap:20 }}>
            <Link href="/privacy" style={{ fontFamily:"'Sora',sans-serif", fontSize:12, color:'rgba(255,255,255,0.25)', textDecoration:'none' }}>Privacy</Link>
            <Link href="/terms" style={{ fontFamily:"'Sora',sans-serif", fontSize:12, color:'rgba(255,255,255,0.25)', textDecoration:'none' }}>Terms</Link>
          </div>
        </div>
        <p style={{ fontFamily:"'Sora',sans-serif", fontSize:11, color:'rgba(255,255,255,0.15)', lineHeight:1.7, marginTop:20, maxWidth:800 }}>
          Medical Disclaimer: The content on PeptideWinner is for informational purposes only and does not constitute medical advice. Always consult a licensed physician before beginning any peptide therapy protocol. Compounded medications are not FDA-approved finished products.
        </p>
      </div>
    </footer>
  )
}

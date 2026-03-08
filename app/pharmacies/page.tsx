import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { pharmacies } from '@/lib/data'

function Stars({ rating, size = 13 }: { rating: number; size?: number }) {
  return (
    <span style={{ fontSize: size, letterSpacing: '-1px' }}>
      {[1,2,3,4,5].map(s => (
        <span key={s} style={{ color: s <= Math.floor(rating) ? '#F59E0B' : 'rgba(255,255,255,0.15)' }}>★</span>
      ))}
    </span>
  )
}

export default function PharmaciesPage() {
  return (
    <>
      <Nav />
      <main style={{ background:'#080C10', minHeight:'100vh' }}>

        {/* Hero */}
        <section style={{ padding:'clamp(56px,7vw,88px) 24px', background:'linear-gradient(160deg, #0D1B2A 0%, #080C10 100%)', borderBottom:'1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth:1100, margin:'0 auto' }}>
            <p style={{ fontFamily:"'Sora', sans-serif", fontSize:11, fontWeight:700, color:'#10B981', textTransform:'uppercase', letterSpacing:'0.14em', marginBottom:16 }}>Compounding Pharmacies</p>
            <h1 style={{ fontFamily:"'Playfair Display', serif", fontSize:'clamp(36px,5.5vw,68px)', color:'white', fontWeight:800, letterSpacing:'-0.03em', lineHeight:1.04, marginBottom:24 }}>
              Verify where your<br />
              <span style={{ color:'#10B981' }}>peptides are made.</span>
            </h1>
            <p style={{ fontFamily:"'Sora', sans-serif", fontSize:17, color:'rgba(255,255,255,0.5)', maxWidth:580, lineHeight:1.7, marginBottom:36 }}>
              Every peptide you receive is compounded by a pharmacy. See which pharmacies our listed providers use, verify their licensing, and understand what quality standards to expect.
            </p>
            <div style={{ display:'flex', gap:16, flexWrap:'wrap' }}>
              {[
                { label:'PCAB Accredited', desc:'Independent pharmacy accreditation' },
                { label:'USP 797/800', desc:'Sterile compounding standards' },
                { label:'Third-Party Tested', desc:'CoA with every order' },
              ].map(b => (
                <div key={b.label} style={{ background:'rgba(16,185,129,0.08)', border:'1px solid rgba(16,185,129,0.2)', borderRadius:12, padding:'12px 16px' }}>
                  <div style={{ fontFamily:"'Sora', sans-serif", fontSize:12, fontWeight:700, color:'#10B981', marginBottom:2 }}>{b.label}</div>
                  <div style={{ fontFamily:"'Sora', sans-serif", fontSize:11, color:'rgba(255,255,255,0.35)' }}>{b.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What to look for */}
        <section style={{ padding:'clamp(40px,5vw,60px) 24px', background:'#0D1117', borderBottom:'1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ maxWidth:1100, margin:'0 auto' }}>
            <h2 style={{ fontFamily:"'Sora', sans-serif", fontSize:13, fontWeight:700, color:'rgba(255,255,255,0.4)', textTransform:'uppercase', letterSpacing:'0.12em', marginBottom:24 }}>What to look for in a compounding pharmacy</h2>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))', gap:20 }}>
              {[
                { icon:'✅', title:'PCAB Accreditation', body:'The gold standard for compounding pharmacy quality. Independent verification of safety practices.' },
                { icon:'🔬', title:'USP 797/800 Compliance', body:'Federal standards for sterile and hazardous compounding. Ensures clean room quality.' },
                { icon:'📋', title:'Certificates of Analysis', body:'Third-party testing of each batch. Should be available for every order.' },
                { icon:'🏛️', title:'State Licensing', body:'Must be licensed in both their home state and every state they ship to.' },
              ].map(c => (
                <div key={c.title} style={{ background:'rgba(255,255,255,0.03)', borderRadius:16, padding:'20px 18px', border:'1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ fontSize:24, marginBottom:10 }}>{c.icon}</div>
                  <div style={{ fontFamily:"'Sora', sans-serif", fontWeight:700, fontSize:14, color:'white', marginBottom:6 }}>{c.title}</div>
                  <div style={{ fontFamily:"'Sora', sans-serif", fontSize:13, color:'rgba(255,255,255,0.4)', lineHeight:1.6 }}>{c.body}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pharmacy listings */}
        <section style={{ padding:'clamp(40px,5vw,72px) 24px', background:'#080C10' }}>
          <div style={{ maxWidth:1100, margin:'0 auto' }}>
            <h2 style={{ fontFamily:"'Playfair Display', serif", fontSize:'clamp(24px,3.5vw,40px)', color:'white', fontWeight:800, letterSpacing:'-0.025em', marginBottom:32 }}>
              Verified compounding pharmacies
            </h2>
            <div style={{ display:'flex', flexDirection:'column', gap:0 }}>
              {pharmacies.map((pharmacy, i) => (
                <div key={pharmacy.slug} style={{
                  background:'rgba(255,255,255,0.03)',
                  borderRadius: i===0 ? '16px 16px 0 0' : i===pharmacies.length-1 ? '0 0 16px 16px' : 0,
                  borderBottom: i < pharmacies.length-1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                  padding:'28px 28px',
                }}>
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', flexWrap:'wrap', gap:20 }}>
                    <div style={{ flex:1, minWidth:280 }}>
                      <div style={{ display:'flex', alignItems:'center', gap:14, marginBottom:14 }}>
                        <div style={{ width:48, height:48, borderRadius:14, background:'rgba(16,185,129,0.12)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:14, fontWeight:700, color:'#10B981', fontFamily:"'Sora', sans-serif", flexShrink:0 }}>
                          {pharmacy.logo}
                        </div>
                        <div>
                          <div style={{ fontFamily:"'Sora', sans-serif", fontWeight:700, fontSize:17, color:'white', marginBottom:3 }}>{pharmacy.name}</div>
                          <div style={{ display:'flex', alignItems:'center', gap:8 }}>
                            <Stars rating={pharmacy.rating} size={12} />
                            <span style={{ fontFamily:"'Sora', sans-serif", fontSize:12, color:'rgba(255,255,255,0.35)' }}>{pharmacy.rating} · {pharmacy.reviewCount} reviews</span>
                          </div>
                        </div>
                      </div>
                      <p style={{ fontFamily:"'Sora', sans-serif", fontSize:14, color:'rgba(255,255,255,0.5)', lineHeight:1.65, marginBottom:16, maxWidth:520 }}>{pharmacy.highlight}</p>
                      <div style={{ display:'flex', flexWrap:'wrap', gap:8, marginBottom:14 }}>
                        {pharmacy.accreditation.map(a => (
                          <span key={a} style={{ background:'rgba(16,185,129,0.1)', color:'#10B981', fontFamily:"'Sora', sans-serif", fontSize:11, fontWeight:700, padding:'3px 10px', borderRadius:100 }}>{a}</span>
                        ))}
                        <span style={{ background:'rgba(255,255,255,0.05)', color:'rgba(255,255,255,0.4)', fontFamily:"'Sora', sans-serif", fontSize:11, fontWeight:600, padding:'3px 10px', borderRadius:100 }}>📍 {pharmacy.location}</span>
                        <span style={{ background:'rgba(255,255,255,0.05)', color:'rgba(255,255,255,0.4)', fontFamily:"'Sora', sans-serif", fontSize:11, fontWeight:600, padding:'3px 10px', borderRadius:100 }}>Ships to {pharmacy.states} states</span>
                      </div>
                      <div style={{ display:'flex', flexWrap:'wrap', gap:6 }}>
                        {pharmacy.peptides.map(p => (
                          <span key={p} style={{ background:'rgba(255,255,255,0.04)', color:'rgba(255,255,255,0.5)', fontFamily:"'Sora', sans-serif", fontSize:11, padding:'2px 10px', borderRadius:100, border:'1px solid rgba(255,255,255,0.07)' }}>{p}</span>
                        ))}
                      </div>
                    </div>
                    <div style={{ display:'flex', flexDirection:'column', gap:10, alignItems:'flex-end', flexShrink:0 }}>
                      <div>
                        {pharmacy.pros.map(pro => (
                          <div key={pro} style={{ fontFamily:"'Sora', sans-serif", fontSize:12, color:'rgba(255,255,255,0.45)', marginBottom:4, textAlign:'right' }}>✓ {pro}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section style={{ padding:'32px 24px', background:'#0A0E14', borderTop:'1px solid rgba(255,255,255,0.04)' }}>
          <div style={{ maxWidth:1100, margin:'0 auto' }}>
            <p style={{ fontFamily:"'Sora', sans-serif", fontSize:12, color:'rgba(255,255,255,0.25)', lineHeight:1.7, maxWidth:760 }}>
              <strong style={{ color:'rgba(255,255,255,0.4)' }}>Disclaimer:</strong> Pharmacy information is for educational purposes only. Always verify a pharmacy's licensing directly with your state board of pharmacy and the FDA's database before receiving medication. PeptideWinner does not endorse any specific pharmacy and recommends consulting your prescribing physician regarding which compounding pharmacy is appropriate for your protocol.
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}

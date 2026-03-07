'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ChevronRight, ChevronLeft, CheckCircle } from 'lucide-react'
import { providers } from '@/lib/data'
import ProviderCard from '@/components/ProviderCard'

const questions = [
  {
    q: 'What are your primary goals?',
    sub: 'Select all that apply.',
    multi: true,
    options: [
      { label: 'Muscle Growth & Recovery', icon: '💪', value: 'muscle' },
      { label: 'Weight Loss', icon: '⚖️', value: 'weight' },
      { label: 'Anti-Aging & Longevity', icon: '⏳', value: 'aging' },
      { label: 'Energy & Performance', icon: '⚡', value: 'energy' },
      { label: 'Injury Recovery', icon: '🩹', value: 'recovery' },
      { label: 'Sexual Health', icon: '❤️', value: 'sexual' },
    ],
  },
  {
    q: 'Have you tried peptide therapy before?',
    sub: 'This helps us tailor your recommendations.',
    multi: false,
    options: [
      { label: 'Never tried peptides', icon: '🆕', value: 'never' },
      { label: 'Researching options', icon: '🔍', value: 'researching' },
      { label: 'Tried 1-2 peptides', icon: '💉', value: 'some' },
      { label: 'Experienced user', icon: '⭐', value: 'experienced' },
    ],
  },
  {
    q: "What's your monthly budget for peptide therapy?",
    sub: 'We will show you providers that fit.',
    multi: false,
    options: [
      { label: 'Under $150/month', icon: '💵', value: 'low' },
      { label: '$150 – $300/month', icon: '💴', value: 'mid' },
      { label: '$300 – $500/month', icon: '💳', value: 'high' },
      { label: 'Budget is flexible', icon: '🏦', value: 'any' },
    ],
  },
  {
    q: 'How quickly do you want to start?',
    sub: 'Some providers have faster onboarding than others.',
    multi: false,
    options: [
      { label: 'As soon as possible', icon: '🚀', value: 'asap' },
      { label: 'Within a month', icon: '📅', value: 'month' },
      { label: 'Just exploring', icon: '👀', value: 'exploring' },
    ],
  },
  {
    q: 'What matters most to you in a provider?',
    sub: 'Select your top priority.',
    multi: false,
    options: [
      { label: 'Lowest price', icon: '💰', value: 'price' },
      { label: 'Best reputation', icon: '⭐', value: 'reputation' },
      { label: 'Widest peptide selection', icon: '🔬', value: 'selection' },
      { label: 'Best support & monitoring', icon: '🏥', value: 'support' },
    ],
  },
]

export default function StartPage() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string[]>>({})
  const [done, setDone] = useState(false)

  const current = questions[step]
  const selected = answers[step] || []
  const progress = ((step) / questions.length) * 100

  const toggle = (val: string) => {
    if (current.multi) {
      setAnswers(a => ({
        ...a,
        [step]: selected.includes(val)
          ? selected.filter(v => v !== val)
          : [...selected, val],
      }))
    } else {
      setAnswers(a => ({ ...a, [step]: [val] }))
    }
  }

  const next = () => {
    if (step < questions.length - 1) setStep(s => s + 1)
    else setDone(true)
  }

  if (done) {
    return (
      <div style={{ minHeight: '100vh', background: 'white' }}>
        {/* Logo only */}
        <div style={{ padding: '20px 24px', borderBottom: '1px solid #E2E8F0' }}>
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}>
            <span style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 22, color: '#0F3460' }}>Peptide</span>
            <span style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 22, color: '#0EA5E9' }}>Winner</span>
          </Link>
        </div>

        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '64px 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>🎉</div>
            <h1 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 36, color: '#0F172A', marginBottom: 12 }}>
              Your matched providers
            </h1>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: '#6B7280' }}>
              Based on your answers, here are the best providers for you.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
            {providers.slice(0, 3).map(p => <ProviderCard key={p.id} provider={p} />)}
          </div>

          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link href="/providers" style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#0EA5E9', textDecoration: 'none', fontWeight: 600 }}>
              View all providers →
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: 'white', display: 'flex', flexDirection: 'column' }}>
      {/* Progress bar */}
      <div style={{ height: 4, background: '#E2E8F0' }}>
        <div className="quiz-progress" style={{ height: '100%', background: '#0EA5E9', width: `${progress}%` }} />
      </div>

      {/* Logo only */}
      <div style={{ padding: '20px 24px', borderBottom: '1px solid #F1F5F9' }}>
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}>
          <span style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 22, color: '#0F3460' }}>Peptide</span>
          <span style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 22, color: '#0EA5E9' }}>Winner</span>
        </Link>
      </div>

      {/* Quiz content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '48px 24px' }}>
        <div style={{ maxWidth: 640, width: '100%' }}>
          {/* Step indicator */}
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#9CA3AF', textAlign: 'center', marginBottom: 8 }}>
            Step {step + 1} of {questions.length}
          </p>

          <h1 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 32, color: '#0F172A', textAlign: 'center', marginBottom: 8 }}>
            {current.q}
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: '#6B7280', textAlign: 'center', marginBottom: 40 }}>
            {current.sub}
          </p>

          {/* Options grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 16, marginBottom: 40 }}>
            {current.options.map(opt => {
              const isSelected = selected.includes(opt.value)
              return (
                <button key={opt.value} onClick={() => toggle(opt.value)} style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: 20, borderRadius: 14, cursor: 'pointer', textAlign: 'left',
                  border: isSelected ? '2px solid #0EA5E9' : '1.5px solid #E2E8F0',
                  background: isSelected ? '#F0F9FF' : 'white',
                  transition: 'all 0.15s ease',
                  position: 'relative',
                }}>
                  <span style={{ fontSize: 28 }}>{opt.icon}</span>
                  <span style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 600, fontSize: 14, color: '#0F172A' }}>{opt.label}</span>
                  {isSelected && (
                    <CheckCircle size={18} color="#0EA5E9" style={{ position: 'absolute', top: 10, right: 10 }} />
                  )}
                </button>
              )
            })}
          </div>

          {/* Nav buttons */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {step > 0 ? (
              <button onClick={() => setStep(s => s - 1)} style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#6B7280' }}>
                <ChevronLeft size={16} /> Back
              </button>
            ) : <div />}

            <button
              onClick={next}
              disabled={selected.length === 0}
              className="btn-primary"
              style={{ fontSize: 15, padding: '12px 28px', opacity: selected.length === 0 ? 0.5 : 1 }}
            >
              {step === questions.length - 1 ? 'See My Matches' : 'Continue'} <ChevronRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

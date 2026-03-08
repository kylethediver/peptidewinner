import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PeptideWinner — Compare Peptide Therapy Providers',
  description: 'Find and compare licensed telehealth peptide therapy providers. Verified reviews, transparent pricing, and pharmacy sourcing.',
  keywords: 'peptide therapy, BPC-157, sermorelin, ipamorelin, NAD+, telehealth, compounding pharmacy',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ background: '#080C10' }}>{children}</body>
    </html>
  )
}

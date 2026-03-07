import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PeptideWinner — Find Trusted Peptide Therapy Providers',
  description: 'Compare licensed telehealth providers for peptide therapy. Read real patient reviews, verify pharmacy sourcing, and find the best peptide provider for your goals.',
  keywords: 'peptide therapy, BPC-157, sermorelin, telehealth, peptide providers, compare peptides',
  openGraph: {
    title: 'PeptideWinner — Find Trusted Peptide Therapy Providers',
    description: 'The #1 comparison guide for peptide therapy providers.',
    url: 'https://peptidewinner.com',
    siteName: 'PeptideWinner',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

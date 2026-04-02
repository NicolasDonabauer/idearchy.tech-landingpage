import type { Metadata } from 'next'
import { Archivo, Nunito } from 'next/font/google'
import './globals.css'

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '700', '800', '900'],
  variable: '--font-archivo',
  display: 'swap',
})

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-nunito',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'idearchy.tech — Your Knowledge, Finally Working',
  description:
    'Turn your scattered knowledge into an intelligent system you can talk to. Join the waitlist for early access.',
  openGraph: {
    title: 'idearchy.tech — Your Knowledge, Finally Working',
    description:
      'Turn your scattered knowledge into an intelligent system you can talk to.',
    type: 'website',
    url: 'https://idearchy.tech',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'idearchy.tech — Your Knowledge, Finally Working',
    description: 'Turn your scattered knowledge into an intelligent system you can talk to.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${nunito.variable}`}>
      <body>{children}</body>
    </html>
  )
}

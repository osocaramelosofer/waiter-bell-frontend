import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { Rubik_Mono_One, Pirata_One } from 'next/font/google'
import { Toaster } from 'sonner'
import Providers from './Providers'

const rubik = Rubik_Mono_One({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-rubik'
})
const pirata = Pirata_One({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-pirata'
})

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
})

export const metadata: Metadata = {
  title: 'Holbox Restaurant',
  description: 'Restaurant'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${rubik.variable} ${pirata.variable}`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <main className="w-full h-scree ">{children}</main>
        </Providers>
        <Toaster position="top-center" />
      </body>
    </html>
  )
}

import {Header} from '@/components/shared'
import {cn} from '@/lib/utils'
import type {Metadata} from 'next'
import {Nunito} from 'next/font/google'
import './globals.css'

const nunito = Nunito({
  subsets: ['cyrillic'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={cn('min-h-screen', nunito.className)}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}

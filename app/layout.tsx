import './globals.css'
import { Livvic } from 'next/font/google'

const livvic = Livvic({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
})

export const metadata = {
  title: 'Divas & Doom Basketball',
  description: 'Divas & Doom Basketball club is a premier youth basketball club with top notch coaches.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={livvic.className}>{
        children}
      </body>
    </html>
  )
}

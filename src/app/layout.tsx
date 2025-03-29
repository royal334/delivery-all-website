import {Inter,Poppins} from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Zipu',
  description: 'Logiostics webapp delivery',
}

// Load Inter
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', 
});

// Load Poppins
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins', 
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"  className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}

import { Poppins } from 'next/font/google'
import './globals.css'
import ConditionalHeaderFooter from '@/app/components/Layout/ConditionalHeaderFooter'
import ScrollToTop from '@/app/components/ScrollToTop'
import Aoscompo from '@/utils/aos'

const font = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${font.className}`}>
        <Aoscompo>
          <ConditionalHeaderFooter>
            {children}
          </ConditionalHeaderFooter>
        </Aoscompo>
        <ScrollToTop />
      </body>
    </html>
  )
}
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'

import { IBM_Plex_Sans_KR } from '@next/font/google';
const plex_sans = IBM_Plex_Sans_KR(
  { 
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500','600'],
  });

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <style jsx global>{`
        html {
          font-family: ${plex_sans.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

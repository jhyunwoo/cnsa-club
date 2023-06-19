import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { IBM_Plex_Sans_KR } from '@next/font/google'
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as gtag from 'lib/gtag';
import Script from 'next/script';
const plex_sans = IBM_Plex_Sans_KR({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600'],
})

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('hashChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('hashChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <SessionProvider session={session}>
      <style jsx global>{`
        html {
          font-family: ${plex_sans.style.fontFamily};
        }
      `}</style>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Component {...pageProps} />
    </SessionProvider>
  )
}

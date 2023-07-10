import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { IBM_Plex_Sans_KR } from '@next/font/google'
import { useRouter } from 'next/router';
import * as gtag from 'lib/gtag';
import Script from 'next/script';
import { useEffect } from 'react';

const plex_sans = IBM_Plex_Sans_KR({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600'],
})

export default function App({ Component, pageProps }: AppProps) {

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
   
      <>
      <style jsx global>{`
        html {
          font-family: ${plex_sans.style.fontFamily};
        }
      `}</style>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`/google-analytics`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-82BMM1EFF1', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      
      <Component {...pageProps} />
      </>
   
  )
}

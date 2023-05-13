import { GlobalProvider } from '@/context/global'
import type { AppProps } from 'next/app'
import { GlobalStyles } from '@/styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalProvider>
        <GlobalStyles />
         <Component {...pageProps} />
      </GlobalProvider>
    </>
  )
}

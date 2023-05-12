import { GlobalProvider } from '@/context/global'
import GlobalStyle from '@/styles/global'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalProvider>
        <GlobalStyle />
         <Component {...pageProps} />
      </GlobalProvider>
    </>
  )
}

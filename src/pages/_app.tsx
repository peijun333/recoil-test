import { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <RecoilRoot>
    <Component {...pageProps} />
  </RecoilRoot>
)

export default App

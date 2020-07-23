import { AppProps } from 'next/app';
import '../stylesheet/styles.css';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App;
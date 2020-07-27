import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import '../stylesheet/styles.css';
import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core';
import store from '../store';

import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress

import Header from '../components/Header/Header';
import { Router } from 'next/router';

Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <ColorModeProvider>
        <CSSReset />
        <Provider store={store}>
          <img
            className='img-background'
            src='/background/tree.jpg'
            alt='Imagine wonderful nature view...'
          />
          <Header />
          <Component {...pageProps} />
        </Provider>
      </ColorModeProvider>
    </ThemeProvider>
  )


}

export default App;
import Head from 'next/head';
interface LayoutProps {
  title: string
};

const Layout: React.FunctionComponent<LayoutProps> = ({ children, title }) => {
  return <>
    <Head>
      <title>{title} | WeatherNow</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
    </Head>
    <main>
      {children}
    </main>
  </>
};

export default Layout;
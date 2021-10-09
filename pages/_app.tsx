import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import '@styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

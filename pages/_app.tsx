import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { appWithTranslation } from 'next-i18next';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <div className="bg-white">
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default appWithTranslation(App);

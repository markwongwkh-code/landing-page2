import Image from 'next/image';

import Link from 'next/link';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import { Trans, useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Head from 'next/head';

type Props = {
  // custom props here, if any
};

const About = () => {
  const { t } = useTranslation(['common', 'about']);

  return (
    <>
      <Header />
      <div className="pt-14 pb-96 w-full text-black">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:px-8">
          <div className="pt-10 pb-2">
            <div className="py-6 text-4xl">
              <b>{t('about:about-us')}</b>
            </div>
            <div className="text-xl">
              {/* <p>{t('about:description')}</p> */}
              <Trans i18nKey={`about:description`} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', [
      'header',
      'footer',
      'about',
    ])),
  },
});

export default About;

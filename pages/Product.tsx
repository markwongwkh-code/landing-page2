import Image from 'next/image';
import Menu1 from '../public/images/bread-menu-p1.jpg';
import Menu2 from '../public/images/bread-menu-p2.jpg';
import Menu3 from '../public/images/bread-menu-p3.jpg';

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

const Product = () => {
  const { t } = useTranslation(['common', 'product']);

  return (
    <div className="bg-black flex flex-col flex-grow min-h-screen">
      <Header />
      <div>
        <div className="bg-white pt-14 w-full text-black">
          <div className="px-8 mx-auto lg:max-w-7xl">
            <div className="pt-10 pb-2">
              <div className="py-6 text-4xl text-center">
                <b>{t('product:product')}</b>
              </div>

              <div className="flex flex-col justify-center items-center py-4 md:h-auto">
                <Image
                  className="px-4 py-4 w-full border-b-2"
                  src={Menu1}
                  alt="Menu"
                />
                <Image
                  className="px-4 py-4 w-full border-b-2"
                  src={Menu2}
                  alt="Menu"
                />
                <Image className="px-4 py-4 w-full" src={Menu3} alt="Menu" />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', [
      'header',
      'footer',
      'product',
    ])),
  },
});

export default Product;

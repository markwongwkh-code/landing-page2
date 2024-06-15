import HomepagePoster from '../public/HomepagePoster_1680x706.jpg';
import Image from 'next/image';

import Link from 'next/link';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

type Props = {
  // custom props here, if any
};

const Home = () => {
  const { t } = useTranslation(['common']);
  const router = useRouter();

  const handleImageClick = () => {
    router.push('/abc');
  };

  return (
    <>
      <Header />
      <div className="w-full">
        <Image
          className="pt-10 w-full"
          src={HomepagePoster}
          alt="HomepagePoster"
        />
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:px-8">
          <div className="pt-10 pb-2 text-center">
            <b className="text-black text-3xl">
              {t('homepage:delicious-collections')}
            </b>
          </div>
          <div className="py-4 items-center justify-center md:h-auto md:flex md:border-b-2">
            <Image
              className="px-4 pb-8 md:w-1/2 md:py-0"
              src={HomepagePoster}
              alt="HomepagePoster"
              // width="10000"
              // height="1000"
            />
            <Image
              className="px-4 md:w-1/2 md:border-l-2"
              src={HomepagePoster}
              alt="HomepagePoster"
              // width="10000"
              // height="1000"
            />
          </div>
          <div className="py-4 items-center justify-center md:h-auto md:flex">
            <Image
              className="px-4 pb-8 md:w-1/2 md:py-0"
              src={HomepagePoster}
              alt="HomepagePoster"
              // width="10000"
              // height="1000"
            />
            <Image
              className="px-4 md:w-1/2 md:border-l-2"
              src={HomepagePoster}
              alt="HomepagePoster"
              // width="10000"
              // height="1000"
            />
          </div>
        </div>
        <div>
          <div className="pt-10 pb-2 text-center">
            <b className="text-black text-3xl">
              {t('homepage:bread-and-package-product')}
            </b>
          </div>
          <div className="py-4 pb-10 items-center justify-center md:h-auto md:flex">
            <Image
              className="px-4 md:w-1/2 cursor-pointer"
              src={HomepagePoster}
              alt="HomepagePoster"
              onClick={handleImageClick}
            />
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
      'homepage',
    ])),
  },
});

export default Home;

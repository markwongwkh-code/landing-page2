import HomepagePoster from '../public/HomepagePoster_800x450.png';
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
  return (
    <>
      <Header />
      <div className="w-full">
        <Image
          className="md:w-1/2"
          src={HomepagePoster}
          alt="HomepagePoster"
          width="10000"
          height="1000"
        />
        <Image
          className="md:w-1/2"
          src={HomepagePoster}
          alt="HomepagePoster"
          width="10000"
          height="1000"
        />
        <Image
          className="md:w-1/2"
          src={HomepagePoster}
          alt="HomepagePoster"
          width="10000"
          height="1000"
        />
      </div>
      <Footer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['header', 'footer'])),
  },
});

export default Home;

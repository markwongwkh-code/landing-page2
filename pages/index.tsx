import HomepagePoster from '../public/HomepagePoster_800x450.png';
import Image from 'next/image';

import Link from 'next/link';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Header from '@/components/layout/Header';

type Props = {
  // Add custom props here
};

const Home = () => {
  return (
    <>
      <Header />
      <div className="w-full md:w-1/2">
        <Image
          src={HomepagePoster}
          alt="HomepagePoster"
          width="10000"
          height="1000"
        />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['header'])),
  },
});

export default Home;

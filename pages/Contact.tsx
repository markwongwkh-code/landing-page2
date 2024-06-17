import HomepagePoster from '../public/images/HomepagePoster_1680x706.jpg';
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

const Contact = () => {
  return <div>Contact</div>;
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

export default Contact;

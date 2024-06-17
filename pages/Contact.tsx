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
  const { t } = useTranslation(['common', 'contact']);
  const storeIndex = [1, 2, 3];

  return (
    <div className="bg-black flex flex-col flex-grow min-h-screen">
      <Header />
      <div>
        <div className="bg-white pt-14 pb-96 w-full text-black">
          <div className="px-8 mx-auto lg:max-w-7xl">
            <div className="pt-10 pb-2">
              <div className="py-6 text-4xl text-center">
                <b>{t('contact:contact-us')}</b>
              </div>
              <div className="justify-center items-center py-4 md:h-auto md:flex">
                {storeIndex.map(
                  (index): JSX.Element => (
                    <div className="pt-4 pb-6 md:w-1/3" key={index}>
                      <div className="px-4">
                        <b className="text-xl">
                          {t(`contact:store${index}-name`)}
                        </b>
                        <div className="flex">
                          {t('contact:address')}:{' '}
                          {t(`contact:store${index}-address`)}
                        </div>
                        <div className="flex">
                          {t('contact:business-hour')}:{' '}
                          {t(`contact:store${index}-business-hour`)}
                        </div>
                        <div className="flex">
                          {t('contact:hotline')}:{' '}
                          {t(`contact:store${index}-hotline`)}
                        </div>
                      </div>
                    </div>
                  )
                )}
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
      'contact',
    ])),
  },
});

export default Contact;

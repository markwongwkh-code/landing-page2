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

const RegistrationAndLicense = () => {
  const { t } = useTranslation(['common', 'registrationAndLicense']);
  let cellStyle = 'border-2 border-black';
  let storeIndex = [1, 2, 3];
  let tableData = [
    'no-of-license-and-permit',
    'type-of-license',
    'name-of-premises',
    'address-of-premises',
    'endorsements-and-permission',
  ];
  let licenseIndex = [1, 2, 3];
  let licenseData = ['number', 'description'];

  return (
    <div className="bg-black flex flex-col flex-grow min-h-screen">
      <Header />
      <div>
        <div className="bg-white pt-14 pb-96 w-full text-black">
          <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:px-8">
            <div className="pt-10 pb-2">
              <div className="py-6 text-4xl text-center">
                <b>{t('registrationAndLicense:registration-and-license')}</b>
              </div>
              <div className="text-lg">
                <p>
                  {t('registrationAndLicense:license-and-permit-description')}
                </p>
              </div>
              <div className="py-16">
                <table className="table-auto w-full">
                  <thead>
                    <tr>
                      {tableData.map(
                        (columnData, index): JSX.Element => (
                          <th className={cellStyle} key={index}>
                            {t(`registrationAndLicense:${columnData}`)}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {storeIndex.map(
                      (index): JSX.Element => (
                        <tr key={index}>
                          {tableData.map(
                            (columnData, colIndex): JSX.Element => (
                              <td className={cellStyle} key={colIndex}>
                                {t(
                                  `registrationAndLicense:${columnData}-store${index}`
                                )}
                              </td>
                            )
                          )}
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
              <p className="text-lg py-8">
                {t('registrationAndLicense:endorsements-and-permission')}
              </p>
              <div className="border-black border-2">
                <table>
                  <tbody>
                    {licenseIndex.map(
                      (index): JSX.Element => (
                        <tr key={index}>
                          <td className="py-3 w-20 text-center">
                            {t(`registrationAndLicense:license-number${index}`)}
                          </td>
                          <td className="py-3 w-30">
                            {t(
                              `registrationAndLicense:license-description${index}`
                            )}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
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
      'registrationAndLicense',
    ])),
  },
});

export default RegistrationAndLicense;

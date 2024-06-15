import Link from 'next/link';
import Image from 'next/image';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useState } from 'react';

type Props = {
  // Add custom props here
};

const Header = () =>
  // _props: InferGetServerSidePropsType<typeof getServerSideProps>
  {
    const router = useRouter();

    const { t } = useTranslation(['header']);

    const changeTo = router.locale === 'en' ? 'zh_tw' : 'en';

    const [navbar, setNavbar] = useState<boolean>(false);

    return (
      <div>
        <nav className="w-full bg-black fixed top-0 left-0 right-0 z-10">
          <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
            <div>
              <div className="flex items-center justify-between py-3 md:py-5 md:block">
                {/* LOGO */}
                <Link href="/">
                  <h2 className="text-2xl text-cyan-600 font-bold ">LOGO</h2>
                </Link>
                {/* HAMBURGER BUTTON FOR MOBILE */}
                <div className="md:hidden">
                  <button
                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                    onClick={() => setNavbar(!navbar)}
                  >
                    {navbar ? (
                      <Image
                        src="/white-cross.png"
                        width={30}
                        height={30}
                        alt="logo"
                      />
                    ) : (
                      <Image
                        src="/white-hamburger-menu.png"
                        width={30}
                        height={30}
                        alt="logo"
                        className="focus:border-none active:border-none"
                      />
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div
                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                  navbar ? 'p-12 md:p-0 block' : 'hidden'
                }`}
              >
                <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                  <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                    <Link href="/" onClick={() => setNavbar(!navbar)}>
                      <button>{t('header:about')}</button>
                    </Link>
                  </li>
                  <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                    <Link href="/" onClick={() => setNavbar(!navbar)}>
                      <button>{t('header:product')}</button>
                    </Link>
                  </li>
                  <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                    <Link href="/" onClick={() => setNavbar(!navbar)}>
                      <button>{t('header:contact')}</button>
                    </Link>
                  </li>
                  <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                    <Link
                      href="/"
                      locale={changeTo}
                      onClick={() => setNavbar(!navbar)}
                    >
                      <button>
                        {t('header:language-choice', { changeTo })}
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  };

export default Header;

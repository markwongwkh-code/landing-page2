import Link from 'next/link';
import { useTranslation } from 'next-i18next';

const Footer = () => {
  const { t } = useTranslation(['header']);
  return (
    <div className="w-full bg-black top-0 left-0 right-0 z-10">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <ul className="md:h-auto items-center justify-center">
          <div className="text-xl text-white py-2 md:px-6 border-b-2 md:border-b-0">
            <Link href="/RegistrationAndLicense">
              <button>{t('footer:registration-and-license')}</button>
            </Link>
          </div>
          <div className="text-xl text-white py-2 md:px-6 border-b-2 md:border-b-0">
            {t('footer:trademark')}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

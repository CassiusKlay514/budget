import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Landing() {
  const { t } = useTranslation();

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-indigo-200 to-indigo-400 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              {t('landing.title')}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              {t('landing.subtitle')}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link to="/register" className="btn-primary">
                {t('auth.register')}
              </Link>
              <Link to="/login" className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                {t('auth.login')} <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-7xl mx-auto pb-24">
          {features.map((feature, index) => (
            <div key={index} className="card">
              <feature.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              <h3 className="mt-4 text-lg font-semibold">{t(feature.title)}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{t(feature.description)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
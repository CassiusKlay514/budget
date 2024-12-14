import { useTranslation } from 'react-i18next';
import { ChartBarIcon, WalletIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/outline';

export default function Dashboard() {
  const { t } = useTranslation();

  const stats = [
    {
      name: 'Dépenses du mois',
      value: '2 450 €',
      change: '+12.5%',
      changeType: 'negative',
      icon: WalletIcon,
    },
    {
      name: 'Budget restant',
      value: '750 €',
      change: '23%',
      changeType: 'positive',
      icon: ChartBarIcon,
    },
    {
      name: 'Économies',
      value: '450 €',
      change: '+4.75%',
      changeType: 'positive',
      icon: ArrowTrendingUpIcon,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.name} className="card">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <stat.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.name}</h3>
                <div className="mt-1">
                  <p className="text-2xl font-semibold text-gray-900 dark:text-white">{stat.value}</p>
                  <p className={`text-sm ${
                    stat.changeType === 'positive' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                  }`}>
                    {stat.change}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="card">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Dépenses récentes
          </h3>
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                    <WalletIcon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Courses</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Il y a 2 heures</p>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">-85.50 €</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Objectifs d'épargne
          </h3>
          <div className="space-y-4">
            {[1, 2].map((item) => (
              <div key={item} className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Vacances d'été</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">1500 € / 2000 €</p>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-indigo-600 dark:bg-indigo-400 h-2 rounded-full" style={{ width: '75%' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
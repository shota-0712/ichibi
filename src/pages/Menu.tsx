import { ArrowRight, Clock } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { LunchMenu } from '../components/menu/LunchMenu';
import { IzakayaMenu } from '../components/menu/IzakayaMenu';
import { DrinksMenu } from '../components/menu/DrinksMenu';
import { storeInfo } from '../data/store-info';

export type MenuTab = 'lunch' | 'izakaya' | 'drinks';
type MenuView = MenuTab | 'overview';

type MenuProps = {
  initialView?: MenuView;
};

const TAB_CONFIG: Record<MenuTab, {
  label: string;
  path: string;
  image: string;
  summary: string;
  periodLabel: string;
  hoursLabel: string;
}> = {
  lunch: {
    label: 'ランチメニュー',
    path: '/menu/lunch',
    image: '/image/ichigo_ichibi_set.webp',
    summary: '手打ち十割蕎麦や定食を中心に、昼の部のおすすめをご案内しています。',
    periodLabel: '昼の部',
    hoursLabel: storeInfo.hours.lunch
  },
  izakaya: {
    label: '夜のお品書き',
    path: '/menu/dinner',
    image: '/image/tenjuu.webp',
    summary: '季節の一品料理や天ぷらなど、夜の部で楽しめる料理をご紹介しています。',
    periodLabel: '夜の部',
    hoursLabel: storeInfo.hours.izakaya
  },
  drinks: {
    label: 'お飲み物',
    path: '/menu/drinks',
    image: '/image/interior_counter.webp',
    summary: 'お食事に合わせるアルコール・ソフトドリンクをまとめています。',
    periodLabel: '終日',
    hoursLabel: `昼の部 ${storeInfo.hours.lunch} / 夜の部 ${storeInfo.hours.izakaya}`
  }
};

const MENU_OVERVIEW = {
  title: 'お品書き一覧',
  image: '/image/interior_kitchen.webp',
  summary: 'ランチメニュー、夜のお品書き、お飲み物をページごとに分けて掲載しています。ご覧になりたい内容からお進みください。'
} as const;

const HASH_TO_TAB: Partial<Record<string, MenuTab>> = {
  '#lunch': 'lunch',
  '#izakaya': 'izakaya',
  '#drinks': 'drinks'
};

const PATH_TO_TAB: Partial<Record<string, MenuTab>> = {
  '/menu/lunch': 'lunch',
  '/menu/dinner': 'izakaya',
  '/menu/drinks': 'drinks'
};

export function Menu({ initialView = 'overview' }: MenuProps) {
  const location = useLocation();
  const activeView = PATH_TO_TAB[location.pathname] ?? HASH_TO_TAB[location.hash] ?? initialView;
  const isOverview = activeView === 'overview';
  const currentTab = isOverview ? null : TAB_CONFIG[activeView];
  const heroContent = currentTab ?? {
    image: MENU_OVERVIEW.image,
    summary: MENU_OVERVIEW.summary,
    periodLabel: '営業時間',
    hoursLabel: `昼の部 ${storeInfo.hours.lunch} / 夜の部 ${storeInfo.hours.izakaya}`
  };

  return (
    <div>
      {/* Hero with background image */}
      <div
        className="h-[90vh] relative bg-cover bg-center"
        style={{
          backgroundImage: `url("${heroContent.image}")`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 pt-20">
          <h1 className="text-white text-5xl md:text-7xl font-kanteiryuu mb-6 drop-shadow-lg">
            {isOverview ? MENU_OVERVIEW.title : 'お品書き'}
          </h1>

          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {(Object.entries(TAB_CONFIG) as Array<[MenuTab, typeof TAB_CONFIG[MenuTab]]>).map(([tab, config]) => {
              const isActive = activeView === tab;
              return (
                <Link
                  key={tab}
                  to={config.path}
                  aria-current={isActive ? 'page' : undefined}
                  className={`text-white text-lg md:text-xl font-kanteiryuu px-4 pb-2 transition-all ${isActive
                    ? 'border-b-2 border-japanese-gold text-japanese-gold'
                    : 'border-b-2 border-transparent hover:border-white/50'
                    }`}
                >
                  {config.label}
                </Link>
              );
            })}
          </div>

          <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="flex items-center gap-3 text-white">
              <Clock className="h-6 w-6 text-japanese-gold" />
              <div>
                <h3 className="font-semibold text-lg">
                  {heroContent.periodLabel}
                </h3>
                <p className="text-japanese-gold">
                  {heroContent.hoursLabel}
                </p>
                <p className="text-sm text-white/80 mt-1">定休日：{storeInfo.hours.closed}</p>
                <p className="text-xs text-white/60 mt-1">{storeInfo.hours.noteShort}</p>
              </div>
            </div>
          </div>
          <p className="mt-6 max-w-2xl text-sm md:text-base text-white/85 font-kanteiryuu">
            {heroContent.summary}
          </p>
        </div>
      </div>

      {isOverview ? (
        <section className="bg-stone-50 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <div className="mb-10 text-center">
                <h2 className="mb-4 text-3xl font-kanteiryuu text-japanese-indigo">各メニューはこちら</h2>
                <p className="mx-auto max-w-3xl text-a11y-gray font-kanteiryuu">
                  用途に合わせて、お料理とお飲み物を個別ページで見やすくまとめています。
                  ランチ、夜の部、ドリンクからご希望のページをお選びください。
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {(Object.entries(TAB_CONFIG) as Array<[MenuTab, typeof TAB_CONFIG[MenuTab]]>).map(([tab, config]) => (
                  <Link
                    key={tab}
                    to={config.path}
                    className="group overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={config.image}
                        alt={config.label}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="space-y-4 p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-sm font-medium text-japanese-red">{config.periodLabel}</p>
                          <h3 className="mt-1 text-2xl font-kanteiryuu text-japanese-indigo">{config.label}</h3>
                        </div>
                        <ArrowRight className="mt-1 h-5 w-5 flex-shrink-0 text-japanese-red transition group-hover:translate-x-1" aria-hidden="true" />
                      </div>
                      <p className="text-sm leading-7 text-a11y-gray">{config.summary}</p>
                      <div className="border-t border-stone-200 pt-4 text-sm text-gray-600">
                        <p>営業時間：{config.hoursLabel}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : activeView === 'lunch' ? (
        <LunchMenu />
      ) : activeView === 'izakaya' ? (
        <IzakayaMenu />
      ) : (
        <DrinksMenu />
      )}
    </div>
  );
}

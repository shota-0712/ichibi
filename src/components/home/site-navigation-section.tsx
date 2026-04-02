import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const navigationCards = [
  {
    title: 'ランチメニュー',
    description: '十割蕎麦や定食など、昼の部でご提供している料理をご覧いただけます。',
    path: '/menu/lunch'
  },
  {
    title: '夜のお品書き',
    description: '天ぷらや季節の一品料理など、夜の部のおすすめをまとめています。',
    path: '/menu/dinner'
  },
  {
    title: 'お飲み物',
    description: '蕎麦やお料理に合わせるアルコール、ソフトドリンクをご案内しています。',
    path: '/menu/drinks'
  },
  {
    title: '店舗情報',
    description: 'アクセス、営業時間、お支払い方法などご来店前に確認したい情報はこちらです。',
    path: '/store-info'
  },
  {
    title: '料理のこだわり',
    description: '十割蕎麦づくりや店の考え方、素材への向き合い方をご紹介しています。',
    path: '/dining-philosophy'
  },
  {
    title: 'お問い合わせ',
    description: 'ご意見・ご要望やその他のお問い合わせ先、メール本文テンプレートをご用意しています。',
    path: '/contact'
  }
] as const;

export function SiteNavigationSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-kanteiryuu text-japanese-indigo">お探しのページへ</h2>
            <p className="mx-auto max-w-3xl text-a11y-gray font-kanteiryuu">
              メニュー、店舗情報、お問い合わせ、一期一美のこだわりをページごとに整理しています。
              気になる内容からそのままご覧ください。
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {navigationCards.map(card => (
              <Link
                key={card.path}
                to={card.path}
                className="group flex h-full flex-col justify-between rounded-2xl border border-stone-200 bg-stone-50 p-6 shadow-sm transition hover:-translate-y-1 hover:border-japanese-gold/60 hover:shadow-lg"
              >
                <div>
                  <h3 className="mb-3 text-2xl font-kanteiryuu text-japanese-indigo">{card.title}</h3>
                  <p className="text-sm leading-7 text-a11y-gray">{card.description}</p>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-japanese-red transition group-hover:text-japanese-indigo">
                  詳しく見る
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

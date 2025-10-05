import React, { useState } from 'react';
import { Clock, Info } from 'lucide-react';
import { MenuItem, type MenuItemProps } from '../components/menu/menu-item';

type BasicMenuItem = Omit<MenuItemProps, 'price'> & { price: number };

type DrinkSubsection = {
  title: string;
  items: BasicMenuItem[];
};

type DrinkSection = {
  title: string;
  items?: BasicMenuItem[];
  subsections?: DrinkSubsection[];
};

type DrinkContent =
  | { type: 'section'; data: DrinkSection }
  | { type: 'item'; data: BasicMenuItem };

const setMealItems: BasicMenuItem[] = [
  {
    name: '一期一美セット',
    price: 2300,
    allergens: ['そば', '小麦', 'えび', '乳', 'アーモンド'],
  },
  {
    name: '天丼セット',
    price: 1350,
    allergens: ['そば', '小麦', 'えび'],
  },
  {
    name: '親子丼セット',
    price: 1300,
    allergens: ['そば', '小麦', '鶏肉', '卵'],
  },
];

const coldSobaItems: BasicMenuItem[] = [
  {
    name: 'せいろ',
    price: 800,
    allergens: ['そば', '小麦'],
  },
  {
    name: '鴨せいろ',
    price: 1300,
    allergens: ['そば', '小麦'],
  },
  {
    name: 'ざるそば',
    price: 900,
    allergens: ['そば', '小麦'],
  },
  {
    name: '天ざるそば',
    price: 1450,
    allergens: ['そば', '小麦', 'えび'],
  },
  {
    name: '天せいろ',
    price: 1350,
    allergens: ['そば', '小麦', 'えび'],
  },
  {
    name: '鶏せいろ',
    price: 1100,
    allergens: ['そば', '小麦', '鶏肉'],
  },
];

const hotSobaItems: BasicMenuItem[] = [
  {
    name: 'かけそば',
    price: 850,
    allergens: ['そば', '小麦'],
  },
  {
    name: '天ぷらそば',
    price: 1450,
    allergens: ['そば', '小麦', 'えび'],
  },
  {
    name: '山菜そば',
    price: 950,
    allergens: ['そば', '小麦'],
  },
  {
    name: '鴨南蛮そば',
    price: 1400,
    allergens: ['そば', '小麦'],
  },
  {
    name: 'たぬきそば',
    price: 900,
    allergens: ['そば', '小麦'],
  },
  {
    name: 'かき揚げそば',
    price: 1050,
    allergens: ['そば', '小麦', 'えび'],
  },
  {
    name: '鶏南蛮そば',
    price: 1200,
    allergens: ['そば', '小麦', '鶏肉'],
  },
  {
    name: 'とろろそば',
    price: 1150,
    allergens: ['そば', '小麦', 'やまいも'],
  },
];

const teishokuItems: BasicMenuItem[] = [
  {
    name: '生姜焼き定食',
    price: 1150,
    allergens: ['豚肉', '小麦', '大豆'],
  },
  {
    name: 'チキン南蛮定食',
    price: 1000,
    allergens: ['鶏肉', '小麦', '卵'],
  },
];

const riceBowlItems: BasicMenuItem[] = [
  {
    name: '親子丼',
    price: 800,
    allergens: ['鶏肉', '卵'],
  },
  {
    name: '天重',
    price: 1400,
    allergens: ['小麦', 'えび'],
  },
];

const kidsFoodItems: BasicMenuItem[] = [
  {
    name: 'キッズプレート',
    price: 300,
  },
];

const dessertItems: BasicMenuItem[] = [
  {
    name: '自家製プリン',
    price: 350,
    allergens: ['卵', '乳'],
  },
  {
    name: '自家製杏仁豆腐',
    price: 350,
    allergens: ['乳', 'アーモンド'],
  },
  {
    name: 'バニラアイス',
    price: 350,
    allergens: ['乳'],
  },
];

const alcoholicDrinkContent: DrinkContent[] = [
  {
    type: 'section',
    data: {
      title: 'ビール',
      items: [{ name: 'キリン一番搾り 中瓶', price: 750 }],
      subsections: [
        {
          title: 'アサヒスーパードライ樽生',
          items: [
            { name: '小ジョッキ', price: 550 },
            { name: '中ジョッキ', price: 700 },
            { name: '大ジョッキ', price: 900 },
          ],
        },
      ],
    },
  },
  {
    type: 'section',
    data: {
      title: 'ハイボール',
      items: [
        { name: 'ハイボール', price: 550 },
        { name: 'ジンジャーハイ', price: 550 },
        { name: 'コークハイ', price: 550 },
      ],
    },
  },
  {
    type: 'section',
    data: {
      title: 'ウイスキー',
      items: [
        { name: 'ロック', price: 500 },
        { name: 'ソーダ割り', price: 500 },
        { name: '水割り', price: 500 },
      ],
    },
  },
  {
    type: 'section',
    data: {
      title: '焼酎',
      subsections: [
        {
          title: '黒霧島',
          items: [
            { name: 'ロック', price: 600 },
            { name: 'ソーダ割り', price: 600 },
            { name: '水割り', price: 600 },
            { name: 'お茶割り（緑茶・ウーロン茶・無糖紅茶）', price: 600 },
          ],
        },
        {
          title: '白岳しろ',
          items: [
            { name: 'ロック', price: 650 },
            { name: 'ソーダ割り', price: 650 },
            { name: '水割り', price: 650 },
            { name: 'お茶割り（緑茶・ウーロン茶・無糖紅茶）', price: 650 },
          ],
        },
        {
          title: '大分麦焼酎二階堂',
          items: [
            { name: 'ロック', price: 600 },
            { name: 'ソーダ割り', price: 600 },
            { name: '水割り', price: 600 },
            { name: 'お茶割り（緑茶・ウーロン茶・無糖紅茶）', price: 600 },
          ],
        },
      ],
    },
  },
  {
    type: 'section',
    data: {
      title: '日本酒',
      items: [{ name: '純米酒(一合)', price: 700 }],
    },
  },
  {
    type: 'section',
    data: {
      title: 'サワー',
      items: [
        { name: 'サッポロ 濃いめのレモンサワー', price: 550 },
        { name: '樽ハイプレーンサワー', price: 550 },
        { name: '樽ハイグレープフルーツサワー', price: 550 },
        { name: '樽ハイピーチサワー', price: 550 },
        { name: '樽ハイカルピスサワー', price: 550 },
        { name: '樽ハイ巨峰サワー', price: 550 },
      ],
    },
  },
  {
    type: 'section',
    data: {
      title: '梅酒',
      subsections: [
        {
          title: '濃醇梅酒',
          items: [
            { name: 'ロック', price: 600 },
            { name: 'ソーダ割り', price: 600 },
            { name: '水割り', price: 600 },
          ],
        },
      ],
    },
  },
  {
    type: 'section',
    data: {
      title: 'ワイン',
      items: [
        {
          name: '赤ワイン',
          price: 500,
          description: '（サンタ・ヘレナ・アパルカ・カベルナ・メルロー）',
        },
        {
          name: '白ワイン',
          price: 500,
          description: '（サンタ・ヘレナ・アパルカ・シャルドネ・セミヨン）',
        },
      ],
    },
  },
  {
    type: 'section',
    data: {
      title: 'カクテル',
      items: [
        { name: 'カシスオレンジ', price: 500 },
        { name: 'カシスソーダ', price: 500 },
        { name: 'カシスウーロン', price: 500 },
      ],
    },
  },
];

const nonAlcoholicItems: BasicMenuItem[] = [
  {
    name: 'キリン一番搾り グリーンズフリー 小瓶',
    price: 600,
  },
];

const softDrinkItems: BasicMenuItem[] = [
  { name: 'コカ・コーラ', price: 400 },
  { name: 'カルピス', price: 400 },
  { name: 'ジンジャーエール', price: 400 },
  { name: '100%オレンジジュース', price: 400 },
  { name: '100%りんごジュース', price: 400 },
  { name: '緑茶', price: 400 },
  { name: '無糖アイスティー', price: 400 },
  { name: 'ウーロン茶', price: 400 },
];

const kidsDrinkItems: BasicMenuItem[] = softDrinkItems.map((item) => ({
  name: item.name,
  price: 100,
  priceLabel: '税込100円',
}));

const izakayaYakitoriItems = [
  { name: 'もも', price: 170, allergens: ['鶏肉'] },
  { name: '鶏皮', price: 170, allergens: ['鶏肉'] },
  { name: 'なんこつ', price: 170, allergens: ['鶏肉'] },
  { name: '砂肝', price: 160, allergens: ['鶏肉'] },
  { name: 'つくね', price: 180, allergens: ['鶏肉', '卵'] },
  { name: 'トマトベーコン', price: 220, allergens: ['豚肉'] },
  { name: 'レバー', price: 160, allergens: ['鶏肉'] },
  { name: '鶏むね(ねぎ塩)', price: 170, allergens: ['鶏肉'] },
  { name: 'ニラ豚バラ巻き', price: 200, allergens: ['豚肉'] },
  { name: 'しいたけ', price: 220 },
];

const izakayaAppetizerItems = [
  { name: 'きのこのバター炒め', price: 480 },
  { name: '揚げ出し豆腐', price: 350, allergens: ['大豆'] },
  { name: 'だし巻き玉子', price: 450, allergens: ['卵'] },
  { name: 'チーズ入りだし巻き玉子', price: 500, allergens: ['卵', '乳'] },
  { name: '冷奴', price: 250, allergens: ['大豆'] },
  { name: 'ポテトフライ', price: 390 },
  { name: 'ichibiサラダ', price: 390 },
  { name: 'なすの煮びたし', price: 380 },
  { name: 'ピリ辛きゅうり', price: 350 },
  { name: 'オニオンリング', price: 390 },
  { name: '枝豆', price: 250 },
  { name: 'ごま油塩キャベツ', price: 290 },
  { name: 'トマトスライス', price: 350 },
];

const sobaSelectionNote = '十割蕎麦・二八蕎麦がお選び頂けます。\n※十割蕎麦は1日15食限定\n麺量 : 140g\nそば二倍盛り(+140g) : +500円';
const setMealNote = `${sobaSelectionNote}\nデザート付き\n温そば : +50円\nご飯大盛り : +100円`;
const coldSobaNote = `${sobaSelectionNote}\n温そば : +50円`;
const hotSobaNote = sobaSelectionNote;
const riceBowlNote = 'お味噌汁、漬け物付き\nご飯大盛り : +100円';
const teishokuNote = 'ご飯、お味噌汁、漬け物付き\nご飯大盛り : +100円';

function AlcoholicDrinks({ heading }: { heading: string }) {
  return (
    <div className="mb-8">
      <h4 className="text-lg font-kanteiryuu mb-4 text-gray-700">{heading}</h4>
      <div className="space-y-8">
        {alcoholicDrinkContent.map((entry, index) => {
          if (entry.type === 'section') {
            const { title, items, subsections } = entry.data;

            return (
              <div key={`${title}-${index}`}>
                <h5 className="text-base font-kanteiryuu mb-3 text-gray-800">{title}</h5>

                {subsections?.map((subsection) => (
                  <div key={`${title}-${subsection.title}`} className="space-y-3 mb-4 last:mb-0">
                    <h6 className="text-sm font-kanteiryuu text-gray-800">{subsection.title}</h6>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {subsection.items.map((item) => (
                        <MenuItem
                          key={`${title}-${subsection.title}-${item.name}`}
                          {...item}
                        />
                      ))}
                    </div>
                  </div>
                ))}

                {items && items.length > 0 && (
                  <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${subsections ? 'mt-4' : ''}`}>
                    {items.map((item) => (
                      <MenuItem key={`${title}-${item.name}`} {...item} />
                    ))}
                  </div>
                )}
              </div>
            );
          }

          return (
            <div
              key={`single-${entry.data.name}-${index}`}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <MenuItem {...entry.data} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function Menu() {
  const [activeTab, setActiveTab] = useState<'lunch' | 'izakaya'>('lunch');

  return (
    <div>

      {/* Hero with background image */}
      <div
        className="h-[90vh] relative bg-cover bg-center"
        style={{
          backgroundImage: activeTab === 'lunch' ? 'url("/image/ichigo_ichibi_set.webp")' : 'url("/image/yakitori.webp")',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 pt-20">
          <h1 className="text-white text-5xl md:text-7xl font-kanteiryuu mb-6 drop-shadow-lg">お品書き</h1>

          {/* Tab Buttons */}
          <div className="flex gap-8 mb-6">
            <button
              onClick={() => setActiveTab('lunch')}
              className={`text-white text-xl font-kanteiryuu pb-2 transition-all ${
                activeTab === 'lunch'
                  ? 'border-b-2 border-japanese-gold text-japanese-gold'
                  : 'border-b-2 border-transparent hover:border-white/50'
              }`}
            >
              ランチ
            </button>
            <button
              onClick={() => setActiveTab('izakaya')}
              className={`text-white text-xl font-kanteiryuu pb-2 transition-all ${
                activeTab === 'izakaya'
                  ? 'border-b-2 border-japanese-gold text-japanese-gold'
                  : 'border-b-2 border-transparent hover:border-white/50'
              }`}
            >
              居酒屋
            </button>
          </div>

          <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="flex items-center gap-3 text-white">
              <Clock className="h-6 w-6 text-japanese-gold" />
              <div>
                <h3 className="font-semibold text-lg">
                  {activeTab === 'lunch' ? 'ランチタイム' : '居酒屋営業'}
                </h3>
                <p className="text-japanese-gold">
                  {activeTab === 'lunch' ? '11:00～14:00 (L.O.13:30)' : '17:00～22:00 (L.O.21:30)'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Content */}
      {activeTab === 'lunch' ? (
        <LunchMenu />
      ) : (
        <IzakayaMenu />
      )}
    </div>
  );
}

function LunchMenu() {
  return (
    <div className="py-16 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            <div className="text-sm text-gray-600">
              <p className="flex items-center gap-1">
                <span>※アレルギー表示は</span>
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 text-gray-600">
                  <Info className="h-3 w-3" aria-hidden="true" />
                </span>
                <span>を押すとご覧になれます。</span>
              </p>
              <p className="mt-2">時期によって使用している食材が異なる場合がございますので詳しくはスタッフにお聞きください。</p>
            </div>

            {/* Set Meals */}
            <div>
              <h3 className="text-xl font-kanteiryuu mb-6 pb-2 border-b-2 border-japanese-red">セットメニュー</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {setMealItems.map((item) => (
                  <MenuItem key={item.name} {...item} />
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-600 whitespace-pre-line">{setMealNote}</p>
            </div>

            {/* Cold Soba */}
            <div>
              <h3 className="text-xl font-kanteiryuu mb-6 pb-2 border-b-2 border-japanese-red">冷そば</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {coldSobaItems.map((item) => (
                  <MenuItem key={item.name} {...item} />
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-600 whitespace-pre-line">{coldSobaNote}</p>
            </div>

            {/* Hot Soba */}
            <div>
              <h3 className="text-xl font-kanteiryuu mb-6 pb-2 border-b-2 border-japanese-red">温そば</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {hotSobaItems.map((item) => (
                  <MenuItem key={item.name} {...item} />
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-600 whitespace-pre-line">{hotSobaNote}</p>
            </div>

            {/* Rice Bowls */}
            <div>
              <h3 className="text-xl font-kanteiryuu mb-6 pb-2 border-b-2 border-japanese-red">丼</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {riceBowlItems.map((item) => (
                  <MenuItem key={item.name} {...item} />
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-600 whitespace-pre-line">{riceBowlNote}</p>
            </div>

            {/* Teishoku */}
            <div>
              <h3 className="text-xl font-kanteiryuu mb-6 pb-2 border-b-2 border-japanese-red">定食</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {teishokuItems.map((item) => (
                  <MenuItem key={item.name} {...item} />
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-600 whitespace-pre-line">{teishokuNote}</p>
            </div>

            {/* Kids Menu */}
            <div>
              <h3 className="text-xl font-kanteiryuu mb-6 pb-2 border-b-2 border-japanese-red">キッズメニュー</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {kidsFoodItems.map((item) => (
                  <MenuItem key={item.name} {...item} />
                ))}
              </div>
              <div className="mt-8">
                <h4 className="text-lg font-kanteiryuu mb-4 text-gray-700">キッズドリンク</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {kidsDrinkItems.map((item) => (
                    <MenuItem key={`kids-drink-${item.name}`} {...item} />
                  ))}
                </div>
              </div>
            </div>

            {/* Desserts */}
            <div>
              <h3 className="text-xl font-kanteiryuu mb-6 pb-2 border-b-2 border-japanese-red">デザート</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {dessertItems.map((item) => (
                  <MenuItem key={item.name} {...item} />
                ))}
              </div>
            </div>

            {/* Drinks */}
            <div>
              <h3 className="text-xl font-kanteiryuu mb-6 pb-2 border-b-2 border-japanese-red">ドリンク</h3>

              <AlcoholicDrinks heading="アルコール飲料" />

              <div className="mb-8">
                <h4 className="text-lg font-kanteiryuu mb-4 text-gray-700">ノンアルコール飲料</h4>
                <div className="space-y-4">
                  {nonAlcoholicItems.map((item) => (
                    <MenuItem key={item.name} {...item} />
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-kanteiryuu mb-4 text-gray-700">ソフトドリンク</h4>
                <div className="space-y-4">
                  {softDrinkItems.map((item) => (
                    <MenuItem key={item.name} {...item} />
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-kanteiryuu mb-4 text-gray-700">ボトルキープ</h4>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-semibold text-gray-800">焼酎</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-900">
                      <li>白岳しろ（720ml）　税抜3,000円（税込3,300円）</li>
                      <li>二階堂（900ml）　　税抜2,500円（税込2,750円）</li>
                      <li>黒霧島（900ml）　　税抜2,500円（税込2,750円）</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">ウイスキー</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-900">
                      <li>ブラックニッカ（700ml）　税抜2,500円（税込2,750円）</li>
                      <li>陸（500ml）　　　　　　税抜4,000円（税込4,400円）</li>
                      <li>角（700ml）　　　　　　税抜4,000円（税込4,400円）</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">キープ期間</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>3か月間</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">その他</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>氷ボックス　税抜500円（税込550円）</li>
                      <li>割り材（水、炭酸など）別途</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-sm text-gray-600">
            <p>※仕入れ状況により、内容が変更になる場合がございます</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function IzakayaMenu() {
  return (
    <div className="py-16 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            <div className="text-sm text-gray-600">
              <p className="flex items-center gap-1">
                <span>※アレルギー表示は</span>
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 text-gray-600">
                  <Info className="h-3 w-3" aria-hidden="true" />
                </span>
                <span>を押すとご覧になれます。</span>
              </p>
              <p className="mt-2">時期によって使用している食材が異なる場合がございますので詳しくはスタッフにお聞きください。</p>
            </div>

            {/* Yakitori */}
            <div>
              <h3 className="text-xl font-kanteiryuu mb-6 pb-2 border-b-2 border-japanese-red">焼き鳥</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {izakayaYakitoriItems.map((item) => (
                  <MenuItem key={item.name} {...item} />
                ))}
              </div>
            </div>

            {/* Appetizers */}
            <div>
              <h3 className="text-xl font-kanteiryuu mb-6 pb-2 border-b-2 border-japanese-red">一品料理</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {izakayaAppetizerItems.map((item) => (
                  <MenuItem key={item.name} {...item} />
                ))}
              </div>
            </div>

            {/* Cold Soba */}
            <div>
              <h3 className="text-xl font-kanteiryuu mb-6 pb-2 border-b-2 border-japanese-red">冷そば</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {coldSobaItems.map((item) => (
                  <MenuItem key={item.name} {...item} />
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-600 whitespace-pre-line">{coldSobaNote}</p>
            </div>

            {/* Hot Soba */}
            <div>
              <h3 className="text-xl font-kanteiryuu mb-6 pb-2 border-b-2 border-japanese-red">温そば</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {hotSobaItems.map((item) => (
                  <MenuItem key={item.name} {...item} />
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-600 whitespace-pre-line">{hotSobaNote}</p>
            </div>

            {/* Teishoku */}
            <div>
              <h3 className="text-xl font-kanteiryuu mb-6 pb-2 border-b-2 border-japanese-red">定食</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {teishokuItems.map((item) => (
                  <MenuItem key={item.name} {...item} />
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-600 whitespace-pre-line">{teishokuNote}</p>
            </div>

            {/* Rice Bowls */}
            <div>
              <h3 className="text-xl font-kanteiryuu mb-6 pb-2 border-b-2 border-japanese-red">丼</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {riceBowlItems.map((item) => (
                  <MenuItem key={item.name} {...item} />
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-600 whitespace-pre-line">{riceBowlNote}</p>
            </div>

            {/* Kids Menu */}
            <div>
              <h3 className="text-xl font-kanteiryuu mb-6 pb-2 border-b-2 border-japanese-red">キッズメニュー</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {kidsFoodItems.map((item) => (
                  <MenuItem key={item.name} {...item} />
                ))}
              </div>
              <div className="mt-8">
                <h4 className="text-lg font-kanteiryuu mb-4 text-gray-700">キッズドリンク</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {kidsDrinkItems.map((item) => (
                    <MenuItem key={`kids-drink-${item.name}`} {...item} />
                  ))}
                </div>
              </div>
            </div>

            {/* Drinks */}
            <div>
              <h3 className="text-xl font-kanteiryuu mb-6 pb-2 border-b-2 border-japanese-red">ドリンク</h3>

              <AlcoholicDrinks heading="アルコール飲料" />

              <div className="mb-8">
                <h4 className="text-lg font-kanteiryuu mb-4 text-gray-700">ノンアルコール飲料</h4>
                <div className="space-y-4">
                  {nonAlcoholicItems.map((item) => (
                    <MenuItem key={item.name} {...item} />
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-kanteiryuu mb-4 text-gray-700">ソフトドリンク</h4>
                <div className="space-y-4">
                  {softDrinkItems.map((item) => (
                    <MenuItem key={item.name} {...item} />
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-kanteiryuu mb-4 text-gray-700">ボトルキープ</h4>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-semibold text-gray-800">焼酎</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-900">
                      <li>白岳しろ（720ml）　税抜3,000円（税込3,300円）</li>
                      <li>二階堂（900ml）　　税抜2,500円（税込2,750円）</li>
                      <li>黒霧島（900ml）　　税抜2,500円（税込2,750円）</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">ウイスキー</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-900">
                      <li>ブラックニッカ（700ml）　税抜2,500円（税込2,750円）</li>
                      <li>陸（500ml）　　　　　　税抜4,000円（税込4,400円）</li>
                      <li>角（700ml）　　　　　　税抜4,000円（税込4,400円）</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">キープ期間</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>3か月間</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">その他</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>氷ボックス　税抜500円（税込550円）</li>
                      <li>割り材（水、炭酸など）別途</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Desserts */}
            <div>
              <h3 className="text-xl font-kanteiryuu mb-6 pb-2 border-b-2 border-japanese-red">デザート</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {dessertItems.map((item) => (
                  <MenuItem key={item.name} {...item} />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 text-sm text-gray-600">
            <p>※仕入れ状況により、内容が変更になる場合がございます</p>
          </div>
        </div>
      </div>
    </div>
  );
}

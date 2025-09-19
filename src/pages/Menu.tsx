import React, { useState } from 'react';
import { Clock, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MenuItem } from '../components/menu/menu-item';

const coldSobaItems = [
  {
    name: 'ざるそば',
    price: 800,
    allergens: ['そば', '小麦'],
    description: '香り高い十割そばをつめたつゆで',
  },
  {
    name: '天ざるそば',
    price: 1200,
    allergens: ['そば', '小麦', 'えび'],
    description: '海老と野菜の天ぷら付き',
  },
  {
    name: '鴨せいろそば',
    price: 1400,
    allergens: ['そば', '小麦'],
    description: '鴨肉の旨みが効いたつけだれ',
  },
  {
    name: 'とりせいろそば',
    price: 1080,
    allergens: ['そば', '小麦', '鶏肉'],
    description: '鶏肉と九条ネギのつけだれ',
  },
];

const hotSobaItems = [
  {
    name: 'かけそば',
    price: 800,
    allergens: ['そば', '小麦'],
    description: '温かい出汁でいただく基本の一杯',
  },
  {
    name: 'とり南蛮そば',
    price: 1080,
    allergens: ['そば', '小麦', '鶏肉'],
    description: '特製タルタルソース添え',
  },
  {
    name: '鴨南蛮そば',
    price: 1400,
    allergens: ['そば', '小麦'],
    description: '肉厚の鴨肉と温かい出汁',
  },
  {
    name: 'かき揚げそば',
    price: 900,
    allergens: ['そば', '小麦', 'えび'],
    description: '海老と野菜のかき揚げ',
  },
  {
    name: 'きつねそば',
    price: 850,
    allergens: ['そば', '小麦', '大豆'],
    description: '甘辛く煮た油揚げをのせて',
  },
  {
    name: 'とろろそば',
    price: 900,
    allergens: ['そば', '小麦', 'やまいも'],
    description: '自家製とろろをのせて',
  },
  {
    name: '山菜そば',
    price: 900,
    allergens: ['そば', '小麦'],
    description: '季節の山菜を添えて',
  },
  {
    name: 'たぬきそば',
    price: 900,
    allergens: ['そば', '小麦'],
    description: 'カリカリの天かすをのせて',
  },
  {
    name: '天ぷらそば',
    price: 1200,
    allergens: ['そば', '小麦', 'えび'],
    description: '海老と野菜の天ぷら付き',
  },
];

const setMealItems = [
  {
    name: '生姜焼定食',
    price: 950,
    allergens: ['豚肉', '小麦', '大豆'],
    description: '国産豚ロースの生姜焼き',
  },
  {
    name: '唐揚げ定食',
    price: 950,
    allergens: ['鶏肉', '小麦'],
    description: 'にんにく醤油で味付けした唐揚げ',
  },
  {
    name: 'アジフライ定食',
    price: 800,
    allergens: ['小麦'],
    description: '新鮮なアジを使用したフライ',
  },
  {
    name: 'エビフライ定食',
    price: 1200,
    allergens: ['小麦', 'えび'],
    description: '大ぶりのエビフライ',
  },
  {
    name: 'ミックスフライ定食',
    price: 1100,
    allergens: ['小麦', 'えび'],
    description: 'エビ、白身魚、カキのフライ',
  },
  {
    name: 'ハンバーグ定食',
    price: 950,
    allergens: ['小麦', '卵', '乳'],
    description: '手ごねハンバーグ',
  },
  {
    name: 'チキン南蛮定食',
    price: 1000,
    allergens: ['鶏肉', '小麦', '卵'],
    description: '特製タルタルソース添え',
  },
  {
    name: 'とんかつ定食',
    price: 1000,
    allergens: ['豚肉', '小麦'],
    description: '国産豚ロースカツ',
  },
];

const riceBowlItems = [
  {
    name: '親子丼',
    price: 800,
    allergens: ['鶏肉', '卵'],
    description: 'ふんわり玉子と鶏肉',
  },
  {
    name: '玉子丼',
    price: 650,
    allergens: ['卵'],
    description: 'だし巻き玉子をのせて',
  },
  {
    name: 'かつ丼',
    price: 1000,
    allergens: ['豚肉', '小麦', '卵'],
    description: 'サクサクのカツと玉子とじ',
  },
  {
    name: '天丼',
    price: 1000,
    allergens: ['小麦', 'えび'],
    description: '海老と野菜の天ぷら',
  },
];

const dessertItems = [
  [
    {
      name: '抹茶アイス',
      price: 380,
      allergens: ['乳'],
      description: '宇治抹茶使用',
    },
    {
      name: 'バニラアイス',
      price: 380,
      allergens: ['乳'],
      description: '濃厚なバニラビーンズ使用',
    },
  ],
  [
    {
      name: '自家製プリン',
      price: 400,
      allergens: ['卵', '乳'],
      description: '手作りカスタードプリン',
    },
    {
      name: '杏仁豆腐',
      price: 400,
      description: '本格的な杏仁豆腐',
    },
  ],
];

export function Menu() {
  const [activeTab, setActiveTab] = useState<'lunch' | 'izakaya'>('lunch');

  return (
    <div>
      {/* Fixed Home Button */}
      <Link
        to="/"
        className="fixed bottom-6 left-6 bg-japanese-red hover:bg-red-800 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 transform hover:scale-105"
        aria-label="ホームに戻る"
      >
        <Home className="h-6 w-6" />
      </Link>

      {/* Hero with background image */}
      <div
        className="h-[90vh] relative bg-cover bg-center"
        style={{
          backgroundImage: activeTab === 'lunch' ? 'url("/image/soba.webp")' : 'url("/image/yakitori.webp")',
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
            {/* Cold Soba */}
            <div>
              <h3 className="text-xl font-kanteiryuu mb-6 pb-2 border-b-2 border-japanese-red">冷たいそば</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  {coldSobaItems.map((item) => (
                    <MenuItem key={item.name} {...item} />
                  ))}
                </div>
              </div>
            </div>

            {/* Hot Soba */}
            <div>
              <h3 className="text-xl font-kanteiryuu mb-6 pb-2 border-b-2 border-japanese-red">温かいそば</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  {hotSobaItems.map((item) => (
                    <MenuItem key={item.name} {...item} />
                  ))}
                </div>
              </div>
            </div>

            {/* Set Meals */}
            <div>
              <h3 className="text-xl font-kanteiryuu mb-6 pb-2 border-b-2 border-japanese-red">定食</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  {setMealItems.map((item) => (
                    <MenuItem key={item.name} {...item} />
                  ))}
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-600">※定食には味噌汁、ご飯、お新香付き</p>
            </div>

            {/* Rice Bowls */}
            <div>
              <h3 className="text-xl font-kanteiryuu mb-6 pb-2 border-b-2 border-japanese-red">丼物</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  {riceBowlItems.map((item) => (
                    <MenuItem key={item.name} {...item} />
                  ))}
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-600">※丼物には味噌汁、お新香付き</p>
            </div>

            {/* Desserts */}
            <div>
              <h3 className="text-xl font-kanteiryuu mb-6 pb-2 border-b-2 border-japanese-red">デザート</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {dessertItems.map((column, index) => (
                  <div key={index} className="space-y-4">
                    {column.map((item) => (
                      <MenuItem key={item.name} {...item} />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Drinks for Lunch */}
            <div>
              <h3 className="text-xl font-kanteiryuu mb-6 pb-2 border-b-2 border-japanese-red">ソフトドリンク</h3>
              <div className="space-y-4">
                <MenuItem name="コカ・コーラゼロ" price={383} />
                <MenuItem name="コカ・コーラ" price={383} />
                <MenuItem name="カルピスウォーター" price={383} />
                <MenuItem name="ジンジャーエール" price={383} />
                <MenuItem name="オレンジジュース" price={383} />
                <MenuItem name="生茶" price={383} />
                <MenuItem name="玄米茶" price={383} />
                <MenuItem name="アイス/ホット ウーロン茶" price={383} />
                <MenuItem name="アイス/ホット 青汁" price={383} />
                <MenuItem name="ファンタグレープ" price={383} />
              </div>
            </div>
          </div>

          <div className="mt-12 text-sm text-gray-600">
            <p>※価格は全て税込表示です</p>
            <p>※仕入れ状況により、内容が変更になる場合がございます</p>
            <p>※アレルギー表示は主な原材料のみを表示しています。詳細については係員にお尋ねください。</p>
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
            {/* Yakitori */}
            <div>
              <h3 className="text-xl font-kanteiryuu mb-6 pb-2 border-b-2 border-japanese-red">焼き鳥</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <MenuItem name="とりもも" price={170} allergens={['鶏肉']} description="ジューシーな味わい" />
                  <MenuItem name="レバー" price={170} allergens={['鶏肉']} description="濃厚な味わい" />
                  <MenuItem name="タン" price={170} allergens={['鶏肉']} description="コリコリとした食感" />
                  <MenuItem name="ハツ" price={170} allergens={['鶏肉']} description="歯ごたえのある食感" />
                  <MenuItem name="手羽先" price={170} allergens={['鶏肉']} description="香ばしい手羽先" />
                  <MenuItem name="つくね" price={170} allergens={['鶏肉', '卵']} description="ふんわり食感" />
                </div>
                <div className="space-y-4">
                  <MenuItem name="ねぎま" price={170} allergens={['鶏肉']} description="ネギの甘みと鶏肉の旨み" />
                  <MenuItem name="すなぎも" price={170} allergens={['鶏肉']} description="コリコリ食感" />
                  <MenuItem name="なんこつ" price={170} allergens={['鶏肉']} description="シャキシャキ食感" />
                  <MenuItem name="ささみ" price={170} allergens={['鶏肉']} description="あっさりヘルシー" />
                  <MenuItem name="しいたけ" price={170} description="香り豊かな焼きしいたけ" />
                  <MenuItem name="アスパラベーコン" price={180} allergens={['豚肉']} description="アスパラとベーコンの相性抜群" />
                  <MenuItem name="ニンニク焼き" price={170} description="香ばしいニンニク" />
                </div>
              </div>
            </div>

            {/* Appetizers */}
            <div>
              <h3 className="text-xl font-kanteiryuu mb-6 pb-2 border-b-2 border-japanese-red">一品料理</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <MenuItem name="おしんこ盛り合わせ" price={300} description="季節の漬物の盛り合わせ" />
                  <MenuItem name="トマトスライス" price={350} description="新鮮なトマトのスライス" />
                  <MenuItem name="栃尾の油揚げ" price={350} allergens={['大豆']} description="名物の油揚げ" />
                  <MenuItem name="だし巻き卵" price={500} allergens={['卵']} description="出汁の効いたふんわり玉子焼き" />
                  <MenuItem name="冷奴" price={350} allergens={['大豆']} description="冷やっこ" />
                  <MenuItem name="ピリ辛きゅうり" price={250} description="さっぱりピリ辛" />
                </div>
                <div className="space-y-4">
                  <MenuItem name="たこきゅうり" price={450} description="たことキュウリの和え物" />
                  <MenuItem name="なすの煮びたし" price={350} description="だしが染みた茄子" />
                  <MenuItem name="ポテトサラダ" price={350} allergens={['卵']} description="自家製ポテトサラダ" />
                  <MenuItem name="酢もつ" price={350} description="さっぱり味の酢もつ" />
                  <MenuItem name="剣先イカ" price={350} description="新鮮な剣先イカ" />
                  <MenuItem name="えだまめ" price={300} allergens={['大豆']} description="塩茹でした枝豆" />
                  <MenuItem name="いちびサラダ" price={500} description="季節の野菜を使用した特製サラダ" />
                </div>
              </div>
            </div>

            {/* Beer */}
            <div>
              <h3 className="text-xl font-kanteiryuu mb-6 pb-2 border-b-2 border-japanese-red">ビール</h3>
              <div className="space-y-4">
                <MenuItem name="キリン一番搾り（生） 中ジョッキ" price={636} />
                <MenuItem name="キリンクラシックラガー" price={768} />
                <MenuItem name="日本のクラフトビール" price={713} description="スプリングバレー 豊潤496・スプリングバレー シルクエール〈白〉" />
                <MenuItem name="ホッピー＆焼酎セット" price={603} />
                <MenuItem name="追加焼酎（ナカ）" price={383} />
                <MenuItem name="追加ホッピー" price={383} />
                <MenuItem name="ハイネケン 小瓶" price={746} />
                <MenuItem name="キリングリーンズフリー" price={493} />
                <MenuItem name="ビアボール" price={603} />
                <MenuItem name="ジンジャービアボール" price={658} />
                <MenuItem name="コークビアボール" price={658} />
              </div>
            </div>

            {/* Highball */}
            <div>
              <h3 className="text-xl font-kanteiryuu mb-6 pb-2 border-b-2 border-japanese-red">ハイボール</h3>
              <div className="space-y-4">
                <MenuItem name="角ハイボール" price={548} />
                <MenuItem name="ジムビームハイボール" price={493} />
                <MenuItem name="ジムビームコーク" price={548} />
                <MenuItem name="ジムビームジンジャー" price={548} />
                <MenuItem name="ジムビームアップルハイボール" price={548} />
                <MenuItem name="陸ハイボール" price={548} />
              </div>
            </div>

            {/* Sour */}
            <div>
              <h3 className="text-xl font-kanteiryuu mb-6 pb-2 border-b-2 border-japanese-red">サワー</h3>
              <div className="space-y-4">
                <MenuItem name="こだわり酒場のレモンサワー" price={548} />
                <MenuItem name="こだわり酒場のタコハイ" price={548} />
                <MenuItem name="氷結レモン" price={548} />
                <MenuItem name="氷結レモン無糖" price={548} />
                <MenuItem name="青汁ハイ" price={548} />
                <MenuItem name="玄米茶ハイ" price={548} />
                <MenuItem name="ウーロンハイ" price={548} />
                <MenuItem name="カルピスサワー" price={548} />
                <MenuItem name="りんごサワー" price={548} />
                <MenuItem name="生茶ハイ" price={548} />
                <MenuItem name="南高梅サワー" price={548} />
                <MenuItem name="凍結レモンサワー" price={603} />
                <MenuItem name="追加サワー" price={603} />
                <MenuItem name="生絞りピンクグレープフルーツサワー" price={603} />
                <MenuItem name="生絞りレモンサワー" price={603} />
              </div>
            </div>

            {/* Cocktails */}
            <div>
              <h3 className="text-xl font-kanteiryuu mb-6 pb-2 border-b-2 border-japanese-red">カクテル</h3>
              <div className="space-y-4">
                <MenuItem name="カシスオレンジ" price={548} />
                <MenuItem name="カシスウーロン" price={548} />
                <MenuItem name="カシスソーダ" price={548} />
                <MenuItem name="翠ジンソーダ" price={526} />
                <MenuItem name="翠ジンジンジャー" price={581} />
              </div>
            </div>

            {/* Non-Alcoholic */}
            <div>
              <h3 className="text-xl font-kanteiryuu mb-6 pb-2 border-b-2 border-japanese-red">ノンアルコール</h3>
              <div className="space-y-4">
                <MenuItem name="ノンアルコールビール" price={603} />
                <MenuItem name="まるで梅酒なノンアルコールソーダ" price={493} />
                <MenuItem name="ノンアルでワインの休日 赤" price={603} />
              </div>
            </div>

            {/* Soft Drinks */}
            <div>
              <h3 className="text-xl font-kanteiryuu mb-6 pb-2 border-b-2 border-japanese-red">ソフトドリンク</h3>
              <div className="space-y-4">
                <MenuItem name="コカ・コーラゼロ" price={383} />
                <MenuItem name="コカ・コーラ" price={383} />
                <MenuItem name="カルピスウォーター" price={383} />
                <MenuItem name="ジンジャーエール" price={383} />
                <MenuItem name="オレンジジュース" price={383} />
                <MenuItem name="生茶" price={383} />
                <MenuItem name="玄米茶" price={383} />
                <MenuItem name="アイス/ホット ウーロン茶" price={383} />
                <MenuItem name="アイス/ホット 青汁" price={383} />
                <MenuItem name="ファンタグレープ" price={383} />
              </div>
            </div>
          </div>

          <div className="mt-12 text-sm text-gray-600">
            <p>※価格は全て税込表示です</p>
            <p>※仕入れ状況により、内容が変更になる場合がございます</p>
            <p>※アレルギー表示は主な原材料のみを表示しています。詳細については係員にお尋ねください。</p>
            <p>※アルコール類は20歳未満の方にはお出しできません</p>
          </div>
        </div>
      </div>
    </div>
  );
}
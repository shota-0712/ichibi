import React, { useState } from 'react';
import { Clock, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MenuItem } from '../components/menu/menu-item';

const coldSobaItems = [
  {
    name: 'ざるそば',
    price: 900,
    allergens: ['そば', '小麦'],
    description: '香り高い十割そばをつめたつゆで',
  },
  {
    name: 'せいろ',
    price: 800,
    allergens: ['そば', '小麦'],
    description: 'せいろでいただく冷たいそば',
  },
  {
    name: '天ざるそば',
    price: 1450,
    allergens: ['そば', '小麦', 'えび'],
    description: '海老と野菜の天ぷら付き',
  },
  {
    name: '天せいろ',
    price: 1350,
    allergens: ['そば', '小麦', 'えび'],
    description: '天ぷら付きせいろ',
  },
  {
    name: '鴨せいろそば',
    price: 1400,
    allergens: ['そば', '小麦'],
    description: '鴨肉の旨みが効いたつけだれ',
  },
  {
    name: 'とりせいろそば',
    price: 1000,
    allergens: ['そば', '小麦', '鶏肉'],
    description: '鶏肉と九条ネギのつけだれ',
  },
  {
    name: '肉せいろ',
    price: 1200,
    allergens: ['そば', '小麦', '豚肉'],
    description: '豚肉の旨みが効いたつけだれ',
  },
];

const hotSobaItems = [
  {
    name: 'かけそば',
    price: 850,
    allergens: ['そば', '小麦'],
    description: '温かい出汁でいただく基本の一杯',
  },
  {
    name: 'とり南蛮そば',
    price: 1200,
    allergens: ['そば', '小麦', '鶏肉'],
    description: '特製タルタルソース添え',
  },
  {
    name: '鴨南蛮そば',
    price: 1500,
    allergens: ['そば', '小麦'],
    description: '肉厚の鴨肉と温かい出汁',
  },
  {
    name: 'かき揚げそば',
    price: 1050,
    allergens: ['そば', '小麦', 'えび'],
    description: '海老と野菜のかき揚げ',
  },
  {
    name: '卵とじそば',
    price: 950,
    allergens: ['そば', '小麦', '卵'],
    description: 'ふんわり卵とじ',
  },
  {
    name: '山菜そば',
    price: 950,
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
    price: 1450,
    allergens: ['そば', '小麦', 'えび'],
    description: '海老と野菜の天ぷら付き',
  },
];

const setMealItems = [
  {
    name: '天丼セット',
    price: 1350,
    allergens: ['小麦', 'えび'],
    description: '天丼とそばのセット',
  },
  {
    name: 'ばくだん丼セット',
    price: 1300,
    allergens: ['鶏肉', '卵'],
    description: 'ばくだん丼とそばのセット',
  },
  {
    name: '親子丼セット',
    price: 1300,
    allergens: ['鶏肉', '卵'],
    description: '親子丼とそばのセット',
  },
  {
    name: '一期一美セット',
    price: 2200,
    allergens: ['そば', '小麦'],
    description: '特別なセットメニュー',
  },
];

const setMealOptions = [
  {
    name: '麺大盛り+50g',
    price: 200,
    description: '麺の量を増量',
  },
];

const teishokuItems = [
  {
    name: '生姜焼き定食',
    price: 800,
    allergens: ['豚肉', '小麦', '大豆'],
    description: '国産豚ロースの生姜焼き',
  },
  {
    name: 'チキン南蛮定食',
    price: 1000,
    allergens: ['鶏肉', '小麦', '卵'],
    description: '特製タルタルソース添え',
  },
];

const teishokuOptions = [
  {
    name: '肉大盛り',
    price: 200,
    description: '肉の量を増量',
  },
  {
    name: 'ご飯大盛り',
    price: 100,
    description: 'ご飯の量を増量',
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
    name: 'ばくだん丼',
    price: 1200,
    allergens: ['鶏肉', '卵'],
    description: '特製のばくだん丼',
  },
  {
    name: '天重',
    price: 1400,
    allergens: ['小麦', 'えび'],
    description: '海老と野菜の天ぷら',
  },
];

const riceBowlOptions = [
  {
    name: 'ご飯大盛り',
    price: 100,
    description: 'ご飯の量を増量',
  },
];

const beerItems = [
  {
    name: 'グラスビール',
    price: 500,
    description: 'キリン一番搾り',
  },
  {
    name: '中ジョッキ',
    price: 600,
    description: 'キリン一番搾り',
  },
  {
    name: '大ジョッキ',
    price: 850,
    description: 'キリン一番搾り',
  },
  {
    name: '瓶ビール',
    price: 800,
    description: 'キリン一番搾り',
  },
];

const shochuItems = [
  {
    name: '黒霧島(ソーダ割り+50)',
    price: 500,
    description: '鹿児島の黒霧島',
  },
  {
    name: '白岳しろ(ソーダ割り+50)',
    price: 600,
    description: '熊本の白岳',
  },
  {
    name: '二階堂(ソーダ割り+50)',
    price: 600,
    description: '福岡の二階堂',
  },
];

const sakeItems = [
  {
    name: '獺祭',
    price: 1550,
    description: '山口の獺祭',
  },
  {
    name: '八海山',
    price: 800,
    description: '新潟の八海山',
  },
  {
    name: '白鶴（正一合）冷・燗',
    price: 450,
    description: '兵庫の白鶴',
  },
];

const softDrinkItems = [
  {
    name: 'コカ・コーラ',
    price: 400,
    description: 'コカ・コーラ',
  },
  {
    name: 'カルピスウォーター',
    price: 400,
    description: 'カルピスウォーター',
  },
  {
    name: 'ジンジャーエール',
    price: 400,
    description: 'ジンジャーエール',
  },
  {
    name: 'オレンジジュース',
    price: 400,
    description: 'オレンジジュース',
  },
  {
    name: 'ウーロン茶',
    price: 400,
    description: 'ウーロン茶',
  },
];

const dessertItems = [
  {
    name: '自家製プリン',
    price: 350,
    allergens: ['卵', '乳'],
    description: '手作りカスタードプリン',
  },
  {
    name: '自家製杏仁豆腐',
    price: 350,
    description: '本格的な杏仁豆腐',
  },
  {
    name: 'バニラアイス',
    price: 350,
    allergens: ['乳'],
    description: '濃厚なバニラビーンズ使用',
  },
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
            {/* Set Meals */}
            <div>
              <h3 className="text-xl font-kanteiryuu mb-6 pb-2 border-b-2 border-japanese-red">セット</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  {setMealItems.map((item) => (
                    <MenuItem key={item.name} {...item} />
                  ))}
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-lg font-kanteiryuu mb-3 text-gray-700">オプション</h4>
                <div className="space-y-2">
                  {setMealOptions.map((item) => (
                    <MenuItem key={item.name} {...item} />
                  ))}
                </div>
              </div>
            </div>

            {/* Cold Soba */}
            <div>
              <h3 className="text-xl font-kanteiryuu mb-6 pb-2 border-b-2 border-japanese-red">冷そば</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  {coldSobaItems.map((item) => (
                    <MenuItem key={item.name} {...item} />
                  ))}
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-lg font-kanteiryuu mb-3 text-gray-700">オプション</h4>
                <div className="space-y-2">
                  {setMealOptions.map((item) => (
                    <MenuItem key={item.name} {...item} />
                  ))}
                </div>
              </div>
            </div>

            {/* Hot Soba */}
            <div>
              <h3 className="text-xl font-kanteiryuu mb-6 pb-2 border-b-2 border-japanese-red">温そば</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  {hotSobaItems.map((item) => (
                    <MenuItem key={item.name} {...item} />
                  ))}
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-lg font-kanteiryuu mb-3 text-gray-700">オプション</h4>
                <div className="space-y-2">
                  {setMealOptions.map((item) => (
                    <MenuItem key={item.name} {...item} />
                  ))}
                </div>
              </div>
            </div>

            {/* Teishoku */}
            <div>
              <h3 className="text-xl font-kanteiryuu mb-6 pb-2 border-b-2 border-japanese-red">定食</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  {teishokuItems.map((item) => (
                    <MenuItem key={item.name} {...item} />
                  ))}
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-lg font-kanteiryuu mb-3 text-gray-700">オプション</h4>
                <div className="space-y-2">
                  {teishokuOptions.map((item) => (
                    <MenuItem key={item.name} {...item} />
                  ))}
                </div>
              </div>
            </div>

            {/* Rice Bowls */}
            <div>
              <h3 className="text-xl font-kanteiryuu mb-6 pb-2 border-b-2 border-japanese-red">丼</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  {riceBowlItems.map((item) => (
                    <MenuItem key={item.name} {...item} />
                  ))}
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-lg font-kanteiryuu mb-3 text-gray-700">オプション</h4>
                <div className="space-y-2">
                  {riceBowlOptions.map((item) => (
                    <MenuItem key={item.name} {...item} />
                  ))}
                </div>
              </div>
            </div>

            {/* Desserts */}
            <div>
              <h3 className="text-xl font-kanteiryuu mb-6 pb-2 border-b-2 border-japanese-red">デザート</h3>
              <div className="space-y-4">
                {dessertItems.map((item) => (
                  <MenuItem key={item.name} {...item} />
                ))}
              </div>
            </div>

            {/* Drinks */}
            <div>
              <h3 className="text-xl font-kanteiryuu mb-6 pb-2 border-b-2 border-japanese-red">ドリンク</h3>
              
              {/* Beer */}
              <div className="mb-8">
                <h4 className="text-lg font-kanteiryuu mb-4 text-gray-700">ビール</h4>
                <div className="space-y-4">
                  {beerItems.map((item) => (
                    <MenuItem key={item.name} {...item} />
                  ))}
                </div>
              </div>

              {/* Shochu */}
              <div className="mb-8">
                <h4 className="text-lg font-kanteiryuu mb-4 text-gray-700">焼酎</h4>
                <div className="space-y-4">
                  {shochuItems.map((item) => (
                    <MenuItem key={item.name} {...item} />
                  ))}
                </div>
              </div>

              {/* Sake */}
              <div className="mb-8">
                <h4 className="text-lg font-kanteiryuu mb-4 text-gray-700">日本酒</h4>
                <div className="space-y-4">
                  {sakeItems.map((item) => (
                    <MenuItem key={item.name} {...item} />
                  ))}
                </div>
              </div>

              {/* Soft Drinks */}
              <div className="mb-8">
                <h4 className="text-lg font-kanteiryuu mb-4 text-gray-700">ソフトドリンク</h4>
                <div className="space-y-4">
                  {softDrinkItems.map((item) => (
                    <MenuItem key={item.name} {...item} />
                  ))}
                </div>
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
                  <MenuItem name="もも" price={170} allergens={['鶏肉']} description="ジューシーな味わい" />
                  <MenuItem name="レバー" price={160} allergens={['鶏肉']} description="濃厚な味わい" />
                  <MenuItem name="タン" price={200} allergens={['鶏肉']} description="コリコリとした食感" />
                  <MenuItem name="ハツ" price={160} allergens={['鶏肉']} description="歯ごたえのある食感" />
                  <MenuItem name="手羽先" price={200} allergens={['鶏肉']} description="香ばしい手羽先" />
                  <MenuItem name="つくね" price={180} allergens={['鶏肉', '卵']} description="ふんわり食感" />
                </div>
                <div className="space-y-4">
                  <MenuItem name="ねぎま" price={180} allergens={['鶏肉']} description="ネギの甘みと鶏肉の旨み" />
                  <MenuItem name="すなぎも" price={160} allergens={['鶏肉']} description="コリコリ食感" />
                  <MenuItem name="なんこつ" price={170} allergens={['鶏肉']} description="シャキシャキ食感" />
                  <MenuItem name="ささみ" price={180} allergens={['鶏肉']} description="あっさりヘルシー" />
                  <MenuItem name="しいたけ" price={160} description="香り豊かな焼きしいたけ" />
                  <MenuItem name="ニラ豚バラ巻き" price={200} allergens={['豚肉']} description="ニラと豚バラの相性抜群" />
                </div>
              </div>
            </div>

            {/* Appetizers */}
            <div>
              <h3 className="text-xl font-kanteiryuu mb-6 pb-2 border-b-2 border-japanese-red">一品料理</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <MenuItem name="トマトスライス" price={350} description="新鮮なトマトのスライス" />
                  <MenuItem name="きのこのバター炒め" price={450} description="香り豊かなきのこのバター炒め" />
                  <MenuItem name="だし巻き卵" price={400} allergens={['卵']} description="出汁の効いたふんわり玉子焼き" />
                  <MenuItem name="冷奴" price={300} allergens={['大豆']} description="冷やっこ" />
                  <MenuItem name="揚げ出し豆腐" price={350} allergens={['大豆']} description="揚げ出し豆腐" />
                  <MenuItem name="ピリ辛きゅうり" price={350} description="さっぱりピリ辛" />
                  <MenuItem name="明太子入りだし巻き卵" price={500} allergens={['卵']} description="明太子入りだし巻き卵" />
                  <MenuItem name="チーズ入りだし巻き卵" price={500} allergens={['卵', '乳']} description="チーズ入りだし巻き卵" />
                </div>
                <div className="space-y-4">
                  <MenuItem name="なすの煮びたし" price={350} description="だしが染みた茄子" />
                  <MenuItem name="オニオンリング" price={350} description="サクサクのオニオンリング" />
                  <MenuItem name="ポテトフライ" price={350} description="カリカリポテトフライ" />
                  <MenuItem name="茶豆" price={400} description="塩茹でした茶豆" />
                  <MenuItem name="ichibiサラダ" price={550} description="季節の野菜を使用した特製サラダ" />
                  <MenuItem name="ごま油塩キャベツ" price={350} description="ごま油の香りが効いたキャベツ" />
                </div>
              </div>
            </div>

            {/* Cold Soba */}
            <div>
              <h3 className="text-xl font-kanteiryuu mb-6 pb-2 border-b-2 border-japanese-red">冷そば</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  {coldSobaItems.map((item) => (
                    <MenuItem key={item.name} {...item} />
                  ))}
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-lg font-kanteiryuu mb-3 text-gray-700">オプション</h4>
                <div className="space-y-2">
                  {setMealOptions.map((item) => (
                    <MenuItem key={item.name} {...item} />
                  ))}
                </div>
              </div>
            </div>

            {/* Hot Soba */}
            <div>
              <h3 className="text-xl font-kanteiryuu mb-6 pb-2 border-b-2 border-japanese-red">温そば</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  {hotSobaItems.map((item) => (
                    <MenuItem key={item.name} {...item} />
                  ))}
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-lg font-kanteiryuu mb-3 text-gray-700">オプション</h4>
                <div className="space-y-2">
                  {setMealOptions.map((item) => (
                    <MenuItem key={item.name} {...item} />
                  ))}
                </div>
              </div>
            </div>

            {/* Teishoku */}
            <div>
              <h3 className="text-xl font-kanteiryuu mb-6 pb-2 border-b-2 border-japanese-red">定食</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  {teishokuItems.map((item) => (
                    <MenuItem key={item.name} {...item} />
                  ))}
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-lg font-kanteiryuu mb-3 text-gray-700">オプション</h4>
                <div className="space-y-2">
                  {teishokuOptions.map((item) => (
                    <MenuItem key={item.name} {...item} />
                  ))}
                </div>
              </div>
            </div>

            {/* Rice Bowls */}
            <div>
              <h3 className="text-xl font-kanteiryuu mb-6 pb-2 border-b-2 border-japanese-red">丼</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  {riceBowlItems.map((item) => (
                    <MenuItem key={item.name} {...item} />
                  ))}
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-lg font-kanteiryuu mb-3 text-gray-700">オプション</h4>
                <div className="space-y-2">
                  {riceBowlOptions.map((item) => (
                    <MenuItem key={item.name} {...item} />
                  ))}
                </div>
              </div>
            </div>

            {/* Drinks */}
            <div>
              <h3 className="text-xl font-kanteiryuu mb-6 pb-2 border-b-2 border-japanese-red">ドリンク</h3>
              
              {/* Beer */}
              <div className="mb-8">
                <h4 className="text-lg font-kanteiryuu mb-4 text-gray-700">ビール</h4>
                <div className="space-y-4">
                  {beerItems.map((item) => (
                    <MenuItem key={item.name} {...item} />
                  ))}
                </div>
              </div>

              {/* Highball */}
              <div className="mb-8">
                <h4 className="text-lg font-kanteiryuu mb-4 text-gray-700">ハイボール</h4>
                <div className="space-y-4">
                  <MenuItem name="ハイボール" price={500} description="角ハイボール" />
                  <MenuItem name="ジンジャーハイ" price={550} description="ジンジャーハイボール" />
                  <MenuItem name="コークハイ" price={550} description="コーラハイボール" />
                  <MenuItem name="緑茶ハイ" price={500} description="緑茶ハイボール" />
                  <MenuItem name="ウーロンハイ" price={550} description="ウーロンハイボール" />
                </div>
              </div>

              {/* Whiskey */}
              <div className="mb-8">
                <h4 className="text-lg font-kanteiryuu mb-4 text-gray-700">ウイスキー</h4>
                <div className="space-y-4">
                  <MenuItem name="ロック" price={500} description="ウイスキーロック" />
                  <MenuItem name="ロック" price={600} description="プレミアムウイスキーロック" />
                </div>
              </div>

              {/* Shochu */}
              <div className="mb-8">
                <h4 className="text-lg font-kanteiryuu mb-4 text-gray-700">焼酎</h4>
                <div className="space-y-4">
                  {shochuItems.map((item) => (
                    <MenuItem key={item.name} {...item} />
                  ))}
                </div>
              </div>

              {/* Sake */}
              <div className="mb-8">
                <h4 className="text-lg font-kanteiryuu mb-4 text-gray-700">日本酒</h4>
                <div className="space-y-4">
                  {sakeItems.map((item) => (
                    <MenuItem key={item.name} {...item} />
                  ))}
                </div>
              </div>

              {/* Sour */}
              <div className="mb-8">
                <h4 className="text-lg font-kanteiryuu mb-4 text-gray-700">サワー</h4>
                <div className="space-y-4">
                  <MenuItem name="グレープフルーツサワー" price={500} description="グレープフルーツサワー" />
                  <MenuItem name="レモンサワー" price={500} description="レモンサワー" />
                  <MenuItem name="ジンジャーサワー" price={550} description="ジンジャーサワー" />
                  <MenuItem name="カルピスサワー" price={500} description="カルピスサワー" />
                  <MenuItem name="巨峰サワー" price={500} description="巨峰サワー" />
                  <MenuItem name="コーラサワー" price={550} description="コーラサワー" />
                  <MenuItem name="青リンゴサワー" price={500} description="青リンゴサワー" />
                </div>
              </div>

              {/* Umeshu */}
              <div className="mb-8">
                <h4 className="text-lg font-kanteiryuu mb-4 text-gray-700">梅酒</h4>
                <div className="space-y-4">
                  <MenuItem name="ロック" price={500} description="梅酒ロック" />
                  <MenuItem name="ソーダ割" price={550} description="梅酒ソーダ割り" />
                  <MenuItem name="水割り" price={500} description="梅酒水割り" />
                </div>
              </div>

              {/* Cocktails */}
              <div className="mb-8">
                <h4 className="text-lg font-kanteiryuu mb-4 text-gray-700">カクテル</h4>
                <div className="space-y-4">
                  <MenuItem name="カシスオレンジ" price={500} description="カシスオレンジ" />
                  <MenuItem name="カシスウーロン" price={500} description="カシスウーロン" />
                  <MenuItem name="カシスソーダ" price={500} description="カシスソーダ" />
                </div>
              </div>

              {/* Non-Alcoholic */}
              <div className="mb-8">
                <h4 className="text-lg font-kanteiryuu mb-4 text-gray-700">ノンアルコール</h4>
                <div className="space-y-4">
                  <MenuItem name="アサヒ　ゼロ" price={650} description="ノンアルコールビール" />
                </div>
              </div>

              {/* Soft Drinks */}
              <div className="mb-8">
                <h4 className="text-lg font-kanteiryuu mb-4 text-gray-700">ソフトドリンク</h4>
                <div className="space-y-4">
                  {softDrinkItems.map((item) => (
                    <MenuItem key={item.name} {...item} />
                  ))}
                </div>
              </div>
            </div>

            {/* Desserts */}
            <div>
              <h3 className="text-xl font-kanteiryuu mb-6 pb-2 border-b-2 border-japanese-red">デザート</h3>
              <div className="space-y-4">
                {dessertItems.map((item) => (
                  <MenuItem key={item.name} {...item} />
                ))}
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
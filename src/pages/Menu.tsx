import React, { useState } from 'react';
import { Clock } from 'lucide-react';
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
    name: '一期一美セット',
    price: 2200,
    allergens: ['そば', '小麦'],
    description: '特別なセットメニュー',
  },
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
];

const setMealOptions = [
  {
    name: '麺大盛り+50g',
    price: 200,
    description: '麺の量を増量',
  },
];

const coldSobaOptions = [
  {
    name: '2枚もり',
    price: 1300,
    description: '通常+500円でおそばを2枚お楽しみいただけます',
  },
];

const hotSobaOptions = [
  {
    name: '2枚もり',
    price: 1350,
    description: '通常+500円で温かいおそばを2枚にできます',
  },
];

const teishokuItems = [
  {
    name: '生姜焼き定食',
    price: 1150,
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
    name: 'アサヒスーパードライ樽生 グラスビール',
    price: 500,
    description: 'アサヒスーパードライ樽生',
  },
  {
    name: 'アサヒスーパードライ樽生 中ジョッキ',
    price: 700,
    description: 'アサヒスーパードライ樽生',
  },
  {
    name: 'アサヒスーパードライ樽生 大ジョッキ',
    price: 900,
    description: 'アサヒスーパードライ樽生',
  },
  {
    name: 'キリン一番搾り 中瓶',
    price: 750,
    description: 'キリン一番搾り',
  },
];

const highballItems = [
  {
    name: 'ハイボール',
    price: 500,
    description: 'ハイボール',
  },
  {
    name: 'ジンジャーハイ',
    price: 550,
    description: 'ジンジャーハイボール',
  },
  {
    name: 'コークハイ',
    price: 550,
    description: 'コーラハイボール',
  },
  {
    name: '緑茶ハイ',
    price: 500,
    description: '緑茶ハイボール',
  },
  {
    name: 'ウーロンハイ',
    price: 550,
    description: 'ウーロンハイボール',
  },
];

const whiskeyItems = [
  {
    name: 'ロック',
    price: 500,
    description: 'ウイスキーロック',
  },
  {
    name: 'ソーダ割り',
    price: 550,
    description: 'ウイスキーソーダ割り',
  },
  {
    name: '水割り',
    price: 500,
    description: 'ウイスキー水割り',
  },
];

const shochuItems = [
  {
    name: '黒霧島 ロック',
    price: 500,
    description: '鹿児島の黒霧島',
  },
  {
    name: '黒霧島 ソーダ割り',
    price: 550,
    description: '鹿児島の黒霧島',
  },
  {
    name: '黒霧島 水割り',
    price: 500,
    description: '鹿児島の黒霧島',
  },
  {
    name: '白岳しろ ロック',
    price: 600,
    description: '熊本の白岳',
  },
  {
    name: '白岳しろ ソーダ割り',
    price: 650,
    description: '熊本の白岳',
  },
  {
    name: '白岳しろ 水割り',
    price: 600,
    description: '熊本の白岳',
  },
  {
    name: '大分麦焼酎二階堂 ロック',
    price: 500,
    description: '大分の二階堂',
  },
  {
    name: '大分麦焼酎二階堂 ソーダ割り',
    price: 550,
    description: '大分の二階堂',
  },
  {
    name: '大分麦焼酎二階堂 水割り',
    price: 500,
    description: '大分の二階堂',
  },
];

const sakeItems = [
  {
    name: '純米酒(一合）',
    price: 700,
    description: '米の旨味をしっかり感じられる純米酒',
  },
];

const sourItems = [
  {
    name: 'グレープフルーツサワー',
    price: 550,
    description: 'グレープフルーツサワー',
  },
  {
    name: 'レモンサワー',
    price: 550,
    description: 'レモンサワー',
  },
  {
    name: 'ジンジャーサワー',
    price: 600,
    description: 'ジンジャーサワー',
  },
  {
    name: 'カルピスサワー',
    price: 550,
    description: 'カルピスサワー',
  },
  {
    name: '巨峰サワー',
    price: 550,
    description: '巨峰サワー',
  },
  {
    name: 'コーラサワー',
    price: 600,
    description: 'コーラサワー',
  },
  {
    name: '青リンゴサワー',
    price: 550,
    description: '青リンゴサワー',
  },
];

const umeshuItems = [
  {
    name: '濃醇梅酒 ロック',
    price: 500,
    description: '濃醇梅酒',
  },
  {
    name: '濃醇梅酒 ソーダ割り',
    price: 550,
    description: '濃醇梅酒',
  },
  {
    name: '濃醇梅酒 水割り',
    price: 500,
    description: '濃醇梅酒',
  },
];

const wineItems = [
  {
    name: '赤ワイン（サンタ・ヘレナ・アパルカ・カベルナ・メルロー）',
    price: 500,
    description: '赤ワイン',
  },
  {
    name: '白ワイン（サンタ・ヘレナ・アパルカ・シャルドネ・セミヨン）',
    price: 500,
    description: '白ワイン',
  },
];

const cocktailItems = [
  {
    name: 'カシスオレンジ',
    price: 500,
    description: 'カシスオレンジ',
  },
  {
    name: 'カシスウーロン',
    price: 500,
    description: 'カシスウーロン',
  },
  {
    name: 'カシスソーダ',
    price: 500,
    description: 'カシスソーダ',
  },
];

const nonAlcoholicItems = [
  {
    name: 'キリン一番搾り グリーンズフリー　小瓶',
    price: 600,
    description: 'ノンアルコールビール',
  },
];

const softDrinkItems = [
  {
    name: 'コカコーラ',
    price: 400,
    description: 'コカコーラ',
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
    name: '緑茶',
    price: 400,
    description: '緑茶',
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
                  {coldSobaOptions.map((item) => (
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
                  {hotSobaOptions.map((item) => (
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
                  <MenuItem name="鶏むね（ねぎ塩）" price={170} allergens={['鶏肉']} description="さっぱりねぎ塩" />
                  <MenuItem name="つくね" price={180} allergens={['鶏肉', '卵']} description="ふんわり食感" />
                </div>
                <div className="space-y-4">
                  <MenuItem name="すなぎも" price={160} allergens={['鶏肉']} description="コリコリ食感" />
                  <MenuItem name="なんこつ" price={170} allergens={['鶏肉']} description="シャキシャキ食感" />
                  <MenuItem name="しいたけ" price={220} description="香り豊かな焼きしいたけ" />
                  <MenuItem name="トマトベーコン" price={220} allergens={['豚肉']} description="トマトとベーコンの旨み" />
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
                  {coldSobaOptions.map((item) => (
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
                  {hotSobaOptions.map((item) => (
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
                <h4 className="text-lg font-kanteiryuu mb-4 text-gray-700">生ビール</h4>
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
                  {highballItems.map((item) => (
                    <MenuItem key={item.name} {...item} />
                  ))}
                </div>
              </div>

              {/* Whiskey */}
              <div className="mb-8">
                <h4 className="text-lg font-kanteiryuu mb-4 text-gray-700">ウイスキー</h4>
                <div className="space-y-4">
                  {whiskeyItems.map((item) => (
                    <MenuItem key={item.name} {...item} />
                  ))}
                </div>
              </div>

              {/* Sour */}
              <div className="mb-8">
                <h4 className="text-lg font-kanteiryuu mb-4 text-gray-700">サワー</h4>
                <div className="space-y-4">
                  {sourItems.map((item) => (
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

              {/* Umeshu */}
              <div className="mb-8">
                <h4 className="text-lg font-kanteiryuu mb-4 text-gray-700">濃醇梅酒</h4>
                <div className="space-y-4">
                  {umeshuItems.map((item) => (
                    <MenuItem key={item.name} {...item} />
                  ))}
                </div>
              </div>

              {/* Wine */}
              <div className="mb-8">
                <h4 className="text-lg font-kanteiryuu mb-4 text-gray-700">ワイン</h4>
                <div className="space-y-4">
                  {wineItems.map((item) => (
                    <MenuItem key={item.name} {...item} />
                  ))}
                </div>
              </div>

              {/* Cocktails */}
              <div className="mb-8">
                <h4 className="text-lg font-kanteiryuu mb-4 text-gray-700">カクテル</h4>
                <div className="space-y-4">
                  {cocktailItems.map((item) => (
                    <MenuItem key={item.name} {...item} />
                  ))}
                </div>
              </div>

              {/* Non-Alcoholic */}
              <div className="mb-8">
                <h4 className="text-lg font-kanteiryuu mb-4 text-gray-700">ノンアルコール</h4>
                <div className="space-y-4">
                  {nonAlcoholicItems.map((item) => (
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
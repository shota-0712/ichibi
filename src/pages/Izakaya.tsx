import React from 'react';
import { Clock, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MenuItem } from '../components/menu/menu-item';

export function Izakaya() {
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
      
      {/* Hero with high-priority img for faster paint */}
      <div className="h-[90vh] relative">
        <img
          src="/image/yakitori.webp"
          alt="居酒屋メニュー ヒーロー"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/40" aria-hidden="true"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 pt-20">
          <h1 className="text-white text-5xl md:text-7xl font-kanteiryuu mb-6 drop-shadow-lg">居酒屋メニュー</h1>
          <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="flex items-center gap-3 text-white">
              <Clock className="h-6 w-6 text-japanese-gold" />
              <div>
                <h3 className="font-semibold text-lg">居酒屋営業</h3>
                <p className="text-japanese-gold">17:00～22:00 (L.O.21:30)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu */}
      <div className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {/* Yakitori */}
              <div>
                <h3 className="text-xl font-kanteiryuu mb-6 pb-2 border-b-2 border-japanese-red">焼き鳥</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <MenuItem 
                      name="とりもも"
                      price={150}
                      allergens={['鶏肉']}
                      description="ジューシーな味わい"
                    />
                    <MenuItem 
                      name="レバー"
                      price={150}
                      allergens={['鶏肉']}
                      description="濃厚な味わい"
                    />
                    <MenuItem 
                      name="タン"
                      price={150}
                      allergens={['鶏肉']}
                      description="コリコリとした食感"
                    />
                    <MenuItem 
                      name="ハツ"
                      price={150}
                      allergens={['鶏肉']}
                      description="歯ごたえのある食感"
                    />
                    <MenuItem 
                      name="手羽先"
                      price={150}
                      allergens={['鶏肉']}
                      description="香ばしい手羽先"
                    />
                    <MenuItem 
                      name="つくね"
                      price={150}
                      allergens={['鶏肉', '卵']}
                      description="ふんわり食感"
                    />
                  </div>
                  <div className="space-y-4">
                    <MenuItem 
                      name="ねぎま"
                      price={150}
                      allergens={['鶏肉']}
                      description="ネギの甘みと鶏肉の旨み"
                    />
                    <MenuItem 
                      name="すなぎも"
                      price={150}
                      allergens={['鶏肉']}
                      description="コリコリ食感"
                    />
                    <MenuItem 
                      name="なんこつ"
                      price={150}
                      allergens={['鶏肉']}
                      description="シャキシャキ食感"
                    />
                    <MenuItem 
                      name="ささみ"
                      price={150}
                      allergens={['鶏肉']}
                      description="あっさりヘルシー"
                    />
                    <MenuItem 
                      name="しいたけ"
                      price={150}
                      description="香り豊かな焼きしいたけ"
                    />
                    <MenuItem 
                      name="アスパラベーコン"
                      price={150}
                      allergens={['豚肉']}
                      description="アスパラとベーコンの相性抜群"
                    />
                    <MenuItem 
                      name="ニンニク焼き"
                      price={150}
                      description="香ばしいニンニク"
                    />
                  </div>
                </div>
              </div>

              {/* Appetizers */}
              <div>
                <h3 className="text-xl font-kanteiryuu mb-6 pb-2 border-b-2 border-japanese-red">一品料理</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <MenuItem 
                      name="おしんこ盛り合わせ"
                      price={300}
                      description="季節の漬物の盛り合わせ"
                    />
                    <MenuItem 
                      name="トマトスライス"
                      price={350}
                      description="新鮮なトマトのスライス"
                    />
                    <MenuItem 
                      name="栃尾の油揚げ"
                      price={350}
                      allergens={['大豆']}
                      description="名物の油揚げ"
                    />
                    <MenuItem 
                      name="だし巻き卵"
                      price={500}
                      allergens={['卵']}
                      description="出汁の効いたふんわり玉子焼き"
                    />
                    <MenuItem 
                      name="冷奴"
                      price={350}
                      allergens={['大豆']}
                      description="冷やっこ"
                    />
                    <MenuItem 
                      name="ピリ辛きゅうり"
                      price={250}
                      description="さっぱりピリ辛"
                    />
                  </div>
                  <div className="space-y-4">
                    <MenuItem 
                      name="たこきゅうり"
                      price={450}
                      description="たことキュウリの和え物"
                    />
                    <MenuItem 
                      name="なすの煮びたし"
                      price={350}
                      description="だしが染みた茄子"
                    />
                    <MenuItem 
                      name="ポテトサラダ"
                      price={350}
                      allergens={['卵']}
                      description="自家製ポテトサラダ"
                    />

                    <MenuItem 
                      name="酢もつ"
                      price={350}
                      description="さっぱり味の酢もつ"
                    />
                    <MenuItem 
                      name="剣先イカ"
                      price={350}
                      description="新鮮な剣先イカ"
                    />
                    <MenuItem 
                      name="えだまめ"
                      price={300}
                      allergens={['大豆']}
                      description="塩茹でした枝豆"
                    />
                    <MenuItem 
                      name="いちびサラダ"
                      price={500}
                      description="季節の野菜を使用した特製サラダ"
                    />
                  </div>
                </div>
              </div>

              {/* Soba */}
              <div>
                <h3 className="text-xl font-kanteiryuu mb-6 pb-2 border-b-2 border-japanese-red">そば</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <MenuItem 
                      name="ざるそば"
                      price={780}
                      allergens={['そば', '小麦']}
                      description="香り高い十割そば"
                    />
                    <MenuItem 
                      name="天ざるそば"
                      price={1200}
                      allergens={['そば', '小麦', 'えび']}
                      description="海老と野菜の天ぷら付き"
                    />
                    <MenuItem 
                      name="鴨せいろそば"
                      price={1400}
                      allergens={['そば', '小麦']}
                      description="鴨肉の旨みが効いたつけだれ"
                    />
                    <MenuItem 
                      name="とりせいろそば"
                      price={1080}
                      allergens={['そば', '小麦', '鶏肉']}
                      description="鶏肉と九条ネギのつけだれ"
                    />
                  </div>
                </div>
              </div>

              {/* Hot Soba */}
              <div>
                <h3 className="text-xl font-kanteiryuu mb-6 pb-2 border-b-2 border-japanese-red">温そば</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <MenuItem 
                      name="かけそば"
                      price={780}
                      allergens={['そば', '小麦']}
                      description="温かい出汁でいただく基本の一杯"
                    />
                    <MenuItem 
                      name="とり南蛮そば"
                      price={1080}
                      allergens={['そば', '小麦', '鶏肉']}
                      description="特製タルタルソース添え"
                    />
                    <MenuItem 
                      name="鴨南蛮そば"
                      price={1400}
                      allergens={['そば', '小麦']}
                      description="肉厚の鴨肉と温かい出汁"
                    />
                    <MenuItem 
                      name="かき揚げそば"
                      price={850}
                      allergens={['そば', '小麦', 'えび']}
                      description="海老と野菜のかき揚げ"
                    />
                    <MenuItem 
                      name="きつねそば"
                      price={850}
                      allergens={['そば', '小麦', '大豆']}
                      description="甘辛く煮た油揚げをのせて"
                    />
                    <MenuItem 
                      name="とろろそば"
                      price={850}
                      allergens={['そば', '小麦', 'やまいも']}
                      description="自家製とろろをのせて"
                    />
                    <MenuItem 
                      name="山菜そば"
                      price={850}
                      allergens={['そば', '小麦']}
                      description="季節の山菜を添えて"
                    />
                    <MenuItem 
                      name="たぬきそば"
                      price={780}
                      allergens={['そば', '小麦']}
                      description="カリカリの天かすをのせて"
                    />
                    <MenuItem 
                      name="天ぷらそば"
                      price={1200}
                      allergens={['そば', '小麦', 'えび']}
                      description="海老と野菜の天ぷら付き"
                    />
                  </div>
                </div>
              </div>

              {/* Set Meals */}
              <div>
                <h3 className="text-xl font-kanteiryuu mb-6 pb-2 border-b-2 border-japanese-red">定食</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <MenuItem 
                      name="生姜焼定食"
                      price={800}
                      allergens={['豚肉', '小麦', '大豆']}
                      description="国産豚ロースの生姜焼き"
                    />
                    <MenuItem 
                      name="唐揚げ定食"
                      price={800}
                      allergens={['鶏肉', '小麦']}
                      description="にんにく醤油で味付けした唐揚げ"
                    />
                    <MenuItem 
                      name="アジフライ定食"
                      price={800}
                      allergens={['小麦']}
                      description="新鮮なアジを使用したフライ"
                    />
                    <MenuItem 
                      name="エビフライ定食"
                      price={1000}
                      allergens={['小麦', 'えび']}
                      description="大ぶりのエビフライ"
                    />
                    <MenuItem 
                      name="ミックスフライ定食"
                      price={1000}
                      allergens={['小麦', 'えび']}
                      description="エビ、白身魚、カキのフライ"
                    />
                    <MenuItem 
                      name="ハンバーグ定食"
                      price={800}
                      allergens={['小麦', '卵', '乳']}
                      description="手ごねハンバーグ"
                    />
                    <MenuItem 
                      name="チキン南蛮定食"
                      price={800}
                      allergens={['鶏肉', '小麦', '卵']}
                      description="特製タルタルソース添え"
                    />
                    <MenuItem 
                      name="とんかつ定食"
                      price={1000}
                      allergens={['豚肉', '小麦']}
                      description="国産豚ロースカツ"
                    />

                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-600">※定食には味噌汁、小鉢2品、ご飯、お新香付き</p>
              </div>

              {/* Rice Bowls */}
              <div>
                <h3 className="text-xl font-kanteiryuu mb-6 pb-2 border-b-2 border-japanese-red">丼物</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <MenuItem 
                      name="親子丼"
                      price={800}
                      allergens={['鶏肉', '卵']}
                      description="ふんわり玉子と鶏肉"
                    />
                    <MenuItem 
                      name="玉子丼"
                      price={650}
                      allergens={['卵']}
                      description="だし巻き玉子をのせて"
                    />
                    <MenuItem 
                      name="かつ丼"
                      price={1000}
                      allergens={['豚肉', '小麦', '卵']}
                      description="サクサクのカツと玉子とじ"
                    />
                    <MenuItem 
                      name="天丼"
                      price={1000}
                      allergens={['小麦', 'えび']}
                      description="海老と野菜の天ぷら"
                    />
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-600">※丼物には味噌汁、お新香付き</p>
              </div>

              {/* Desserts */}
              <div>
                <h3 className="text-xl font-kanteiryuu mb-6 pb-2 border-b-2 border-japanese-red">デザート</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <MenuItem 
                      name="抹茶アイス"
                      price={380}
                      allergens={['乳']}
                      description="宇治抹茶使用"
                    />
                    <MenuItem 
                      name="バニラアイス"
                      price={380}
                      allergens={['乳']}
                      description="濃厚なバニラビーンズ使用"
                    />
                  </div>
                  <div className="space-y-4">
                    <MenuItem 
                      name="自家製プリン"
                      price={380}
                      allergens={['卵', '乳']}
                      description="手作りカスタードプリン"
                    />
                    <MenuItem 
                      name="杏仁豆腐"
                      price={450}
                      description="本格的な杏仁豆腐"
                    />
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
    </div>
  );
}
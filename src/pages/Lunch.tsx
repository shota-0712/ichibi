import React from 'react';
import { Clock, Utensils } from 'lucide-react';
import { MenuItem } from '../components/menu/menu-item';

export function Lunch() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div 
        className="h-[60vh] relative bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://i.ibb.co/DmCpYJ1/soba.webp")',
        }}
      >
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">ランチメニュー</h1>
        </div>
      </div>

      {/* Business Hours */}
      <div className="py-12 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-5 w-5 text-japanese-red" />
                  <h3 className="font-semibold">ランチタイム</h3>
                </div>
                <p>11:00～14:00 (L.O.13:30)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {/* Cold Soba */}
              <div>
                <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-japanese-red">冷たいそば</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <MenuItem 
                      name="ざるそば"
                      price={780}
                      allergens={['そば', '小麦']}
                      description="香り高い十割そばをつめたつゆで"
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
                <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-japanese-red">温かいそば</h3>
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
                <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-japanese-red">定食</h3>
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
                    <MenuItem 
                      name="刺身定食"
                      price={1200}
                      description="旬の魚介の盛り合わせ"
                    />
                    <MenuItem 
                      name="焼きサバ定食"
                      price={800}
                      allergens={['さば']}
                      description="脂ののった国産サバ"
                    />
                    <MenuItem 
                      name="金目鯛煮付け定食"
                      price="時価"
                      description="地元で獲れた金目鯛の煮付け"
                    />
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-600">※定食には味噌汁、ご飯、お新香付き</p>
              </div>

              {/* Rice Bowls */}
              <div>
                <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-japanese-red">丼物</h3>
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
                    <MenuItem 
                      name="うな重"
                      price={4000}
                      description="厳選した国産うなぎ"
                    />
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-600">※丼物には味噌汁、お新香付き</p>
              </div>

              {/* Desserts */}
              <div>
                <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-japanese-red">デザート</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <MenuItem 
                      name="抹茶アイス"
                      price={ 380}
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
                      name="本日のシャーベット"
                      price={380}
                      description="季節のフルーツを使用"
                    />
                    <MenuItem 
                      name="わらび餅"
                      price={450}
                      description="黒蜜ときな粉添え"
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
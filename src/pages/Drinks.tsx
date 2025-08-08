import { Clock, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MenuItem } from '../components/menu/menu-item';

export function Drinks() {
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
          src="/image/nihonnshu.webp"
          alt="飲み物メニュー ヒーロー"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/40" aria-hidden="true"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 pt-20">
          <h1 className="text-white text-5xl md:text-7xl font-kanteiryuu mb-6 drop-shadow-lg">飲み物メニュー</h1>
          <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="flex items-center gap-3 text-white">
              <Clock className="h-6 w-6 text-japanese-gold" />
              <div>
                <h3 className="font-semibold text-lg">営業時間</h3>
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
              {/* Beer */}
              <div>
                <h3 className="text-xl font-kanteiryuu mb-6 pb-2 border-b-2 border-japanese-red">ビール</h3>
                <div className="space-y-4">
                  <MenuItem 
                    name="キリン一番搾り（生） 中ジョッキ"
                    price={636}
                  />
                  <MenuItem 
                    name="キリンクラシックラガー"
                    price={768}
                  />
                  <MenuItem 
                    name="日本のクラフトビール"
                    price={713}
                    description="スプリングバレー 豊潤496・スプリングバレー シルクエール〈白〉"
                  />
                  <MenuItem 
                    name="ホッピー＆焼酎セット"
                    price={603}
                  />
                  <MenuItem 
                    name="追加焼酎（ナカ）"
                    price={383}
                  />
                  <MenuItem 
                    name="追加ホッピー"
                    price={383}
                  />
                  <MenuItem 
                    name="ハイネケン 小瓶"
                    price={746}
                  />
                  <MenuItem 
                    name="キリングリーンズフリー"
                    price={493}
                  />
                  <MenuItem 
                    name="ビアボール"
                    price={603}
                  />
                  <MenuItem 
                    name="ジンジャービアボール"
                    price={658}
                  />
                  <MenuItem 
                    name="コークビアボール"
                    price={658}
                  />
                </div>
              </div>

              {/* Highball */}
              <div>
                <h3 className="text-xl font-kanteiryuu mb-6 pb-2 border-b-2 border-japanese-red">ハイボール</h3>
                <div className="space-y-4">
                  <MenuItem 
                    name="角ハイボール"
                    price={548}
                  />
                  <MenuItem 
                    name="ジムビームハイボール"
                    price={493}
                  />
                  <MenuItem 
                    name="ジムビームコーク"
                    price={548}
                  />
                  <MenuItem 
                    name="ジムビームジンジャー"
                    price={548}
                  />
                  <MenuItem 
                    name="ジムビームアップルハイボール"
                    price={548}
                  />
                  <MenuItem 
                    name="陸ハイボール"
                    price={548}
                  />
                </div>
              </div>

              {/* Sour */}
              <div>
                <h3 className="text-xl font-kanteiryuu mb-6 pb-2 border-b-2 border-japanese-red">サワー</h3>
                <div className="space-y-4">
                  <MenuItem 
                    name="こだわり酒場のレモンサワー"
                    price={548}
                  />
                  <MenuItem 
                    name="こだわり酒場のタコハイ"
                    price={548}
                  />
                  <MenuItem 
                    name="氷結レモン"
                    price={548}
                  />
                  <MenuItem 
                    name="氷結レモン無糖"
                    price={548}
                  />
                  <MenuItem 
                    name="青汁ハイ"
                    price={548}
                  />
                  <MenuItem 
                    name="玄米茶ハイ"
                    price={548}
                  />
                  <MenuItem 
                    name="ウーロンハイ"
                    price={548}
                  />
                  <MenuItem 
                    name="カルピスサワー"
                    price={548}
                  />
                  <MenuItem 
                    name="りんごサワー"
                    price={548}
                  />
                  <MenuItem 
                    name="生茶ハイ"
                    price={548}
                  />
                  <MenuItem 
                    name="南高梅サワー"
                    price={548}
                  />
                  <MenuItem 
                    name="凍結レモンサワー"
                    price={603}
                  />
                  <MenuItem 
                    name="追加サワー"
                    price={603}
                  />
                  <MenuItem 
                    name="生絞りピンクグレープフルーツサワー"
                    price={603}
                  />
                  <MenuItem 
                    name="生絞りレモンサワー"
                    price={603}
                  />
                </div>
              </div>

              {/* Cocktails */}
              <div>
                <h3 className="text-xl font-kanteiryuu mb-6 pb-2 border-b-2 border-japanese-red">カクテル</h3>
                <div className="space-y-4">
                  <MenuItem 
                    name="カシスオレンジ"
                    price={548}
                  />
                  <MenuItem 
                    name="カシスウーロン"
                    price={548}
                  />
                  <MenuItem 
                    name="カシスソーダ"
                    price={548}
                  />
                  <MenuItem 
                    name="翠ジンソーダ"
                    price={526}
                  />
                  <MenuItem 
                    name="翠ジンジンジャー"
                    price={581}
                  />
                </div>
              </div>

              {/* Non-Alcoholic */}
              <div>
                <h3 className="text-xl font-kanteiryuu mb-6 pb-2 border-b-2 border-japanese-red">ノンアルコール</h3>
                <div className="space-y-4">
                  <MenuItem 
                    name="ノンアルコールビール"
                    price={603}
                  />
                  <MenuItem 
                    name="まるで梅酒なノンアルコールソーダ"
                    price={493}
                  />
                  <MenuItem 
                    name="ノンアルでワインの休日 赤"
                    price={603}
                  />
                </div>
              </div>

              {/* Soft Drinks */}
              <div>
                <h3 className="text-xl font-kanteiryuu mb-6 pb-2 border-b-2 border-japanese-red">ソフトドリンク</h3>
                <div className="space-y-4">
                  <MenuItem 
                    name="コカ・コーラゼロ"
                    price={383}
                  />
                  <MenuItem 
                    name="コカ・コーラ"
                    price={383}
                  />
                  <MenuItem 
                    name="カルピスウォーター"
                    price={383}
                  />
                  <MenuItem 
                    name="ジンジャーエール"
                    price={383}
                  />
                  <MenuItem 
                    name="オレンジジュース"
                    price={383}
                  />
                  <MenuItem 
                    name="生茶"
                    price={383}
                  />
                  <MenuItem 
                    name="玄米茶"
                    price={383}
                  />
                  <MenuItem 
                    name="アイス/ホット ウーロン茶"
                    price={383}
                  />
                  <MenuItem 
                    name="アイス/ホット 青汁"
                    price={383}
                  />
                  <MenuItem 
                    name="ファンタグレープ"
                    price={383}
                  />
                </div>
              </div>
            </div>

            <div className="mt-12 text-sm text-gray-600">
              <p>※価格は全て税込表示です</p>
              <p>※アルコール類は20歳未満の方にはお出しできません</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
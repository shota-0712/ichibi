import React from 'react';
import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export function DiningPhilosophy() {
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

      {/* Header */}
      <div className="bg-japanese-indigo text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-kanteiryuu mb-4">料理へのこだわり</h1>
          <p className="text-lg text-japanese-gold">一期一美の味づくり</p>
        </div>
      </div>

      {/* Content */}
      <div className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-12">
            <section>
              <h2 className="text-xl font-kanteiryuu mb-4 pb-2 border-b-2 border-japanese-red">国産石臼挽きの蕎麦粉</h2>
              <p className="text-lg text-gray-700 font-kanteiryuu">
                北海道、栃木、茨城など、季節ごとに最良の産地を厳選した国産石臼挽きの蕎麦粉を使用。石臼でゆっくりと挽かれた蕎麦粉ならではの豊かな香りと風味をお楽しみいただけます。
              </p>
            </section>

            <section>
              <p className="text-lg text-gray-700 font-kanteiryuu">
                様々なジャンル技を磨いたシェフが一品一品丁寧に作り上げるお料理を心を込めておもてなし致します
              </p>
            </section>

            <section className="space-y-6">
              <div>
                <h3 className="text-xl font-kanteiryuu mb-2">手打ち・手切り蕎麦</h3>
                <p className="text-lg text-gray-700 font-kanteiryuu">
                  一本一本丁寧に手打ちで仕上げ、手切りでお出しする蕎麦。十割蕎麦と外二蕎麦の2種類をご用意しております。
                </p>
              </div>
              <div>
                <h4 className="text-lg font-kanteiryuu mb-1">十割蕎麦</h4>
                <p className="text-gray-700 font-kanteiryuu">
                  国産石臼挽きの蕎麦粉のみを使用し、毎日手打ち・手切りでご提供。蕎麦本来の香りと風味を堪能できます。
                </p>
              </div>
              <div>
                <h4 className="text-lg font-kanteiryuu mb-1">外ニ蕎麦</h4>
                <p className="text-gray-700 font-kanteiryuu">
                  江戸前の喉越しを堪能できます
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-kanteiryuu mb-2">蕎麦つゆ</h3>
              <p className="text-lg text-gray-700 font-kanteiryuu">
                昔ながらの技術で作るかえしに鰹節、サバ節を加え風味豊かな蕎麦つゆを店内で作り上げています
              </p>
            </section>

            <section>
              <h3 className="text-xl font-kanteiryuu mb-2">定食</h3>
              <p className="text-lg text-gray-700 font-kanteiryuu">
                メイン料理に加え、小鉢や味噌汁などを組み合わせた定食をご提供。食材ごとの下処理や味付けにもひと手間を加え、飽きのこない献立づくりを心がけています。
              </p>
            </section>

            <section>
              <h3 className="text-xl font-kanteiryuu mb-2">天ぷら</h3>
              <p className="text-lg text-gray-700 font-kanteiryuu">
                実は揚げるよりも重要な仕込み技術、丁寧な下処理をした食材を衣にまとわせサクッと揚げる熱々で食材の香りがフワッと鼻を突き抜ける絶品な天ぷら
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiningPhilosophy;

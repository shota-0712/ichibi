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
          <div className="max-w-4xl mx-auto space-y-20">
            {/* Section 1: Soba Flour */}
            <section className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <div className="rounded-lg overflow-hidden shadow-lg h-64 md:h-80 w-full relative">
                  <img
                    src="/image/soba_ko.png"
                    alt="厳選された国産石臼挽き蕎麦粉"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2 space-y-4">
                <h2 className="text-2xl font-kanteiryuu text-japanese-indigo border-b-2 border-japanese-red pb-2 inline-block">
                  厳選された国産石臼挽き蕎麦粉
                </h2>
                <p className="text-lg text-gray-700 font-kanteiryuu leading-relaxed">
                  時期により最良の国産石臼挽き蕎麦粉を厳選して使用しています。
                  石臼でゆっくりと挽かれた蕎麦粉ならではの豊かな香りと風味をお楽しみいただけます。
                </p>
                <p className="text-lg text-gray-700 font-kanteiryuu leading-relaxed">
                  蕎麦に限らず、全ての料理で国産にこだわり、最高の料理をご提供できるよう努めております。
                </p>
              </div>
            </section>

            {/* Section 2: Handmade */}
            <section className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="md:w-1/2">
                <div className="rounded-lg overflow-hidden shadow-lg h-64 md:h-80 w-full relative">
                  <img
                    src="/image/teuchi_tekiri.png"
                    alt="手打ち・手切りへのこだわり"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2 space-y-4">
                <h2 className="text-2xl font-kanteiryuu text-japanese-indigo border-b-2 border-japanese-red pb-2 inline-block">
                  一本一本丁寧に、手打ち・手切り
                </h2>
                <p className="text-lg text-gray-700 font-kanteiryuu leading-relaxed">
                  一本一本丁寧に手打ち、手切りにこだわっています。
                  女性蕎麦打ち職人ならではの繊細かつ丁寧な技で、毎日心を込めて蕎麦を打っております。
                </p>
                <p className="text-lg text-gray-700 font-kanteiryuu leading-relaxed">
                  蕎麦は気温、湿度、季節、水分量の違いにより茹で時間も変わってくるため、毎回毎回最高のそばが提供できるように日々研究を繰り返しています。
                </p>
              </div>
            </section>

            {/* Section 3: Juwari Soba */}
            <section className="bg-white p-8 md:p-12 rounded-lg shadow-sm space-y-6">
              <h2 className="text-2xl font-kanteiryuu text-japanese-indigo text-center mb-4">
                <span className="border-b-2 border-japanese-red pb-2">いっさい妥協のしない十割蕎麦</span>
              </h2>
              <div className="space-y-6 max-w-3xl mx-auto">
                <p className="text-lg text-gray-700 font-kanteiryuu leading-relaxed">
                  当店の手打ち十割蕎麦は、いっさいの妥協をしていません。
                  「十割」といっても、実際には極小の卵水や小麦粉をつなぎとして使ってしまっている店もある中、当店ではつなぎをいっさい使わず、蕎麦と水のみで打っております。
                </p>
                <p className="text-lg text-gray-700 font-kanteiryuu leading-relaxed">
                  従来の十割蕎麦にありがちな「ボソボソ感」や「切れやすさ」を感じさせない、今までにない喉越しの良さと、香り高い十割蕎麦を目指しました。
                  蕎麦本来の純粋な味わいと香りを、ぜひご堪能ください。
                </p>
              </div>
            </section>

            {/* Section 4: Other Commitments (Summarized from original) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <section className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-kanteiryuu mb-3 text-japanese-indigo">こだわりの蕎麦つゆ</h3>
                <p className="text-gray-700 font-kanteiryuu">
                  昔ながらの技術で作るかえしに鰹節、サバ節を加え、風味豊かな蕎麦つゆを店内で丁寧に作り上げています。
                </p>
              </section>
              <section className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-kanteiryuu mb-3 text-japanese-indigo">絶品天ぷら</h3>
                <p className="text-gray-700 font-kanteiryuu">
                  揚げる技術はもちろん、重要なのは仕込みと下処理。丁寧に下処理した食材を衣にまとわせサクッと揚げ、食材の香りがフワッと鼻を突き抜ける熱々の天ぷらをご提供します。
                </p>
              </section>
            </div>

            <section className="text-center pt-8">
              <p className="text-lg text-gray-700 font-kanteiryuu">
                様々なジャンルで技を磨いたシェフが、一品一品丁寧に作り上げるお料理で、心を込めておもてなし致します。
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiningPhilosophy;

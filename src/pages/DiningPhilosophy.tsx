import React from 'react';
import { Wheat, Leaf, Fish, Utensils } from 'lucide-react';

export function DiningPhilosophy() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div 
        className="h-[60vh] relative bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&h=800&q=75")',
        }}
      >
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">食事のこだわり</h1>
        </div>
      </div>

      {/* Philosophy Sections */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Soba Section */}
            <div className="mb-24">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-stone-100 p-4 rounded-full">
                  <Wheat className="h-8 w-8 text-japanese-brown" aria-hidden="true" />
                </div>
                <h2 className="text-3xl font-bold">手打ちそばへのこだわり</h2>
              </div>
              <div className="prose max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  毎朝4時から、その日に提供する蕎麦を打ち始めます。
                  石臼で丁寧に挽いた蕎麦粉を使用し、一つ一つ心を込めて打ち上げています。
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                  <img 
                    src="https://images.unsplash.com/photo-1519984388953-d2406bc725e1?auto=format&fit=crop&w=600&h=400&q=75"
                    alt="手打ちそば" 
                    className="rounded-lg shadow-lg"
                    width="600"
                    height="400"
                    loading="lazy"
                    srcSet="
                      https://images.unsplash.com/photo-1519984388953-d2406bc725e1?auto=format&fit=crop&w=400&h=267&q=75 400w,
                      https://images.unsplash.com/photo-1519984388953-d2406bc725e1?auto=format&fit=crop&w=600&h=400&q=75 600w,
                      https://images.unsplash.com/photo-1519984388953-d2406bc725e1?auto=format&fit=crop&w=800&h=533&q=75 800w
                    "
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div>
                    <h3 className="text-xl font-semibold mb-4">蕎麦粉へのこだわり</h3>
                    <p>
                      北海道産の玄蕎麦を使用し、店内の石臼で製粉。
                      挽きたての香り高い蕎麦粉だけを使用しています。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Seasonal Ingredients */}
            <div className="mb-24">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-stone-100 p-4 rounded-full">
                  <Leaf className="h-8 w-8 text-green-800" aria-hidden="true" />
                </div>
                <h2 className="text-3xl font-bold">旬の食材</h2>
              </div>
              <div className="prose max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  地元の契約農家から直接仕入れる新鮮な野菜。
                  房総の海で獲れる旬の魚介類。
                  季節の移ろいを感じられる食材を大切にしています。
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">春</h3>
                    <ul className="space-y-2">
                      <li>・たけのこ</li>
                      <li>・ふきのとう</li>
                      <li>・桜鯛</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">夏</h3>
                    <ul className="space-y-2">
                      <li>・とうもろこし</li>
                      <li>・なす</li>
                      <li>・はも</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Fish Section */}
            <div className="mb-24">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-stone-100 p-4 rounded-full">
                  <Fish className="h-8 w-8 text-blue-800" aria-hidden="true" />
                </div>
                <h2 className="text-3xl font-bold">魚介類</h2>
              </div>
              <div className="prose max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  金谷港、富津漁港から直接仕入れる新鮮な魚介類。
                  釣りたての魚を、お刺身や煮付けなど、
                  その魚に合った最高の調理法でご提供します。
                </p>
                <img 
                  src="https://images.unsplash.com/photo-1534256958597-7fe685cbd745?auto=format&fit=crop&w=800&h=500&q=75"
                  alt="魚料理" 
                  className="w-full rounded-lg shadow-lg my-8"
                  width="800"
                  height="500"
                  loading="lazy"
                  srcSet="
                    https://images.unsplash.com/photo-1534256958597-7fe685cbd745?auto=format&fit=crop&w=400&h=250&q=75 400w,
                    https://images.unsplash.com/photo-1534256958597-7fe685cbd745?auto=format&fit=crop&w=800&h=500&q=75 800w,
                    https://images.unsplash.com/photo-1534256958597-7fe685cbd745?auto=format&fit=crop&w=1200&h=750&q=75 1200w
                  "
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
            </div>

            {/* Cooking Philosophy */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-stone-100 p-4 rounded-full">
                  <Utensils className="h-8 w-8 text-japanese-red" aria-hidden="true" />
                </div>
                <h2 className="text-3xl font-bold">調理へのこだわり</h2>
              </div>
              <div className="prose max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  素材の味を最大限に活かす調理法を心がけています。
                  だしは毎日かつお節から取り、
                  調味料は厳選した醤油、味噌を使用しています。
                </p>
                <div className="bg-stone-50 p-8 rounded-lg mt-8">
                  <h3 className="text-xl font-semibold mb-4">一美の約束</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <span className="text-japanese-red">一、</span>
                      素材の味を活かした調理
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-japanese-red">一、</span>
                      手作りにこだわった料理
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-japanese-red">一、</span>
                      季節を感じられる献立
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default { DiningPhilosophy };
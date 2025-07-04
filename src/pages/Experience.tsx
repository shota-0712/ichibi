import React from 'react';
import { Sunrise, Sunset, Moon, Sun } from 'lucide-react';

export function Experience() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div 
        className="h-[60vh] relative bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1542640244-7e672d6cef4e?auto=format&fit=crop&w=1200&h=800&q=75")',
        }}
      >
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">おすすめの過ごし方</h1>
        </div>
      </div>

      {/* Time-based Recommendations */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Morning */}
            <div className="mb-24">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-stone-100 p-4 rounded-full">
                  <Sunrise className="h-8 w-8 text-orange-500" aria-hidden="true" />
                </div>
                <h2 className="text-3xl font-bold">朝の過ごし方</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <img 
                  src="https://images.unsplash.com/photo-1519872435316-4c29c1d7b17c?auto=format&fit=crop&w=600&h=400&q=75"
                  alt="朝の風景" 
                  className="rounded-lg shadow-lg"
                  width="600"
                  height="400"
                  loading="lazy"
                  srcSet="
                    https://images.unsplash.com/photo-1519872435316-4c29c1d7b17c?auto=format&fit=crop&w=400&h=267&q=75 400w,
                    https://images.unsplash.com/photo-1519872435316-4c29c1d7b17c?auto=format&fit=crop&w=600&h=400&q=75 600w,
                    https://images.unsplash.com/photo-1519872435316-4c29c1d7b17c?auto=format&fit=crop&w=800&h=533&q=75 800w
                  "
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div>
                  <h3 className="text-xl font-semibold mb-4">早朝の散歩</h3>
                  <p className="text-gray-600 mb-6">
                    朝もやの中、近くの神社までの散歩がおすすめです。
                    清々しい空気と鳥のさえずりを楽しみながら、
                    静かな朝の時間をお過ごしください。
                  </p>
                  <div className="bg-stone-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">おすすめコース</h4>
                    <p className="text-sm text-gray-600">
                      宿 → 御嶽神社 → 里山公園<br />
                      所要時間：約40分
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Daytime */}
            <div className="mb-24">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-stone-100 p-4 rounded-full">
                  <Sun className="h-8 w-8 text-yellow-500" aria-hidden="true" />
                </div>
                <h2 className="text-3xl font-bold">昼の過ごし方</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-semibold mb-4">周辺散策</h3>
                  <p className="text-gray-600 mb-6">
                    君津の自然を満喫できる散策コースをご用意しています。
                    季節の花々や野鳥を観察しながら、
                    のんびりとした時間をお過ごしください。
                  </p>
                  <div className="space-y-4">
                    <div className="bg-stone-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">春</h4>
                      <p className="text-sm text-gray-600">
                        桜並木と菜の花畑
                      </p>
                    </div>
                    <div className="bg-stone-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">夏</h4>
                      <p className="text-sm text-gray-600">
                        ホタルの観察（6月中旬～7月上旬）
                      </p>
                    </div>
                  </div>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1493589976221-c2357c31ad77?auto=format&fit=crop&w=600&h=400&q=75"
                  alt="昼の風景" 
                  className="rounded-lg shadow-lg"
                  width="600"
                  height="400"
                  loading="lazy"
                  srcSet="
                    https://images.unsplash.com/photo-1493589976221-c2357c31ad77?auto=format&fit=crop&w=400&h=267&q=75 400w,
                    https://images.unsplash.com/photo-1493589976221-c2357c31ad77?auto=format&fit=crop&w=600&h=400&q=75 600w,
                    https://images.unsplash.com/photo-1493589976221-c2357c31ad77?auto=format&fit=crop&w=800&h=533&q=75 800w
                  "
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Evening */}
            <div className="mb-24">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-stone-100 p-4 rounded-full">
                  <Sunset className="h-8 w-8 text-red-500" aria-hidden="true" />
                </div>
                <h2 className="text-3xl font-bold">夕方の過ごし方</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <img 
                  src="https://images.unsplash.com/photo-1614595908287-d1dbd7d37d4c?auto=format&fit=crop&w=600&h=400&q=75"
                  alt="夕方の風景" 
                  className="rounded-lg shadow-lg"
                  width="600"
                  height="400"
                  loading="lazy"
                  srcSet="
                    https://images.unsplash.com/photo-1614595908287-d1dbd7d37d4c?auto=format&fit=crop&w=400&h=267&q=75 400w,
                    https://images.unsplash.com/photo-1614595908287-d1dbd7d37d4c?auto=format&fit=crop&w=600&h=400&q=75 600w,
                    https://images.unsplash.com/photo-1614595908287-d1dbd7d37d4c?auto=format&fit=crop&w=800&h=533&q=75 800w
                  "
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div>
                  <h3 className="text-xl font-semibold mb-4">夕暮れ時</h3>
                  <p className="text-gray-600 mb-6">
                    高台から望む夕日は絶景です。
                    天気の良い日には、東京湾に沈む夕日と
                    富士山のシルエットを一望できます。
                  </p>
                  <div className="bg-stone-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">おすすめスポット</h4>
                    <p className="text-sm text-gray-600">
                      展望台（宿から車で10分）<br />
                      ※送迎可能です。お気軽にお申し付けください。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Night */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-stone-100 p-4 rounded-full">
                  <Moon className="h-8 w-8 text-blue-900" aria-hidden="true" />
                </div>
                <h2 className="text-3xl font-bold">夜の過ごし方</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-semibold mb-4">星空観賞</h3>
                  <p className="text-gray-600 mb-6">
                    街灯りの少ない当館周辺は、
                    星空観賞に最適です。
                    季節ごとに異なる星座を観察できます。
                  </p>
                  <div className="bg-stone-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">おすすめ時期</h4>
                    <p className="text-sm text-gray-600">
                      夏：天の川が最も美しい時期<br />
                      冬：澄んだ空気で星がよく見える
                    </p>
                  </div>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1532978379173-523e16f371f9?auto=format&fit=crop&w=600&h=400&q=75"
                  alt="夜の風景" 
                  className="rounded-lg shadow-lg"
                  width="600"
                  height="400"
                  loading="lazy"
                  srcSet="
                    https://images.unsplash.com/photo-1532978379173-523e16f371f9?auto=format&fit=crop&w=400&h=267&q=75 400w,
                    https://images.unsplash.com/photo-1532978379173-523e16f371f9?auto=format&fit=crop&w=600&h=400&q=75 600w,
                    https://images.unsplash.com/photo-1532978379173-523e16f371f9?auto=format&fit=crop&w=800&h=533&q=75 800w
                  "
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ); 
}

export default { Experience };
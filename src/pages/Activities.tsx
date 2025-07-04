import React from 'react';
import { Fish, Bold as Golf, MapPin, Car } from 'lucide-react';

export function Activities() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div 
        className="h-[60vh] relative bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://i.ibb.co/BVJCLZP1/noumizo-taki.webp?auto=format&fit=crop&w=1200&h=800&q=75")',
        }}
      >
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">周辺案内</h1>
        </div>
      </div>

      {/* Fishing Spots */}
      <div id="fishing" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">釣りスポット</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Fish className="h-6 w-6 text-blue-800" aria-hidden="true" />
                <h3 className="text-xl font-semibold">君津港</h3>
              </div>
              <p className="text-gray-600 mb-4">
                当館から車で15分。アジ、サバなどの青物から、
                チヌ、カレイまで様々な魚種が狙えます。
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                <span>千葉県君津市港町</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Fish className="h-6 w-6 text-blue-800" aria-hidden="true" />
                <h3 className="text-xl font-semibold">富津岬</h3>
              </div>
              <p className="text-gray-600 mb-4">
                当館から車で30分。東京湾を一望できる絶好の釣りポイント。
                季節によって様々な魚種が楽しめます。
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                <span>千葉県富津市富津</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Golf Courses */}
      <div id="golf" className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">周辺ゴルフ場</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Golf className="h-6 w-6 text-green-800" aria-hidden="true" />
                <h3 className="text-xl font-semibold">君津ゴルフ倶楽部</h3>
              </div>
              <p className="text-gray-600 mb-4">
                当館から車で20分。美しい自然に囲まれた18ホール。
                送迎サービスあり（要予約）。
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                <span>千葉県君津市XXXX</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
                <Car className="h-4 w-4" aria-hidden="true" />
                <span>送迎可能（要予約）</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Golf className="h-6 w-6 text-green-800" aria-hidden="true" />
                <h3 className="text-xl font-semibold">上総富士ゴルフクラブ</h3>
              </div>
              <p className="text-gray-600 mb-4">
                当館から車で25分。チャンピオンコースとして名高い18ホール。
                美しい景観と戦略性の高いコース設計が特徴。
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                <span>千葉県君津市XXXX</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
                <Car className="h-4 w-4" aria-hidden="true" />
                <span>送迎可能（要予約）</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Access Map */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">アクセス</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">交通案内</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <Car className="h-5 w-5 mt-1 text-red-800" aria-hidden="true" />
                  <div>
                    <p className="font-semibold">お車でお越しの場合</p>
                    <p>館山自動車道 君津ICより10分</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 mt-1 text-red-800" aria-hidden="true" />
                  <div>
                    <p className="font-semibold">電車でお越しの場合</p>
                    <p>JR内房線 君津駅より徒歩15分<br />
                       ※送迎サービスあり（要予約）</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
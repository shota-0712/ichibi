import React from 'react';
import { Clock, Wifi, Bath, ParkingMeter as Parking } from 'lucide-react';

export function Ryokan() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div 
        className="h-[60vh] relative bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://i.ibb.co/67FCBtWq/minnshuku.webp?auto=format&fit=crop&w=1200&h=800&q=75")',
        }}
      >
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">宿泊案内</h1>
        </div>
      </div>

      {/* Room Types */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">お部屋のご案内</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img 
                src="https://i.ibb.co/9mJdCB5v/yousitu.webp?auto=format&fit=crop&w=600&h=400&q=75" 
                alt="和室" 
                className="rounded-lg shadow-lg mb-4 h-64 w-full object-cover"
                width="600"
                height="400"
                loading="lazy"
                srcSet="
                  https://i.ibb.co/9mJdCB5v/yousitu.webp?auto=format&fit=crop&w=400&h=267&q=75 400w,
                  https://i.ibb.co/9mJdCB5v/yousitu.webp?auto=format&fit=crop&w=600&h=400&q=75 600w,
                  https://i.ibb.co/9mJdCB5v/yousitu.webp?auto=format&fit=crop&w=800&h=533&q=75 800w
                "
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <h3 className="text-xl font-semibold mb-2">和室 6畳</h3>
              <p className="text-gray-600">
                2名様向け。畳の香り漂う落ち着いた和の空間で、
                ゆっくりとお寛ぎいただけます。
              </p>
              <p className="mt-2 font-semibold">料金: ¥2,800～（素泊まり）</p>
            </div>
            <div>
              <img 
                src="https://i.ibb.co/9mJdCB5v/yousitu.webp?auto=format&fit=crop&w=600&h=400&q=75" 
                alt="洋室" 
                className="rounded-lg shadow-lg mb-4 h-64 w-full object-cover"
                width="600"
                height="400"
                loading="lazy"
                srcSet="
                  https://i.ibb.co/9mJdCB5v/yousitu.webp?auto=format&fit=crop&w=400&h=267&q=75 400w,
                  https://i.ibb.co/9mJdCB5v/yousitu.webp?auto=format&fit=crop&w=600&h=400&q=75 600w,
                  https://i.ibb.co/9mJdCB5v/yousitu.webp?auto=format&fit=crop&w=800&h=533&q=75 800w
                "
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <h3 className="text-xl font-semibold mb-2">洋室 7畳</h3>
              <p className="text-gray-600">
                2名様向け。シンプルで機能的な洋室で、
                快適な滞在をお約束します。
              </p>
              <p className="mt-2 font-semibold">料金: ¥2,800～（素泊まり）</p>
            </div>
          </div>
        </div>
      </div>

      {/* Plans */}
      <div className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">宿泊プラン</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
              <h3 className="text-2xl font-semibold mb-4">釣り客様向けプラン</h3>
              <p className="text-gray-600 mb-6">
                早朝の釣りに対応した特別プランです。
                早朝4時からチェックアウト可能で、
                朝食おにぎりをご用意いたします。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">素泊まりプラン</h4>
                  <p className="text-gray-600">¥2,800～/人</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">朝食おにぎり付きプラン</h4>
                  <p className="text-gray-600">¥3,300～/人</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-4">一般宿泊プラン</h3>
              <p className="text-gray-600 mb-6">
                静かな環境で心安らぐひとときをお過ごしいただけます。
                夕食は当店の創作料理をお楽しみください。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">素泊まりプラン</h4>
                  <p className="text-gray-600">¥2,800～/人</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">朝食付きプラン</h4>
                  <p className="text-gray-600">¥3,800～/人</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">2食付きプラン</h4>
                  <p className="text-gray-600">¥7,700～/人</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Facilities */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">施設案内</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Bath className="h-6 w-6 text-blue-800" aria-hidden="true" />
                  <h3 className="text-xl font-semibold">お風呂</h3>
                </div>
                <p className="text-gray-600">
                  清潔感のある浴室で、一日の疲れを癒してください。
                  シャンプー、リンス、ボディソープを完備しています。
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  ※利用時間: 15:00～23:00、6:00～9:00
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Wifi className="h-6 w-6 text-blue-800" aria-hidden="true" />
                  <h3 className="text-xl font-semibold">Wi-Fi</h3>
                </div>
                <p className="text-gray-600">
                  全館無料Wi-Fiを完備しています。
                  快適なインターネット環境でお過ごしいただけます。
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  ※接続情報はチェックイン時にお渡しします
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Parking className="h-6 w-6 text-blue-800" aria-hidden="true" />
                  <h3 className="text-xl font-semibold">駐車場</h3>
                </div>
                <p className="text-gray-600">
                  無料駐車場を完備しています。
                  大型車両も駐車可能です。
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  ※予約不要・先着順
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-6 w-6 text-blue-800" aria-hidden="true" />
                  <h3 className="text-xl font-semibold">チェックイン/アウト</h3>
                </div>
                <p className="text-gray-600">
                  チェックイン: 15:00～22:00<br />
                  チェックアウト: ～10:00
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  ※早朝チェックアウト(4:00～)も対応可能です(要予約)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
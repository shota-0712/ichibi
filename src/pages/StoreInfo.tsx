import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Car, Train, CreditCard, Mail } from 'lucide-react';
import { SocialFeed } from '../components/social/social-feed';
import { SocialWidgetLoader } from '../components/social/social-widget-loader';

export function StoreInfo() {
  return (
    <div>
      <SocialWidgetLoader />
      {/* Simple header */}
      <div className="bg-japanese-indigo text-white pt-36 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-kanteiryuu mb-4">店舗情報</h1>
          <p className="text-lg text-japanese-gold">アクセス・営業時間・お支払い方法など</p>
        </div>
      </div>

      <div className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Basic Info */}
            <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-japanese-red mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-kanteiryuu font-semibold">お電話</h3>
                    <p>0439-72-3988</p>
                    <Link
                      to="/contact"
                      className="mt-4 inline-flex items-center gap-2 rounded-full bg-japanese-indigo px-5 py-2 text-sm font-medium text-white transition hover:bg-black"
                    >
                      <Mail className="h-4 w-4" aria-hidden="true" />
                      <span>お問い合わせページへ</span>
                    </Link>
                    <p className="text-xs text-gray-500 mt-2">※ご予約・空席の確認はお電話にて承ります。</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-japanese-red mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-kanteiryuu font-semibold">所在地</h3>
                    <p>〒299-1176 千葉県君津市内蓑輪122-1</p>
                    <p className="text-sm text-gray-600 mt-1">館山自動車道 木更津南ICより車で約5分（3.2km）</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-japanese-red mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-kanteiryuu font-semibold">営業時間</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="font-medium">【十割蕎麦・創作酒場】</p>
                        <p>ランチ 11:00～14:00 (L.O.13:30)</p>
                        <p>居酒屋 18:00～21:00 (食事L.O.20:30 / ドリンクL.O.20:50)</p>
                        <p className="text-sm text-gray-600 mt-2">定休日：火曜日・水曜日</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CreditCard className="h-6 w-6 text-japanese-red mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-kanteiryuu font-semibold">お支払い方法</h3>
                    <p>現金・クレジットカード・電子マネー・QRコード決済</p>
                    <p className="text-sm text-gray-600 mt-1">※主要ブランドのクレジットカード、交通系IC、PayPay 等のQRコード決済に対応</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Access */}
            <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
              <h2 className="text-xl font-kanteiryuu font-semibold mb-6">アクセス</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Car className="h-6 w-6 text-japanese-red mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-kanteiryuu font-semibold">お車でお越しの場合</h3>
                    <p>館山自動車道 木更津南ICより車で約5分（3.2km）</p>
                    <p className="text-sm text-gray-600 mt-1">※内房なぎさライン／国道127号 経由</p>
                    <p className="text-sm text-gray-600 mt-1">
                      ※駐車場完備（無料）・大型車両可
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Train className="h-6 w-6 text-japanese-red mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-kanteiryuu font-semibold">電車でお越しの場合</h3>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                      <li>JR内房線 君津駅から北口バスロータリーへ（徒歩約220m / 3分）</li>
                      <li>君津市内循環A（市役所経由 友好館前行）に乗車し「友好館前」下車</li>
                      <li>停留所より徒歩約120m / 2分で到着</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-xl font-kanteiryuu font-semibold mb-4">地図</h2>
              <div className="aspect-w-16 aspect-h-9">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3255.1662345991635!2d139.92955787577202!3d35.32669327270378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60180c0b7a172b79%3A0x6013a721176049f1!2z44CSMjkyLTA1MTYg5Y2D6JGJ55yM5YCJ5rSl5biC6JGJ6L6677yR77yS77yS4oiS77yR!5e0!3m2!1sja!2sjp!4v1737813586809!5m2!1sja!2sjp"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                  title="十割蕎麦・創作酒場『一期一美』 - アクセスマップ"
                ></iframe>
              </div>
              <div className="mt-4 space-y-2 text-sm text-gray-600">
                <p>※カーナビご利用の際は「〒299-1176 千葉県君津市内蓑輪122-1」で検索してください。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Social Media Feed */}
      <SocialFeed />
    </div>
  );
} 

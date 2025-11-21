import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Car, Train, CreditCard, Mail } from 'lucide-react';
import { SocialFeed } from '../components/social/social-feed';
import { SocialWidgetLoader } from '../components/social/social-widget-loader';

import { storeInfo } from '../data/store-info';

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
                    <p>{storeInfo.phone}</p>
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
                    <p>{storeInfo.address.full}</p>
                    <p className="text-sm text-gray-600 mt-1">{storeInfo.address.note}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-japanese-red mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-kanteiryuu font-semibold">営業時間</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="font-medium">【十割蕎麦・創作酒場】</p>
                        <p>ランチ {storeInfo.hours.lunch}</p>
                        <p>居酒屋 {storeInfo.hours.izakaya}</p>
                        <p className="text-sm text-gray-600 mt-2">定休日：{storeInfo.hours.closed}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CreditCard className="h-6 w-6 text-japanese-red mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-kanteiryuu font-semibold">お支払い方法</h3>
                    <p>{storeInfo.payment.methods}</p>
                    <p className="text-sm text-gray-600 mt-1">{storeInfo.payment.note}</p>
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
                    {storeInfo.access.car.map((line, index) => (
                      <p key={index} className={index > 0 ? "text-sm text-gray-600 mt-1" : ""}>{line}</p>
                    ))}
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Train className="h-6 w-6 text-japanese-red mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-kanteiryuu font-semibold">電車でお越しの場合</h3>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                      {storeInfo.access.train.map((line, index) => (
                        <li key={index}>{line}</li>
                      ))}
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
                  src={storeInfo.map.embedUrl}
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                  title={`${storeInfo.name} - アクセスマップ`}
                ></iframe>
              </div>
              <div className="mt-4 space-y-2 text-sm text-gray-600">
                <p>※カーナビご利用の際は「{storeInfo.address.full}」で検索してください。</p>
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

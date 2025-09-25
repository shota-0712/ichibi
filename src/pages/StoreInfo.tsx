import React from 'react';
import { Phone, MapPin, Clock, Car, Train, CreditCard, Mail } from 'lucide-react';
import { SocialFeed } from '../components/social/social-feed';
import { SocialWidgetLoader } from '../components/social/social-widget-loader';

const CONTACT_MAIL = (() => {
  const subject = encodeURIComponent('お問い合わせについて');
  const body = encodeURIComponent('お名前：\nご連絡先：\nご来店予定日：\nお問い合わせ内容：\n');
  return `mailto:ichibi2025@gmail.com?subject=${subject}&body=${body}`;
})();

export function StoreInfo() {
  return (
    <div>
      <SocialWidgetLoader />
      {/* Simple header */}
      <div className="bg-japanese-indigo text-white py-16">
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
                    <p className="text-sm text-gray-600 mt-1">※2025年10月1日プレオープン・10月13日グランドオープン</p>
                    <a
                      href={CONTACT_MAIL}
                      className="mt-4 inline-flex items-center gap-2 rounded-full bg-japanese-indigo px-5 py-2 text-sm font-medium text-white transition hover:bg-black"
                    >
                      <Mail className="h-4 w-4" aria-hidden="true" />
                      <span>メールでお問い合わせ</span>
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-japanese-red mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-kanteiryuu font-semibold">所在地</h3>
                    <p>〒299-1176 千葉県君津市内蓑輪122-1</p>
                    <p className="text-sm text-gray-600 mt-1">君津市役所から車で5分・小糸川近く</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-japanese-red mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-kanteiryuu font-semibold">営業時間</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="font-medium">【十割蕎麦・焼鳥酒場】</p>
                        <p>ランチ 11:00～14:00 (L.O.13:30)</p>
                        <p>居酒屋 17:00～22:00 (L.O.21:30)</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CreditCard className="h-6 w-6 text-japanese-red mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-kanteiryuu font-semibold">お支払い方法</h3>
                    <p>現金・クレジットカード・電子マネー</p>
                    <p className="text-sm text-gray-600 mt-1">※各種クレジットカード・交通系ICカード対応</p>
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
                    <p>館山自動車道 君津ICより10分</p>
                    <p className="text-sm text-gray-600 mt-1">
                      ※駐車場完備（無料）・大型車両可
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Train className="h-6 w-6 text-japanese-red mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-kanteiryuu font-semibold">電車でお越しの場合</h3>
                    <p>JR内房線 君津駅より徒歩15分</p>
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
                  title="十割蕎麦・焼鳥酒場『一期一美』 - アクセスマップ"
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

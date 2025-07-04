import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';

export function Contact() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div 
        className="h-[40vh] relative bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://i.ibb.co/NnZCNDZ6/contact.jpg?auto=format&fit=crop&w=1200&h=600&q=75")',
        }}
      >
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">お問い合わせ</h1>
        </div>
      </div>

      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Contact Info */}
            <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-red-800" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold">お電話</h3>
                    <p>0439-XX-XXXX</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-red-800" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold">所在地</h3>
                    <p>〒292-0516 千葉県君津市蓑輪122-1</p>
                    <p className="text-sm text-gray-600 mt-1">君津市役所から車で5分・小糸川近く</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="h-6 w-6 text-red-800" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold">営業時間</h3>
                    <p>【お食事・居酒屋】<br />
                       ランチ 11:00～14:00 (L.O.13:30)<br />
                       クレープ 14:00～17:00<br />
                       居酒屋 17:00～22:00 (L.O.21:30)</p>
                    <p className="mt-2">【宿泊】<br />
                       チェックイン 15:00～22:00<br />
                       チェックアウト ～10:00<br />
                       ※早朝チェックアウト可</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">アクセスマップ</h2>
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
                  title="一美 - 手打ちそばと創作料理の宿 - アクセスマップ"
                ></iframe>
              </div>
              <div className="mt-4 space-y-2 text-sm text-gray-600">
                <p>※カーナビご利用の際は「〒292-0516 千葉県君津市蓑輪122-1」で検索してください。</p>
                <p>※公共交通機関でお越しの場合：JR内房線 君津駅より徒歩15分</p>
                <p>※駐車場完備（無料）・大型車両可</p>
                <p>※送迎サービスあり（要予約）</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default { Contact };
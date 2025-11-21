import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Instagram } from 'lucide-react';
import { XLogo } from '../icons/x-logo';

import { storeInfo } from '../../data/store-info';

export function FooterSection() {
  return (
    <footer className="bg-japanese-indigo text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-kanteiryuu font-semibold mb-4">{storeInfo.name}</h3>
            <div className="flex items-start gap-3 mb-4">
              <MapPin className="h-5 w-5 mt-1 flex-shrink-0 text-japanese-gold" />
              <div>
                <p>〒{storeInfo.address.zip}<br />{storeInfo.address.prefecture}{storeInfo.address.city}{storeInfo.address.street}<br />
                  <span className="text-sm text-gray-200">{storeInfo.address.note}</span></p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 mt-1 flex-shrink-0 text-japanese-gold" />
              <div>
                <p className="font-kanteiryuu font-semibold mb-1">お電話</p>
                <p>{storeInfo.phone}</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-kanteiryuu font-semibold mb-4">営業時間</h3>
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 mt-1 flex-shrink-0 text-japanese-gold" />
              <div>
                <p className="font-kanteiryuu font-semibold mb-2">営業時間</p>
                <div className="space-y-2">
                  <div>
                    <p className="font-medium">【十割蕎麦・創作酒場】</p>
                    <p>ランチ {storeInfo.hours.lunch}</p>
                    <p>居酒屋 {storeInfo.hours.izakaya}</p>
                    <p className="text-sm text-gray-200 mt-2">定休日：{storeInfo.hours.closed}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-kanteiryuu font-semibold mb-4">SNS</h3>
            <div className="flex space-x-4">
              <a
                href={storeInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="bg-white p-2 rounded-full text-japanese-indigo hover:bg-japanese-gold hover:text-white transition"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={storeInfo.social.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="bg-white p-2 rounded-full text-black hover:bg-black hover:text-white transition"
              >
                <XLogo className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-300 mb-4 md:mb-0">© 2024 十割蕎麦・創作酒場『一期一美』 All Rights Reserved.</p>
            <div className="flex space-x-6">
              <Link to="/menu#lunch" className="text-sm text-gray-300 hover:text-white transition">ランチ</Link>
              <Link to="/menu#izakaya" className="text-sm text-gray-300 hover:text-white transition">居酒屋</Link>
              <Link to="/store-info" className="text-sm text-gray-300 hover:text-white transition">店舗情報</Link>
              <Link to="/contact" className="text-sm text-gray-300 hover:text-white transition">お問い合わせ</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

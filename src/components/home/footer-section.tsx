import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Instagram } from 'lucide-react';
import { XLogo } from '../icons/x-logo';

export function FooterSection() {
  return (
    <footer className="bg-japanese-indigo text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-kanteiryuu font-semibold mb-4">十割蕎麦・創作酒場『一期一美』</h3>
            <div className="flex items-start gap-3 mb-4">
              <MapPin className="h-5 w-5 mt-1 flex-shrink-0 text-japanese-gold" />
              <div>
                <p>〒299-1176<br />千葉県君津市内蓑輪122-1<br />
                <span className="text-sm text-gray-200">（館山自動車道 木更津南ICより車で約5分）</span></p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 mt-1 flex-shrink-0 text-japanese-gold" />
              <div>
                <p className="font-kanteiryuu font-semibold mb-1">お電話</p>
                <p>0439-72-3988</p>
                <p className="text-sm text-gray-200 mt-1">※2025年10月6日プレオープン・10月13日グランドオープン</p>
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
                    <p>ランチ 11:00～14:00 (L.O.13:30)</p>
                    <p>居酒屋 18:00～22:00 (食事L.O.21:00 / ドリンクL.O.21:30)</p>
                    <p className="text-sm text-gray-200 mt-2">定休日：火曜日・水曜日</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-kanteiryuu font-semibold mb-4">SNS</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/ichigo__ichibi/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="bg-white p-2 rounded-full text-japanese-indigo hover:bg-japanese-gold hover:text-white transition"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://x.com/ichigo_ichibi" 
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
                <Link to="/lunch" className="text-sm text-gray-300 hover:text-white transition">ランチ</Link>
                <Link to="/izakaya" className="text-sm text-gray-300 hover:text-white transition">居酒屋</Link>
                <Link to="/store-info" className="text-sm text-gray-300 hover:text-white transition">店舗情報</Link>
                <Link to="/contact" className="text-sm text-gray-300 hover:text-white transition">お問い合わせ</Link>
              </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

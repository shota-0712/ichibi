import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Instagram, Twitter, Facebook } from 'lucide-react';

export function FooterSection() {
  return (
    <footer className="bg-japanese-indigo text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">御食事・居酒屋『一期一美』</h3>
            <div className="flex items-start gap-3 mb-4">
              <MapPin className="h-5 w-5 mt-1 flex-shrink-0 text-japanese-gold" />
              <div>
                <p>〒299-1176<br />千葉県君津市内蓑輪122-1<br />
                <span className="text-sm text-gray-300">（君津市役所から車で5分・小糸川近く）</span></p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 mt-1 flex-shrink-0 text-japanese-gold" />
              <div>
                <p className="font-semibold mb-1">お電話</p>
                <p>0439-XX-XXXX</p>
                <p className="text-sm text-gray-300 mt-1">※2025年5月より</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">営業時間</h3>
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 mt-1 flex-shrink-0 text-japanese-gold" />
              <div>
                <p className="font-semibold mb-2">営業時間</p>
                <div className="space-y-2">
                  <div>
                    <p className="font-medium">【御食事・居酒屋】</p>
                    <p>ランチ 11:00～14:00 (L.O.13:30)</p>
                    <p>居酒屋 17:00～22:00 (L.O.21:30)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">宿泊</h3>
            <div className="mb-6">
              <p className="mb-2">チェックイン 15:00～22:00<br />
              チェックアウト ～10:00<br />
              ※早朝チェックアウト可</p>
              <p className="text-sm text-gray-300">Wi-Fi完備・駐車場あり</p>
            </div>
            
            <h4 className="font-semibold mb-3">SNS</h4>
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
                className="bg-white p-2 rounded-full text-japanese-indigo hover:bg-japanese-gold hover:text-white transition"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://www.facebook.com/share/12DF9aSZmwS/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="bg-white p-2 rounded-full text-japanese-indigo hover:bg-japanese-gold hover:text-white transition"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">© 2024 御食事・居酒屋『一期一美』 All Rights Reserved.</p>
            <div className="flex space-x-6">
              <Link to="/lunch" className="text-sm text-gray-400 hover:text-white transition">ランチ</Link>
              <Link to="/izakaya" className="text-sm text-gray-400 hover:text-white transition">居酒屋</Link>
              <Link to="/ryokan" className="text-sm text-gray-400 hover:text-white transition">宿泊案内</Link>
              <Link to="/store-info" className="text-sm text-gray-400 hover:text-white transition">店舗情報</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
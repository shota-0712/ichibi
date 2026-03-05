import React, { useState } from 'react';
import { Clock } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { LunchMenu } from '../components/menu/LunchMenu';
import { IzakayaMenu } from '../components/menu/IzakayaMenu';
import { DrinksMenu } from '../components/menu/DrinksMenu';
import { storeInfo } from '../data/store-info';

export function Menu() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<'lunch' | 'izakaya' | 'drinks'>('lunch');

  React.useEffect(() => {
    if (location.hash === '#lunch') {
      setActiveTab('lunch');
    } else if (location.hash === '#izakaya') {
      setActiveTab('izakaya');
    } else if (location.hash === '#drinks') {
      setActiveTab('drinks');
    }
  }, [location.hash]);

  return (
    <div>

      {/* Hero with background image */}
      <div
        className="h-[90vh] relative bg-cover bg-center"
        style={{
          backgroundImage: activeTab === 'lunch' ? 'url("/image/ichigo_ichibi_set.webp")' : activeTab === 'izakaya' ? 'url("/image/tenjuu.webp")' : 'url("/image/ichigo_ichibi_set.webp")',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 pt-20">
          <h1 className="text-white text-5xl md:text-7xl font-kanteiryuu mb-6 drop-shadow-lg">お品書き</h1>

          {/* Tab Buttons */}
          <div className="flex gap-8 mb-6">
            <button
              onClick={() => setActiveTab('lunch')}
              className={`text-white text-xl font-kanteiryuu pb-2 transition-all ${activeTab === 'lunch'
                ? 'border-b-2 border-japanese-gold text-japanese-gold'
                : 'border-b-2 border-transparent hover:border-white/50'
                }`}
            >
              昼の部
            </button>
            <button
              onClick={() => setActiveTab('izakaya')}
              className={`text-white text-xl font-kanteiryuu pb-2 transition-all ${activeTab === 'izakaya'
                ? 'border-b-2 border-japanese-gold text-japanese-gold'
                : 'border-b-2 border-transparent hover:border-white/50'
                }`}
            >
              夜の部
            </button>
            <button
              onClick={() => setActiveTab('drinks')}
              className={`text-white text-xl font-kanteiryuu pb-2 transition-all ${activeTab === 'drinks'
                ? 'border-b-2 border-japanese-gold text-japanese-gold'
                : 'border-b-2 border-transparent hover:border-white/50'
                }`}
            >
              飲み物
            </button>
          </div>

          <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="flex items-center gap-3 text-white">
              <Clock className="h-6 w-6 text-japanese-gold" />
              <div>
                <h3 className="font-semibold text-lg">
                  {activeTab === 'lunch' ? '昼の部' : activeTab === 'izakaya' ? '夜の部' : '営業時間'}
                </h3>
                <p className="text-japanese-gold">
                  {activeTab === 'lunch'
                    ? storeInfo.hours.lunch
                    : activeTab === 'izakaya'
                      ? storeInfo.hours.izakaya
                      : `昼の部 ${storeInfo.hours.lunch} / 夜の部 ${storeInfo.hours.izakaya}`}
                </p>
                <p className="text-sm text-white/80 mt-1">定休日：{storeInfo.hours.closed}</p>
                <p className="text-xs text-white/60 mt-1">{storeInfo.hours.noteShort}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Content */}
      {activeTab === 'lunch' ? (
        <LunchMenu />
      ) : activeTab === 'izakaya' ? (
        <IzakayaMenu />
      ) : (
        <DrinksMenu />
      )}
    </div>
  );
}

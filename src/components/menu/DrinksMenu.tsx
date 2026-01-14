import React from 'react';
import { MenuItem } from './menu-item';
import { AlcoholicDrinks } from './AlcoholicDrinks';
import {
    nonAlcoholicItems,
    softDrinkItems,
    kidsDrinkItems,
} from '../../data/menu-data';

export function DrinksMenu() {
    return (
        <div className="py-16 bg-stone-50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="space-y-12">
                        {/* Drinks */}
                        <div>
                            <h3 className="text-xl font-kanteiryuu mb-6 pb-2 border-b-2 border-japanese-red">ドリンク</h3>

                            <AlcoholicDrinks heading="【アルコール飲料】" />

                            <div className="mb-8">
                                <h4 className="text-lg font-kanteiryuu mb-4 text-gray-700">【ノンアルコール飲料】</h4>
                                <div className="space-y-4">
                                    {nonAlcoholicItems.map((item) => (
                                        <MenuItem key={item.name} {...item} />
                                    ))}
                                </div>
                            </div>

                            <div className="mb-8">
                                <h4 className="text-lg font-kanteiryuu mb-4 text-gray-700">【ソフトドリンク】</h4>
                                <div className="space-y-4">
                                    {softDrinkItems.map((item) => (
                                        <MenuItem key={item.name} {...item} />
                                    ))}
                                </div>
                            </div>

                            <div className="mb-8">
                                <h4 className="text-lg font-kanteiryuu mb-4 text-gray-700">【キッズドリンク】</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {kidsDrinkItems.map((item) => (
                                        <MenuItem key={`kids-drink-${item.name}`} {...item} />
                                    ))}
                                </div>
                            </div>

                            <div className="mb-8">
                                <h4 className="text-lg font-kanteiryuu mb-4 text-gray-700">【ボトルキープ】</h4>
                                <div className="space-y-4 text-sm">
                                    <div>
                                        <p className="font-semibold text-gray-800">◎ 焼酎</p>
                                        <ul className="list-disc list-inside space-y-1 text-gray-900">
                                            <li>白岳しろ（720ml） 税抜2,727円（税込3,000円）</li>
                                            <li>二階堂（900ml） 税抜2,500円（税込2,750円）</li>
                                            <li>黒霧島（900ml） 税抜2,500円（税込2,750円）</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-800">◎ ウイスキー</p>
                                        <ul className="list-disc list-inside space-y-1 text-gray-900">
                                            <li>角（700ml） 税抜4,091円（税込4,500円）</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-800">◎ キープ期間</p>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>3か月間</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-800">◎ その他</p>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>氷ボックス 税込500円</li>
                                            <li>割り材（水、炭酸など）別途</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 text-sm text-gray-600">
                        <p>※仕入れ状況により、内容が変更になる場合がございます</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

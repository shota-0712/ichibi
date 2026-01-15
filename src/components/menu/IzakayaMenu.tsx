
import { Info } from 'lucide-react';
import { MenuItem } from './menu-item';
import {
    setMealItems,
    izakayaColdSobaItems,
    izakayaHotSobaItems,
    izakayaTeishokuItems,
    odenItems,
    izakayaAppetizerItems,
    kidsFoodItems,
    kidsDrinkItems,
    dessertItems,
} from '../../data/menu-data';

const sobaSelectionNote = '十割・二八そばから選択（十割は1日15食）';
const coldSobaNote = sobaSelectionNote;
const hotSobaNote = sobaSelectionNote;
const izakayaTeishokuNote =
    '生姜焼き定食：ご飯・味噌汁・漬物付き\n親子丼定食・天重定食：味噌汁・漬物付き\nご飯大盛り +100円';

export function IzakayaMenu() {
    return (
        <div className="py-16 bg-stone-50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="space-y-12">
                        <div className="text-sm text-gray-600">
                            <p className="flex items-center gap-1">
                                <span>※アレルギー表示は</span>
                                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 text-gray-600">
                                    <Info className="h-3 w-3" aria-hidden="true" />
                                </span>
                                <span>を押すとご覧になれます。</span>
                            </p>
                            <p className="mt-2">時期によって使用している食材が異なる場合がございますので詳しくはスタッフにお聞きください。</p>
                        </div>

                        {/* Set Menu */}
                        <div>
                            <h3 className="text-xl font-kanteiryuu mb-6 pb-2 border-b-2 border-japanese-red">セットメニュー</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {setMealItems.map((item) => (
                                    <MenuItem key={item.name} {...item} />
                                ))}
                            </div>
                        </div>

                        {/* Cold Soba */}
                        <div>
                            <h3 className="text-xl font-kanteiryuu mb-6 pb-2 border-b-2 border-japanese-red">冷そば</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {izakayaColdSobaItems.map((item) => (
                                    <MenuItem key={item.name} {...item} />
                                ))}
                            </div>
                            <p className="mt-4 text-sm text-gray-600 whitespace-pre-line">{coldSobaNote}</p>
                        </div>

                        {/* Hot Soba */}
                        <div>
                            <h3 className="text-xl font-kanteiryuu mb-6 pb-2 border-b-2 border-japanese-red">温そば</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {izakayaHotSobaItems.map((item) => (
                                    <MenuItem key={item.name} {...item} />
                                ))}
                            </div>
                            <p className="mt-4 text-sm text-gray-600 whitespace-pre-line">{hotSobaNote}</p>
                        </div>

                        {/* Teishoku */}
                        <div>
                            <h3 className="text-xl font-kanteiryuu mb-6 pb-2 border-b-2 border-japanese-red">定食</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {izakayaTeishokuItems.map((item) => (
                                    <MenuItem key={item.name} {...item} />
                                ))}
                            </div>
                            <p className="mt-4 text-sm text-gray-600 whitespace-pre-line">{izakayaTeishokuNote}</p>
                        </div>

                        {/* Oden */}
                        <div>
                            <h3 className="text-xl font-kanteiryuu mb-6 pb-2 border-b-2 border-japanese-red">おでん</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {odenItems.map((item) => (
                                    <MenuItem key={item.name} {...item} />
                                ))}
                            </div>
                        </div>

                        {/* Appetizers */}
                        <div>
                            <h3 className="text-xl font-kanteiryuu mb-6 pb-2 border-b-2 border-japanese-red">一品料理</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {izakayaAppetizerItems.map((item) => (
                                    <MenuItem key={item.name} {...item} />
                                ))}
                            </div>
                        </div>

                        {/* Kids Menu */}
                        <div>
                            <h3 className="text-xl font-kanteiryuu mb-6 pb-2 border-b-2 border-japanese-red">キッズメニュー</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {kidsFoodItems.map((item) => (
                                    <MenuItem key={item.name} {...item} />
                                ))}
                            </div>
                            <div className="mt-8">
                                <h4 className="text-lg font-kanteiryuu mb-4 text-gray-700">キッズドリンク</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {kidsDrinkItems.map((item) => (
                                        <MenuItem key={`kids-drink-${item.name}`} {...item} />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Desserts */}
                        <div>
                            <h3 className="text-xl font-kanteiryuu mb-6 pb-2 border-b-2 border-japanese-red">デザート</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {dessertItems.map((item) => (
                                    <MenuItem key={item.name} {...item} />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 text-sm text-gray-600">
                        <p>※仕入れ状況により、内容が変更になる場合がございます</p>
                        <p>※メニューの写真は Google の「一期一美」ページのメニューからご覧いただけます</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

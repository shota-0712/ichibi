import { BasicMenuItem, DrinkContent } from '../types/menu';

export const setMealItems: BasicMenuItem[] = [
    {
        name: '一期一美セット',
        price: 2300,
        allergens: ['そば', '小麦', 'えび', '乳', 'アーモンド'],
    },
    {
        name: '天丼セット',
        price: 1350,
        allergens: ['そば', '小麦', 'えび'],
    },
    {
        name: '親子丼セット',
        price: 1300,
        allergens: ['そば', '小麦', '鶏肉', '卵'],
    },
];

export const coldSobaItems: BasicMenuItem[] = [
    {
        name: 'せいろ',
        price: 800,
        allergens: ['そば', '小麦'],
    },
    {
        name: 'ざるそば',
        price: 900,
        allergens: ['そば', '小麦'],
    },
    {
        name: '天ざるそば',
        price: 1450,
        allergens: ['そば', '小麦', 'えび'],
    },
    {
        name: '天せいろ',
        price: 1350,
        allergens: ['そば', '小麦', 'えび'],
    },
];

export const izakayaColdSobaItems: BasicMenuItem[] = [
    {
        name: 'せいろ',
        price: 800,
        allergens: ['そば', '小麦'],
    },
    {
        name: 'ざるそば',
        price: 900,
        allergens: ['そば', '小麦'],
    },
];

export const hotSobaItems: BasicMenuItem[] = [
    {
        name: 'かけそば',
        price: 850,
        allergens: ['そば', '小麦'],
    },
    {
        name: '天ぷらそば',
        price: 1450,
        allergens: ['そば', '小麦', 'えび'],
    },
    {
        name: '山菜そば',
        price: 950,
        allergens: ['そば', '小麦'],
    },
    {
        name: 'たぬきそば',
        price: 900,
        allergens: ['そば', '小麦'],
    },
    {
        name: 'かき揚げそば',
        price: 1050,
        allergens: ['そば', '小麦', 'えび'],
    },
    {
        name: '鶏南蛮そば',
        price: 1200,
        allergens: ['そば', '小麦', '鶏肉'],
    },
];

export const izakayaHotSobaItems: BasicMenuItem[] = [
    {
        name: 'かけそば',
        price: 850,
        allergens: ['そば', '小麦'],
    },
];

export const lunchTeishokuItems: BasicMenuItem[] = [
    {
        name: '生姜焼き定食',
        price: 1150,
        allergens: ['豚肉', '小麦', '大豆'],
    },
    {
        name: '唐揚げ定食',
        price: 1100,
        allergens: ['鶏肉', '小麦', '卵'],
    },
    {
        name: '親子丼定食',
        price: 800,
        allergens: ['鶏肉', '卵'],
    },
    {
        name: '天重定食',
        price: 1400,
        allergens: ['小麦', 'えび'],
    },
];

export const kidsFoodItems: BasicMenuItem[] = [
    {
        name: 'キッズプレート',
        price: 300,
    },
];

export const dessertItems: BasicMenuItem[] = [
    {
        name: '本日のデザート',
        price: 350,
        description: '日替わりで自家製プリン、自家製杏仁豆腐、バニラアイス、抹茶アイスの中から3種をご用意しております',
        allergens: ['卵', '乳', 'アーモンド'],
    },
];

export const alcoholicDrinkContent: DrinkContent[] = [
    {
        type: 'section',
        data: {
            title: 'ビール',
            items: [{ name: 'キリン一番搾り 中瓶', price: 750 }],
            subsections: [
                {
                    title: 'アサヒスーパードライ樽生',
                    items: [
                        { name: '小ジョッキ', price: 550 },
                        { name: '中ジョッキ', price: 700 },
                        { name: '大ジョッキ', price: 1100 },
                    ],
                },
            ],
        },
    },
    {
        type: 'section',
        data: {
            title: 'ハイボール',
            items: [
                { name: 'ハイボール', price: 550 },
                { name: '角ハイボール', price: 650 },
                { name: 'ROYAL ハイボール', price: 1350 },
                { name: 'ジンジャーハイ', price: 600 },
                { name: 'コークハイ', price: 600 },
            ],
        },
    },
    {
        type: 'section',
        data: {
            title: 'ウイスキー',
            items: [
                { name: '角　ロック', price: 650 },
                { name: 'ROYAL　ロック', price: 1350 },
            ],
        },
    },
    {
        type: 'section',
        data: {
            title: '焼酎',
            subsections: [
                {
                    title: '黒霧島',
                    items: [
                        { name: 'ロック', price: 600 },
                        { name: 'ソーダ割り', price: 600 },
                        { name: '水割り', price: 600 },
                        { name: 'お茶割り（緑茶・ウーロン茶・無糖紅茶）', price: 600 },
                    ],
                },
                {
                    title: '白岳しろ',
                    items: [
                        { name: 'ロック', price: 650 },
                        { name: 'ソーダ割り', price: 650 },
                        { name: '水割り', price: 650 },
                        { name: 'お茶割り（緑茶・ウーロン茶・無糖紅茶）', price: 650 },
                    ],
                },
                {
                    title: '大分麦焼酎二階堂',
                    items: [
                        { name: 'ロック', price: 600 },
                        { name: 'ソーダ割り', price: 600 },
                        { name: '水割り', price: 600 },
                        { name: 'お茶割り（緑茶・ウーロン茶・無糖紅茶）', price: 600 },
                    ],
                },
            ],
        },
    },
    {
        type: 'section',
        data: {
            title: '日本酒',
            items: [
                { name: '本日のおすすめ純米酒（一合）', price: 1200 },
                { name: '純米酒(一合)', price: 800 },
            ],
        },
    },
    {
        type: 'section',
        data: {
            title: 'サワー',
            items: [
                { name: 'サッポロ 濃いめのレモンサワー', price: 550 },
                { name: '樽ハイプレーンサワー', price: 550 },
                { name: '樽ハイグレープフルーツサワー', price: 550 },
                { name: '樽ハイピーチサワー', price: 550 },
                { name: '樽ハイカルピスサワー', price: 550 },
                { name: '樽ハイ巨峰サワー', price: 550 },
            ],
        },
    },
    {
        type: 'section',
        data: {
            title: '梅酒',
            subsections: [
                {
                    title: '濃醇梅酒',
                    items: [
                        { name: 'ロック', price: 600 },
                        { name: 'ソーダ割り', price: 600 },
                    ],
                },
            ],
        },
    },
    {
        type: 'section',
        data: {
            title: 'ワイン',
            items: [
                {
                    name: '赤ワイン',
                    price: 500,
                    description: '（サンタ・ヘレナ・アパルカ・カベルナ・メルロー）',
                },
                {
                    name: '白ワイン',
                    price: 500,
                    description: '（サンタ・ヘレナ・アパルカ・シャルドネ・セミヨン）',
                },
            ],
        },
    },
    {
        type: 'section',
        data: {
            title: 'カクテル',
            items: [
                { name: 'カシスオレンジ', price: 550 },
                { name: 'カシスソーダ', price: 550 },
                { name: 'カシスウーロン', price: 550 },
            ],
        },
    },
];

export const nonAlcoholicItems: BasicMenuItem[] = [
    {
        name: 'キリン一番搾り グリーンズフリー 小瓶',
        price: 600,
    },
];

export const softDrinkItems: BasicMenuItem[] = [
    { name: 'コカ・コーラ', price: 400 },
    { name: 'カルピス', price: 400 },
    { name: 'ジンジャーエール', price: 400 },
    { name: '100%オレンジジュース', price: 400 },
    { name: '100%りんごジュース', price: 400 },
    { name: '緑茶', price: 400 },
    { name: '無糖アイスティー', price: 400 },
    { name: 'ウーロン茶', price: 400 },
];

export const kidsDrinkItems: BasicMenuItem[] = softDrinkItems.map((item) => ({
    name: item.name,
    price: 100,
    priceLabel: '税込100円',
}));

export const izakayaTeishokuItems: BasicMenuItem[] = [
    {
        name: '生姜焼き定食',
        price: 1150,
        allergens: ['豚肉', '小麦', '大豆'],
    },
    {
        name: '唐揚げ定食',
        price: 1100,
        allergens: ['鶏肉', '小麦', '卵'],
    },
    {
        name: '親子丼定食',
        price: 800,
        allergens: ['鶏肉', '卵'],
    },
    {
        name: '焼き鳥丼定食',
        price: 800,
    },
    {
        name: '天重定食',
        price: 1400,
        allergens: ['小麦', 'えび'],
    },
];

export const odenItems: BasicMenuItem[] = [
    { name: 'たまご', price: 150 },
    { name: 'だいこん', price: 150 },
    { name: '厚揚げ', price: 150 },
    { name: 'こんにゃく', price: 150 },
    { name: 'ちくわ', price: 150 },
    { name: 'しらたき', price: 150 },
    { name: 'ソーセージ', price: 150 },
    { name: '手羽元', price: 200 },
];

export const izakayaAppetizerItems: BasicMenuItem[] = [
    { name: 'ポテトフライ', price: 390 },
    { name: 'ichibiサラダ', price: 390 },
    { name: '枝豆', price: 250 },
    { name: '軟骨の唐揚げ', price: 390 },
    { name: '天ぷら盛り合わせ（小）', price: 600 },
    { name: '天ぷら盛り合わせ（大）', price: 1400 },
];

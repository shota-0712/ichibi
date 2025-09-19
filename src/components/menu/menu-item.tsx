import { Info } from 'lucide-react';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card"

type Allergen = 
  | '小麦'
  | '卵'
  | '乳'
  | 'えび'
  | 'かに'
  | 'そば'
  | '落花生'
  | 'あわび'
  | 'いか'
  | 'いくら'
  | 'さけ'
  | 'さば'
  | 'くるみ'
  | '大豆'
  | 'まつたけ'
  | 'やまいも'
  | 'ゼラチン'
  | 'カシューナッツ'
  | 'ごま'
  | 'バナナ'
  | 'もも'
  | 'りんご'
  | 'キウイフルーツ'
  | 'オレンジ'
  | '牛肉'
  | '鶏肉'
  | '豚肉'
  | 'ゼラチン'
  | 'アーモンド';

interface MenuItemProps {
  name: string;
  price: string | number;
  allergens?: Allergen[];
  description?: string;
}

export function MenuItem({ name, price, allergens = [], description }: MenuItemProps) {
  const priceNumber = typeof price === 'number' ? price : parseInt(price.toString().replace(/[^\d]/g, ''));
  const taxIncludedPrice = priceNumber;
  const taxExcludedPrice = Math.round(priceNumber / 1.1);

  // 価格をフォーマットする関数
  const formatPrice = (price: number) => {
    if (price >= 10000) {
      const man = Math.floor(price / 10000);
      const remainder = price % 10000;
      if (remainder === 0) {
        return `${man}万円`;
      } else {
        return `${man}万${remainder.toLocaleString()}円`;
      }
    } else if (price >= 1000) {
      return `${price.toLocaleString()}円`;
    } else {
      return `${price}円`;
    }
  };

  return (
    <div className="flex justify-between items-baseline group">
      <div className="flex items-center gap-2">
        <h4 className="font-semibold">{name}</h4>
        {(allergens.length > 0 || description) && (
          <HoverCard>
            <HoverCardTrigger asChild>
              <button 
                className="inline-flex items-center justify-center rounded-full w-5 h-5 bg-gray-100 hover:bg-gray-200 transition"
                aria-label={`${name}の詳細情報`}
              >
                <Info className="h-3 w-3 text-gray-600" aria-hidden="true" />
              </button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              {allergens.length > 0 && (
                <div className="mb-2">
                  <p className="font-semibold text-sm mb-1">アレルギー品目</p>
                  <div className="flex flex-wrap gap-1">
                    {allergens.map((allergen) => (
                      <span
                        key={allergen}
                        className="inline-flex items-center rounded-full bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10"
                      >
                        {allergen}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {description && (
                <div>
                  <p className="font-semibold text-sm mb-1">商品説明</p>
                  <p className="text-sm text-gray-600">{description}</p>
                </div>
              )}
            </HoverCardContent>
          </HoverCard>
        )}
      </div>
      <div className="text-right">
        <p className="text-japanese-red font-semibold">
          {formatPrice(taxExcludedPrice)}（税込{formatPrice(taxIncludedPrice)}）
        </p>
      </div>
    </div>
  );
}
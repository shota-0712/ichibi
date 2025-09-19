
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

export function MenuItem({ name, price }: MenuItemProps) {
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
      </div>
      <div className="text-right">
        <p className="text-japanese-red font-semibold">
          {formatPrice(taxExcludedPrice)}（税込{formatPrice(taxIncludedPrice)}）
        </p>
      </div>
    </div>
  );
}
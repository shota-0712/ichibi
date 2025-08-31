import { Info } from 'lucide-react';
import { useEffect, useState } from 'react';

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

function InfoHoverCard({
  name,
  allergens,
  description,
}: {
  name: string;
  allergens: Allergen[];
  description?: string;
}) {
  const [components, setComponents] = useState<null | typeof import("../ui/hover-card")>(
    null,
  );

  useEffect(() => {
    import("../ui/hover-card").then(setComponents);
  }, []);

  const triggerButton = (
    <button
      className="inline-flex items-center justify-center rounded-full w-5 h-5 bg-gray-100 hover:bg-gray-200 transition"
      aria-label={`${name}の詳細情報`}
    >
      <Info className="h-3 w-3 text-gray-600" aria-hidden="true" />
    </button>
  );

  if (!components) {
    return triggerButton;
  }

  const { HoverCard, HoverCardTrigger, HoverCardContent } = components;

  return (
    <HoverCard>
      <HoverCardTrigger asChild>{triggerButton}</HoverCardTrigger>
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
  );
}

export function MenuItem({ name, price, allergens = [], description }: MenuItemProps) {
  return (
    <div className="flex justify-between items-baseline group">
      <div className="flex items-center gap-2">
        <h4 className="font-semibold">{name}</h4>
        {allergens.length > 0 ? (
          <InfoHoverCard name={name} allergens={allergens} description={description} />
        ) : (
          description && (
            <details>
              <summary
                className="inline-flex items-center justify-center rounded-full w-5 h-5 bg-gray-100 hover:bg-gray-200 transition list-none"
                aria-label={`${name}の詳細情報`}
              >
                <Info className="h-3 w-3 text-gray-600" aria-hidden="true" />
              </summary>
              <div className="mt-2 w-80">
                <p className="font-semibold text-sm mb-1">商品説明</p>
                <p className="text-sm text-gray-600">{description}</p>
              </div>
            </details>
          )
        )}
      </div>
      <p className="text-japanese-red">{typeof price === 'number' ? `${price}円` : price}</p>
    </div>
  );
}
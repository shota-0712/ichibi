import { Info } from 'lucide-react';
import { useEffect, useId, useRef, useState } from 'react';

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
  | 'アーモンド';

export interface MenuItemProps {
  name: string;
  price: string | number;
  allergens?: Allergen[];
  description?: string;
}

const TAX_RATE = 0.1;

export function MenuItem({ name, price, allergens = [], description }: MenuItemProps) {
  const priceNumber =
    typeof price === 'number' ? price : parseInt(price.toString().replace(/[^\d]/g, ''), 10);
  const normalizedPrice = Number.isFinite(priceNumber) ? priceNumber : 0;
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const infoContentId = useId();
  const hasDetails = allergens.length > 0;

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('touchstart', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('touchstart', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const formatPrice = (value: number) => `¥${value.toLocaleString()}`;
  const taxIncludedPrice = normalizedPrice;
  const taxExcludedPrice = Math.round(taxIncludedPrice / (1 + TAX_RATE));

  return (
    <div ref={containerRef} className="relative" onMouseLeave={() => setIsOpen(false)}>
      <div className="flex justify-between items-baseline">
        <div className="flex items-center gap-2">
          <h4 className="font-semibold">{name}</h4>
          {hasDetails && (
            <button
              type="button"
              className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-japanese-gold"
              aria-label={`${name}の詳細情報`}
              aria-expanded={isOpen}
              aria-controls={isOpen ? infoContentId : undefined}
              onClick={() => setIsOpen((prev) => !prev)}
              onMouseEnter={() => setIsOpen(true)}
              onFocus={() => setIsOpen(true)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                  setIsOpen(false);
                }
              }}
            >
              <Info className="h-3 w-3" aria-hidden="true" />
            </button>
          )}
        </div>
        <div className="text-right">
          <p className="text-japanese-red font-semibold">
            {formatPrice(taxExcludedPrice)} (税込{formatPrice(taxIncludedPrice)})
          </p>
        </div>
      </div>
      {description && (
        <p className="mt-2 text-sm text-gray-600">{description}</p>
      )}

      {hasDetails && isOpen && (
        <div
          id={infoContentId}
          role="dialog"
          aria-modal="false"
          className="absolute left-0 top-full z-20 mt-2 w-72 rounded-lg border border-gray-200 bg-white p-4 text-sm shadow-lg"
        >
          {allergens.length > 0 && (
            <div>
              <p className="mb-2 font-semibold text-gray-900">アレルギー品目</p>
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
        </div>
      )}
    </div>
  );
}

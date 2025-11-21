import { type MenuItemProps } from '../components/menu/menu-item';

export type BasicMenuItem = Omit<MenuItemProps, 'price'> & { price: number };

export type DrinkSubsection = {
    title: string;
    items: BasicMenuItem[];
};

export type DrinkSection = {
    title: string;
    items?: BasicMenuItem[];
    subsections?: DrinkSubsection[];
};

export type DrinkContent =
    | { type: 'section'; data: DrinkSection }
    | { type: 'item'; data: BasicMenuItem };

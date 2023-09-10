export interface HomeCardModel {
    icon: () => JSX.Element;
    tag?: string;
    header: string;
    subheader: string;
    pricing: CardPricingItem;
    info: CardInfoItem;
    mostPopular: boolean;
}

export interface CardPricingItem {
    value: number;
    offer: string;
}

export interface CardInfoItem {
    icon: () => JSX.Element;
    header: string;
    subheader?: string;
}
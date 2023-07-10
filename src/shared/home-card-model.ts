export interface HomeCardModel {
    icon: () => JSX.Element;
    tag?: string;
    header: string;
    subheader: string;
    pricing: CardPricingItem;
    info: CardInfoItem;
}

interface CardPricingItem {
    value: number;
    offer: string;
}

interface CardInfoItem {
    icon: () => JSX.Element;
    header: string;
    subheader?: string;
}
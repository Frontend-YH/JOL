
// Behöver korrigeras i slutändan
export interface Product {
    id: number,
    name: string,
    price: number,
    description: string,
    imgUrls: []
}

export interface CartProduct extends Product {
    quantity: number
}

export type Lang = string;

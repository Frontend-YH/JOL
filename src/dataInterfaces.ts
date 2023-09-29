
// Behöver korrigeras i slutändan
export interface Product {
    id: string,
    name: string,
    price: number,
    description: string,
    imgUrls: [],
    thumbnailUrls: []
}

export interface dBProduct {
    id: string,
    articleNumber: string,
    name: string,
    engName: string,
    price: number,
    description: string,
    engDescription: string,
    imgUrls: [],
    thumbnailUrls: [],
    category: string,
    numberAvailable: string

}

export interface CartProduct extends Product {
    quantity: number
}

export type Lang = string;

export interface Product {
    id: string,
    name: string,
    price: number,
    description: string,
    imgUrls: []
}

export interface CartProduct extends Product {
    quantity: number
}


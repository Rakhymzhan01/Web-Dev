export interface Product {
    id: number;
    name: string;
    description: string;
    rating: number;
    price: number;
    images: string[];
    kaspiLink: string;
    currentImageIndex: number;
    likes: number;
}


export interface Category {
    id: number;
    name: string;
    products: Product[];
}

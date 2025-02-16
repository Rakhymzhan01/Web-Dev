export interface Product {
    id: number;
    name: string;
    description: string;
    rating: number;
    price: number;
    images: string[];
    kaspiLink: string;
    currentImageIndex: number;
}
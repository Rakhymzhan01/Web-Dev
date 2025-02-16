import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from './product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  standalone: true, 
  imports: [CommonModule] 
})

export class ProductsComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Apple iPhone 15 Pro Max',
      description: 'Smartphone Apple iPhone 15 Pro Max 256GB Natural Titanium',
      rating: 5,
      price: 699990,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/ha3/hda/86319874048030.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/he8/hdf/86319874211870.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h6d/heb/86319874310174.jpg'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-natural-titanium-113138420/', 
      currentImageIndex: 0
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24 Ultra',
      description: 'Smartphone Samsung Galaxy S24 Ultra 5G 12 GB/256 GB Grey',
      rating: 5,
      price: 599990,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png',
        'https://resources.cdn-kaspi.kz/img/m/p/hfe/ha8/84963297394718.png',
        'https://resources.cdn-kaspi.kz/img/m/p/hce/h21/84963123462174.png'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-seryi-116043556/?c=750000000', 
      currentImageIndex: 0 
    },
    {
      id: 3,
      name: 'Apple iPhone 15 Pro Max',
      description: 'Smartphone Apple iPhone 15 Pro Max 256GB Natural Titanium',
      rating: 5,
      price: 699990,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/ha3/hda/86319874048030.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/he8/hdf/86319874211870.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h6d/heb/86319874310174.jpg'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-natural-titanium-113138420/', 
      currentImageIndex: 0
    },
    {
      id: 4,
      name: 'Samsung Galaxy S24 Ultra',
      description: 'Smartphone Samsung Galaxy S24 Ultra 5G 12 GB/256 GB Grey',
      rating: 5,
      price: 599990,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png',
        'https://resources.cdn-kaspi.kz/img/m/p/hfe/ha8/84963297394718.png',
        'https://resources.cdn-kaspi.kz/img/m/p/hce/h21/84963123462174.png'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-seryi-116043556/?c=750000000', 
      currentImageIndex: 0 
    },
    {
      id: 5,
      name: 'Apple iPhone 15 Pro Max',
      description: 'Smartphone Apple iPhone 15 Pro Max 256GB Natural Titanium',
      rating: 5,
      price: 699990,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/ha3/hda/86319874048030.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/he8/hdf/86319874211870.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h6d/heb/86319874310174.jpg'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-natural-titanium-113138420/', 
      currentImageIndex: 0
    },
    {
      id: 6,
      name: 'Samsung Galaxy S24 Ultra',
      description: 'Smartphone Samsung Galaxy S24 Ultra 5G 12 GB/256 GB Grey',
      rating: 5,
      price: 599990,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png',
        'https://resources.cdn-kaspi.kz/img/m/p/hfe/ha8/84963297394718.png',
        'https://resources.cdn-kaspi.kz/img/m/p/hce/h21/84963123462174.png'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-seryi-116043556/?c=750000000', 
      currentImageIndex: 0 
    },
    {
      id: 7,
      name: 'Apple iPhone 15 Pro Max',
      description: 'Smartphone Apple iPhone 15 Pro Max 256GB Natural Titanium',
      rating: 5,
      price: 699990,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/ha3/hda/86319874048030.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/he8/hdf/86319874211870.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h6d/heb/86319874310174.jpg'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-natural-titanium-113138420/', 
      currentImageIndex: 0
    },
    {
      id: 8,
      name: 'Samsung Galaxy S24 Ultra',
      description: 'Smartphone Samsung Galaxy S24 Ultra 5G 12 GB/256 GB Grey',
      rating: 5,
      price: 599990,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png',
        'https://resources.cdn-kaspi.kz/img/m/p/hfe/ha8/84963297394718.png',
        'https://resources.cdn-kaspi.kz/img/m/p/hce/h21/84963123462174.png'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-seryi-116043556/?c=750000000', 
      currentImageIndex: 0 
    },
    {
      id: 9,
      name: 'Apple iPhone 15 Pro Max',
      description: 'Smartphone Apple iPhone 15 Pro Max 256GB Natural Titanium',
      rating: 5,
      price: 699990,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/ha3/hda/86319874048030.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/he8/hdf/86319874211870.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h6d/heb/86319874310174.jpg'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-natural-titanium-113138420/', 
      currentImageIndex: 0
    },
    {
      id: 10,
      name: 'Samsung Galaxy S24 Ultra',
      description: 'Smartphone Samsung Galaxy S24 Ultra 5G 12 GB/256 GB Grey',
      rating: 5,
      price: 599990,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png',
        'https://resources.cdn-kaspi.kz/img/m/p/hfe/ha8/84963297394718.png',
        'https://resources.cdn-kaspi.kz/img/m/p/hce/h21/84963123462174.png'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-seryi-116043556/?c=750000000', 
      currentImageIndex: 0 
    },
  ];

  currentImageIndex: number = 0;

  shareOnWhatsApp(product: Product) {
    const text = `Check out ${product.name} on Kaspi.kz: ${product.kaspiLink}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  }

  shareOnTelegram(product: Product) {
    const text = `Check out ${product.name} on Kaspi.kz: ${product.kaspiLink}`;
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(product.kaspiLink)}&text=${encodeURIComponent(text)}`;
    window.open(telegramUrl, '_blank');
  }

  nextImage(product: Product) {
    if (typeof product.currentImageIndex === 'undefined') {
      product.currentImageIndex = 0; 
    }
    if (product.currentImageIndex < product.images.length - 1) {
      product.currentImageIndex++;
    } else {
      product.currentImageIndex = 0;
    }
  }
  
  prevImage(product: Product) {
    if (typeof product.currentImageIndex === 'undefined') {
      product.currentImageIndex = 0; 
    }
    if (product.currentImageIndex > 0) {
      product.currentImageIndex--;
    } else {
      product.currentImageIndex = product.images.length - 1;
    }
  }

  goToKaspi(product: Product) {
    window.open(product.kaspiLink, '_blank');
}
}
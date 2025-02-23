import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { Category, Product } from './product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'online-store';
  selectedCategory: Category | null = null;

  categories: Category[] = [
    {
      id: 1,
      name: "Smartphones",
      products: [
        {
          id: 1,
          name: "iPhone 15 Pro Max",
          description: "256GB, Natural Titanium",
          rating: 5,
          price: 699990,
          images: [
            "https://resources.cdn-kaspi.kz/img/m/p/ha3/hda/86319874048030.jpg"
          ],
          kaspiLink: "https://kaspi.kz/shop/p/apple-iphone-15-pro-max/",
          currentImageIndex: 0,
          likes: 0
        },
        {
          id: 2,
          name: "Samsung Galaxy S24 Ultra",
          description: "5G, 12 GB/256 GB Grey",
          rating: 5,
          price: 599990,
          images: [
            "https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png"
          ],
          kaspiLink: "https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra/",
          currentImageIndex: 0,
          likes: 0
        }
      ]
    },
    {
      id: 2,
      name: "Laptops",
      products: [
        {
          id: 3,
          name: "MacBook Pro 16",
          description: "M3 Pro Chip, 16GB RAM",
          rating: 5,
          price: 999990,
          images: [
            "https://resources.cdn-kaspi.kz/img/m/p/macbook-pro.jpg"
          ],
          kaspiLink: "https://kaspi.kz/shop/p/macbook-pro-16",
          currentImageIndex: 0,
          likes: 0
        }
      ]
    }
  ];

  selectCategory(category: Category) {
    this.selectedCategory = category;
  }
}

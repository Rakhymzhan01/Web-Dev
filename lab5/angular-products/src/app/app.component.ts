// app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './products/product-list/product-list.component';
import { Category, Product } from './products/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  template: `
    <div class="app-container">
      <nav class="navbar">
        <h1>TechStore</h1>
      </nav>

      <div class="categories">
        <button 
          *ngFor="let category of categories"
          (click)="selectCategory(category)"
          [class.active]="selectedCategory?.id === category.id"
          class="category-btn">
          {{ category.name }}
        </button>
      </div>

      <app-product-list
        *ngIf="selectedCategory"
        [products]="selectedCategory.products"
        (remove)="removeProduct($event)"
        (like)="likeProduct($event)">
      </app-product-list>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories: Category[] = [
    {
      id: 1,
      name: 'Smartphones',
      products: [
        {
          id: 1,
          name: 'iPhone 15 Pro Max',
          description: 'Apple iPhone 15 Pro Max 256GB Natural Titanium',
          rating: 5,
          price: 699990,
          images: ['url1', 'url2', 'url3'],
          kaspiLink: 'link',
          currentImageIndex: 0,
          likes: 0
        },
        // Add more products...
      ]
    },
    // Add more categories...
  ];

  selectedCategory: Category | null = null;

  selectCategory(category: Category) {
    this.selectedCategory = category;
  }

  removeProduct(product: Product) {
    if (this.selectedCategory) {
      this.selectedCategory.products = this.selectedCategory.products
        .filter(p => p.id !== product.id);
    }
  }

  likeProduct(product: Product) {
    product.likes++;
  }
}
// product-list.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product.model';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  template: `
    <div class="products-container">
      <app-product-item
        *ngFor="let product of products"
        [product]="product"
        (remove)="onRemoveProduct($event)"
        (like)="onLikeProduct($event)"
      ></app-product-item>
    </div>
  `,
  styles: [`
    .products-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 20px;
      padding: 20px;
    }
  `]
})
export class ProductListComponent {
  @Input() products: Product[] = [];
  @Output() remove = new EventEmitter<Product>();
  @Output() like = new EventEmitter<Product>();

  onRemoveProduct(product: Product) {
    this.remove.emit(product);
  }

  onLikeProduct(product: Product) {
    this.like.emit(product);
  }
}
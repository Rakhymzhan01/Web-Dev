// product-item.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="product-card">
      <div class="image-container">
        <div class="image-gallery">
          <img [src]="product.images[product.currentImageIndex]" [alt]="product.name">
          <button class="nav-btn prev" (click)="prevImage()">❮</button>
          <button class="nav-btn next" (click)="nextImage()">❯</button>
        </div>
      </div>
      
      <div class="product-info">
        <h3 class="product-title">{{product.name}}</h3>
        <p class="product-description">{{product.description}}</p>
        <div class="rating">
          <span class="star" *ngFor="let star of [1,2,3,4,5]">⭐</span>
          <span>({{product.rating}})</span>
        </div>
        <p class="price">₸{{product.price | number}}</p>
        
        <div class="action-buttons">
          <button class="like-btn" (click)="onLike()">
            Like ({{product.likes}})
          </button>
          <button class="remove-btn" (click)="onRemove()">
            Remove
          </button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() remove = new EventEmitter<Product>();
  @Output() like = new EventEmitter<Product>();

  prevImage() {
    if (this.product.currentImageIndex > 0) {
      this.product.currentImageIndex--;
    } else {
      this.product.currentImageIndex = this.product.images.length - 1;
    }
  }

  nextImage() {
    this.product.currentImageIndex = 
      (this.product.currentImageIndex + 1) % this.product.images.length;
  }

  onLike() {
    this.like.emit(this.product);
  }

  onRemove() {
    this.remove.emit(this.product);
  }
}
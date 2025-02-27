import { Component, input, output, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product-list.component';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white shadow-lg border border-gray-200 rounded-2xl p-5 flex flex-col gap-4 transition-transform transform hover:scale-105 hover:shadow-xl">
      <div class="mx-auto">
        <img [src]="product().image" class="w-[220px] h-[140px] object-cover rounded-lg shadow-sm" />
      </div>

      <div class="flex flex-col text-center">
        <h3 class="text-lg font-semibold text-gray-800">{{ product().title }}</h3>
        <p class="text-sm text-gray-600">{{ '$' + product().price }}</p>
        <p class="text-xs text-gray-500">❤️ Likes: {{ displayLikes() }}</p>
      </div>

      <div class="flex gap-3 justify-center">
        <button 
          (click)="toggleLike()" 
          [ngClass]="{ 'bg-red-500': liked(), 'bg-blue-500': !liked() }"
          class="text-white px-4 py-2 rounded-lg shadow-md transition-all">
          {{ liked() ? '💔 Unlike' : '❤️ Like' }}
        </button>
        <button (click)="removeProduct()" class="bg-gray-700 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-900 transition-all">
          🗑 Remove
        </button>
      </div>
    </div>
  `,
  styles: ``,
})
export class ProductCardComponent implements OnInit {
  product = input.required<Product>();
  onLike = output<Product>();
  onRemove = output<Product>();

  liked = signal<boolean>(false);
  localLikes = signal<number>(0);
  
  ngOnInit() {
    this.localLikes.set(this.product().likes);
  }
  
  displayLikes() {
    return this.localLikes();
  }

  toggleLike() {
    const isCurrentlyLiked = this.liked();
    
    this.liked.set(!isCurrentlyLiked);
    
    if (isCurrentlyLiked) {
      this.localLikes.update(count => count - 1);
    } else {
      this.localLikes.update(count => count + 1);
    }
    
    const updatedProduct = { 
      ...this.product(), 
      likes: this.localLikes()
    };
    
    this.onLike.emit(updatedProduct);
  }

  removeProduct() {
    this.onRemove.emit(this.product());
  }
}
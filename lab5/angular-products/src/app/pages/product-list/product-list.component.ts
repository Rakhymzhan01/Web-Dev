import { Component, computed, input, signal } from '@angular/core';
import { ProductCardComponent } from './product-card/product-card.component';

export type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  likes: number;
};

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [ProductCardComponent],
  template: `
    <div class="p-8 grid grid-cols-2 gap-4">
      @for (product of filteredProducts(); track product.id) {
        <app-product-card 
          [product]="product" 
          (onLike)="increaseLike(product.id)" 
          (onRemove)="removeProduct(product.id)"
        />
      }
    </div>
  `,
  styles: ``,
})
export class ProductsListComponent {
  selectedCategory = input.required<string>();

  products = signal<Product[]>([
    {
      id: 1,
      title: 'MacBook Air',
      price: 1299,
      category: 'Laptops',
      image: 'https://185504.selcdn.ru/static/almajuice.reshop.kz/catalog/516/1474747609660faa18208f9_original.jpg',
      likes: 0,
    },
    {
      id: 2,
      title: 'iPhone 15',
      price: 999,
      category: 'Phones',
      image: 'https://i5.walmartimages.com/seo/Restored-Apple-iPhone-15-Pro-Max-512GB-Verizon-Blue-Titanium-MU6E3LL-A-Excellent-Condition_dd2d42c6-cc25-4bee-81ef-7847120498d5.663475b807d168a41e9082d258d9c7ce.jpeg',
      likes: 0,
    },
    {
      id: 3,
      title: 'Samsung QLED',
      price: 1499,
      category: 'TVs',
      image: 'https://images.samsung.com/is/image/samsung/p6pim/kz_ru/qe43q60dauxce/gallery/kz-ru-qled-q60d-qe43q60dauxce-541255529?$684_547_PNG$',
      likes: 0,
    },
    {
      id: 4,
      title: 'Google Pixel 8',
      price: 799,
      category: 'Phones',
      image: 'https://onepoint.kz/uploads/products/1177/google-pixel-8.jpeg',
      likes: 0
    },
    {
      id: 5,
      title: 'Dell XPS 15',
      price: 1599,
      category: 'Laptops',
      image: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-15-9530/media-gallery/touch-black/notebook-xps-15-9530-t-black-gallery-1.psd?fmt=pjpg&pscan=auto&scl=1&wid=3778&hei=2323&qlt=100,1&resMode=sharp2&size=3778,2323&chrss=full&imwidth=5000',
      likes: 0
    },
  ]);

  filteredProducts = computed(() => {
    if (this.selectedCategory() === 'All') {
      return this.products();
    }
    return this.products().filter((p) => p.category === this.selectedCategory());
  });

  increaseLike(id: number) {
    this.products.update((products) =>
      products.map((p) => (p.id === id ? { ...p, likes: p.likes + 1 } : p))
    );
  }

  removeProduct(id: number) {
    this.products.update((products) => products.filter((p) => p.id !== id));
  }
}
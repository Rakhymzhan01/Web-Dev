import { Component, EventEmitter, inject, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="flex flex-col">
      <div class="bg-slate-100 px-4 py-3 shadow-md flex justify-between items-center">
        <button class="text-2xl" routerLink="/">Tech Store</button>
      </div>
      <div class="max-w-5xl mx-auto">
      <nav class="flex gap-4 p-4 mt-6">
        @for (category of categories; track category) {
          <button (click)="selectCategory(category)" 
            class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
            {{ category }}
          </button>
        }
      </nav>
      </div>
    </div>
  `,
})
export class HeaderComponent {

  @Output() categorySelected = new EventEmitter<string>();

  categories = ['All', 'Phones', 'Laptops', 'TVs'];

  selectCategory(category: string) {
    this.categorySelected.emit(category);
  }
}
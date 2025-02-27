import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ProductsListComponent } from './pages/product-list/product-list.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ProductsListComponent, RouterOutlet],
  template: `
    <div class="min-h-screen flex flex-col bg-gray-50">
      <app-header (categorySelected)="changeCategory($event)"></app-header>

      <main class="flex-1 container mx-auto px-4 py-6">
        <app-products-list [selectedCategory]="selectedCategory"/>
      </main>

      <footer class="bg-gray-800 text-white text-center py-4 mt-8">
        <p class="text-sm">&copy; 2024 TechStore. All rights reserved.</p>
      </footer>

      <router-outlet/>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  selectedCategory = 'All';

  changeCategory(category: string) {
    this.selectedCategory = category;
  }
}

// app.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ProductsComponent
  ],
  templateUrl: './app.component.html',
  template: `<p>The user's occupation is {{occupation}}</p>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'online-store';
  Name: string='Occupation';
}

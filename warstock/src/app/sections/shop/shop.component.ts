import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WikiComponent } from '../wiki/wiki.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, WikiComponent],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  // Example product data
  products = [
    { id: 1, name: 'Product 1', description: 'Description for Product 1' },
    { id: 2, name: 'Product 2', description: 'Description for Product 2' },
    { id: 3, name: 'Product 3', description: 'Description for Product 3' },
    { id: 4, name: 'Product 4', description: 'Description for Product 4' },
    { id: 5, name: 'Product 5', description: 'Description for Product 5' }
  ];

  currentIndex = 0; // Index of the first visible product card

  // Get the two visible products based on the current index
  get visibleProducts() {
    return this.products.slice(this.currentIndex, this.currentIndex + 2);
  }

  // Navigate to the previous set of products
  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex -= 1;
    }
  }

  // Navigate to the next set of products
  next() {
    if (this.currentIndex + 2 < this.products.length) {
      this.currentIndex += 1;
    }
  }
}

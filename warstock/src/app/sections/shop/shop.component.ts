import { Component, ChangeDetectorRef } from '@angular/core';
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
  products = [
    { id: 1, name: 'Product 1', description: 'Description for Product 1' },
    { id: 2, name: 'Product 2', description: 'Description for Product 2' },
    { id: 3, name: 'Product 3', description: 'Description for Product 3' },
    { id: 4, name: 'Product 4', description: 'Description for Product 4' },
    { id: 5, name: 'Product 5', description: 'Description for Product 5' }
  ];

  currentIndex = 0;
  visibleProducts = this.products.slice(0, 2);

  constructor(private cdr: ChangeDetectorRef) {}

  prev() {
    if (this.currentIndex === 0) {
      // Wrap around to the last two products
      this.currentIndex = this.products.length - 2;
    } else {
      this.currentIndex--;
    }
    this.updateVisibleProducts();
  }

  next() {
    if (this.currentIndex + 2 >= this.products.length) {
      // Wrap around to the first two products
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
    }
    this.updateVisibleProducts();
  }

  private updateVisibleProducts() {
    this.visibleProducts = this.products.slice(this.currentIndex, this.currentIndex + 2);
    this.cdr.detectChanges();
  }
}

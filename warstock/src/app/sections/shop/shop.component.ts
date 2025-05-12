import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WikiComponent } from '../wiki/wiki.component';
import productsData from '../../assets/db.json';
import { Product } from '../../shared/IProduct'

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, WikiComponent],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  products: Product[] = productsData.products;
  currentIndex = 0;
  visibleProducts: Product[] = this.products.slice(0, 2);

  constructor(private cdr: ChangeDetectorRef) {}

  prev() {
    if (this.currentIndex === 0) {
      this.currentIndex = this.products.length - 2;
    } else {
      this.currentIndex--;
    }
    this.updateVisibleProducts();
  }

  next() {
    if (this.currentIndex + 2 >= this.products.length) {
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

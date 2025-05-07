import { Component } from '@angular/core';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './sections/home/home.component';
import { WikiComponent } from './sections/wiki/wiki.component';
import { ShopComponent } from './sections/shop/shop.component';
import { CartComponent } from './sections/cart/cart.component';
import { CheckoutComponent } from './sections/checkout/checkout.component';
import { AboutComponent } from './sections/about/about.component';
import { FooterComponent } from './shared/footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    HomeComponent,
    WikiComponent,
    ShopComponent,
    CartComponent,
    CheckoutComponent,
    AboutComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'warstock';
}

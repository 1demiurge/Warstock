import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  brandTitle: string = 'Warstock';
  tagline: string = 'Gear Up. Level Up. Rule the Game.';
}

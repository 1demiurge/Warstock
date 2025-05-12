import { Component, Input } from '@angular/core';
import { Product } from '../../shared/IProduct'

@Component({
  selector: 'app-wiki',
  standalone: true,
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css']
})
export class WikiComponent {
  @Input() product: Product | undefined;
}

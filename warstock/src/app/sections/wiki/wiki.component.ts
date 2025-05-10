import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wiki',
  standalone: true,
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css']
})
export class WikiComponent {
  @Input() product: { id: number; name: string; description: string } | undefined;
}

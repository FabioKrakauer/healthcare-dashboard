import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input() featureName: string = "Nao definido";
  @Input() color: string = "bg-info";
  @Input() icon: string = "";
  @Input() value: string = "";
  @Input() unit: string = "bpm";

}

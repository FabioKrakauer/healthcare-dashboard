import { Component } from '@angular/core';
import { CardModule } from './card/card.module';

@Component({
  imports: [CardModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {
  title = 'healthcare';

}

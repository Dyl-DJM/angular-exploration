import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-affichage-date',
  imports: [DatePipe],
  templateUrl: './affichage-date.component.html',
  styleUrl: './affichage-date.component.css'
})
export class AffichageDateComponent {
	today: Date = new Date();
}

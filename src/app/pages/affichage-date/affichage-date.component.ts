import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { UpperCasePipe } from '@angular/common';
import { LowerCasePipe } from '@angular/common';
import { CurrencyPipe } from '@angular/common';
import { DecimalPipe } from '@angular/common';
import { PercentPipe } from '@angular/common';

@Component({
  selector: 'app-affichage-date',
  imports: [DatePipe, UpperCasePipe, LowerCasePipe, CurrencyPipe, DecimalPipe, PercentPipe],
  templateUrl: './affichage-date.component.html',
  styleUrl: './affichage-date.component.css'
})
export class AffichageDateComponent {
	today: Date = new Date();
	str: string = "A normal string.";
	nb: number = 96;
}

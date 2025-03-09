import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './features/navbar/navbar.component';
import { AffichageDateComponent } from './pages/affichage-date/affichage-date.component';
import { CardComponent } from "./features/products/card/card.component";

@Component({
  selector: 'app-root',
  imports: [/*RouterOutlet, NavbarComponent, AffichageDateComponent,*/ CardComponent],
  // templateUrl: './app.component.html',
  // template:'<app-navbar><app-navbar>',
  //template:'<app-affichage-date></app-affichage-date>',
  template: '<app-card></app-card>',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-exploration';
}

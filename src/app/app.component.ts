import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './features/navbar/navbar.component';
import { AffichageDateComponent } from './pages/affichage-date/affichage-date.component';

@Component({
  selector: 'app-root',
  imports: [/*RouterOutlet, NavbarComponent,*/ AffichageDateComponent],
  // templateUrl: './app.component.html',
  // template:'<app-navbar><app-navbar>',
  template:'<app-affichage-date></app-affichage-date>',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-exploration';
}

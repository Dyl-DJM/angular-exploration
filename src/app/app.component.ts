import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './features/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [/*RouterOutlet,*/ NavbarComponent],
  // templateUrl: './app.component.html',
  template:'<app-navbar><app-navbar>',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-exploration';
}

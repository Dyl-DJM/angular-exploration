import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [FormsModule, NgClass, NgStyle],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
	searchInput = '';

	search(){
		console.log(this.searchInput);
	}
}

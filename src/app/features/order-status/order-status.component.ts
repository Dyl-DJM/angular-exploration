import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-order-status',
  imports: [],
  templateUrl: './order-status.component.html',
  styleUrl: './order-status.component.css'
})
export class OrderStatusComponent {
	@Input() status: string = 'shipped'; // Statut de la commande passée en tant qu'Input
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
	products = [
		{
			id: 1,
			title: 'Product 1',
			price: 100,
			image: 'https://m.media-amazon.com/images/I/91t7YlWwGfL.jpg',
			rating: {
				rate: 0,
				count: 0
			},
			description: 'Description 1',
			category: 'Category 1'
		}, 

		{
			id: 2,
			title: 'Product 2',
			price: 89,
			image: 'https://m.media-amazon.com/images/I/918Ai9a893L._AC_UF1000,1000_QL80_.jpg',
			rating: {
				rate: 0,
				count: 0
			},
			description: 'Description 2',
			category: 'Category 2'
		}
	]
}

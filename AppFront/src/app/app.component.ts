import { Component, OnInit } from '@angular/core';
import { Product } from './interfaces/product.interfaces';
import { ProductService } from './service/servproducts/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
title = 'Ropa PaToos'

}

//export class AppComponent implements OnInit {

 // products: Product[] = []
//  constructor(private productService: ProductService) { }

 // ngOnInit(): void {
  //  this.productService.getAllProducts().subscribe((data) => {
  //    this.products = data;
   //   console.log(this.products);

 //   }
//  }
//}
import { Component } from '@angular/core';
import { take } from 'rxjs';
import { Order } from 'src/app/interfaces/order.interfaces';
import { ProductsService } from 'src/app/service/servproducts/products.service';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  arrProducts: any[] = [];
  openCart: boolean = false;

  constructor(private productsService: ProductsService, private sharedService: SharedService) { }

  async ngOnInit() {
    this.sharedService.cartStatus.subscribe(status =>{
      this.openCart = (status === "false" || status === null) ? true : false
    })
    await this.getAllProducts(null)
  }


  private async getAllProducts(filter: number | null) {
    try {
      const products = await this.productsService.traerTodo(filter);
      this.arrProducts = products;
      console.log(products);
    } catch (error) {
      console.error('Error al obtener los productos', error);
    }
  }

  async changeFilter(filter: number | null) {
    await this.getAllProducts(filter)
    console.log("kljkl")
  }

  async createOrder(order: Order) {
    try {
      const orderCreated = await this.productsService.createOrder(order)
    } catch (error) {
      console.error('Error al obtener la order creada', error);
    }
  }



}

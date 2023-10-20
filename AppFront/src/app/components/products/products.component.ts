import { Component } from '@angular/core';
import { take } from 'rxjs';
import { Order, ProductAdded, SelectedSize } from 'src/app/interfaces/order.interfaces';
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
  cartList: Array<any> = []
  totalCost: number = 0
  selectedSize: SelectedSize | null = null

  constructor(private productsService: ProductsService, private sharedService: SharedService) { }

  async ngOnInit() {
    this.sharedService.cartStatus.subscribe(status => {
      this.openCart = (status === "false" || status === null) ? false : true
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

  async createOrder() {
    try {
      const products = this.cartList.map(item => {
        return {
          productId: item._id, size: item.size
        }
      })
      const newOrder: Order = {
        userId: "652a18b8f464257e792b4910",
        productsId: products,
        total: this.totalCost
      }
      const orderCreated = await this.productsService.createOrder(newOrder)
      console.log(orderCreated)
    } catch (error) {
      console.error('Error al obtener la order creada', error);
    }
  }

  addProductToCart(product: any) {
    if (this.selectedSize !== null) {
      const selectedProduct: ProductAdded = {
        _id: product._id,
        categories: product.categories,
        color: product.color,
        img: product.img,
        price: product.price,
        product: product.product,
        size: this.selectedSize.size
      }
      this.cartList.push(selectedProduct)
      this.totalCost = this.cartList.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.price
      }, 0)
    }
   
  }

  addSelectedSize(size: string, productId: string) {
    this.selectedSize = {
      size: size, productId: productId
    }
  }
}

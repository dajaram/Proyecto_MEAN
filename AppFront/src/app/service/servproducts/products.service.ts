import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Observable } from 'rxjs';
import { Order } from 'src/app/interfaces/order.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productUrl = 'http://localhost:9000/api/products';
  createOrderUrl = 'http://localhost:9000/api/create-order';

  httpClient = inject(HttpClient);

  async traerTodo(category: number|null) {
    const result = await this.httpClient.post<any[]>(this.productUrl, {category:category}) as Observable<any[]>
    return firstValueFrom(result);
  }

  async createOrder(order:Order) {
    const result = await this.httpClient.post<any[]>(this.createOrderUrl, order) as Observable<any[]>
    return firstValueFrom(result);
  }
}
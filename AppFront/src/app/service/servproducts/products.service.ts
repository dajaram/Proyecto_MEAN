import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, firstValueFrom, lastValueFrom } from 'rxjs';
import { Product } from 'src/app/interfaces/product.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  httpClient = inject(HttpClient);
  baseUrl = 'http://localhost:9000/api/products';
  userUrl = 'http://localhost:9000/api';

  getAllProducts(): Observable<Product[]> {
    const response = this.httpClient.get<Product[]>('${this.baseUrl}products')
    console.log  
    return response
  }

  // getPromise(): Promise<any[]> {
  // return lastValueFrom(this.httpClient.get<any[]>('${this.baseUrl}products'))
 // }

  // constructor() { }
}
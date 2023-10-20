import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  httpClient = inject(HttpClient);
  baseUrl = 'http://localhost:9000/api/users';
  userUrl = 'http://localhost:9000/api';

  headers() {
    return {
      headers: new HttpHeaders({ 'autorizado': localStorage.getItem('user_token')! })
    }
  }

  getAll() {
    return firstValueFrom(
      this.httpClient.get<any[]>(this.baseUrl,this.headers())
    );
  }

  register(formValue:any){
    return firstValueFrom(
      this.httpClient.post<any>(`${this.userUrl}/register`, formValue)
    )
  }

  login(formValue:any){
    return firstValueFrom(
      this.httpClient.post<any>(`${this.userUrl}/login`, formValue)
    )
  }

  isLogged():boolean{
    return localStorage.getItem('user_token')? true : false;
  }
  // constructor() { }
}
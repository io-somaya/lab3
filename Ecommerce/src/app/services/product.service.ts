import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = environment.baseURL;

  constructor(private http: HttpClient) {}

  getProducts(limit: number, skip: number): Observable<any> {
    
    console.log("test");
    return this.http.get(`${this.baseUrl}/products?limit=${limit}&skip=${skip}`);
  }

  getProductDetails(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/products/${id}`);
  }
}
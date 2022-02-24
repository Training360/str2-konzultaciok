import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  entityName: string = 'products';

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiUrl}${this.entityName}`);
  }

  get(id: number): Observable<Product> {
    return this.http.get<Product>(`${environment.apiUrl}${this.entityName}/${id}`);
  }

  update(product: Product): Observable<Product> {
    return this.http.patch<Product>(
      `${environment.apiUrl}${this.entityName}/${product.id}`,
      product
    );
  }
}

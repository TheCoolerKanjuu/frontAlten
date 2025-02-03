import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductTableResponse} from '../../models/productTableResponse';
import {ProductTableRequest} from '../../models/productTableRequest';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient)

  getProducts(req: ProductTableRequest): Observable<ProductTableResponse> {
    return this.http.post<ProductTableResponse>('http://localhost:5207/Products/get', req)
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthModel, Product, Token} from "../models";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private client: HttpClient) {
  }


  login(authModel: AuthModel): Observable<Token> {
    return this.client.post<Token>("http://localhost:8000/login/", authModel)
  }

  getProducts(): Observable<Product[]> {
    return this.client.get<Product[]>("http://localhost:8000/api/products/")
  }
}

import {Component} from '@angular/core';
import {AuthModel} from "../../models";
import {ProductsService} from "../products.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  authModel: AuthModel;

  constructor(private productsService: ProductsService) {
    this.authModel = {} as AuthModel;
  }


  login() {
    this.productsService.login(this.authModel).subscribe((token) => {
      localStorage.setItem('access', token.access);
      localStorage.setItem('refresh', token.refresh);
    })
  }
}

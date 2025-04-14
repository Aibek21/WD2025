import {Component} from '@angular/core';
import {PostsService} from "../posts.service";
import {ProductsService} from "../products.service";
import {AuthModel} from "../../models";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  authModel: AuthModel;

  constructor(private productsService: ProductsService) {
    this.authModel = {} as AuthModel
  }

  login() {
    this.productsService.login(this.authModel).subscribe((token) => {
      localStorage.setItem('access', token.access);
      localStorage.setItem('refresh', token.refresh)
    })
  }

}

import {Component, OnInit} from '@angular/core';
import {Post, Product} from "../../models";
import {PostsService} from "../posts.service";
import {ProductsService} from "../products.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  loaded: boolean = false;

  constructor(private productsService: ProductsService) {

  }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((products) => {
      this.products = products;
      this.loaded = true;
    });
  }

}

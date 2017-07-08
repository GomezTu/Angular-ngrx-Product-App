import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs/Observable'
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Observable<Product[]>;

  constructor(
    private service: ProductService
  ) {
    this.products = service.products;
  }

  ngOnInit() {
    this.service.loadProducts();
  }

}

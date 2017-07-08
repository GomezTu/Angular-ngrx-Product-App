import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../state-management/state';
import { Product } from '../../models/product';
import { Observable } from 'rxjs/Observable';
import { ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT, CREATE_PRODUCT } from '../../state-management/actions';
import { _PRODUCTS } from '../../shared/mocks/product-mocks';

@Injectable()
export class ProductService {
  products: Observable<Product[]>;
  constructor(
    private store: Store<State>
  ) {
    this.products = store.select('products');
  }

  loadProducts(){
    this.store.dispatch({ type: ADD_PRODUCT, payload: _PRODUCTS });
  }
}

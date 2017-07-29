import { Injectable } from '@angular/core';
import { Product } from './product';
import { PRODUCTS } from './product-list';

@Injectable()
export class ProductsService {

  constructor() { }

  getProducts(): Promise<Product[]> {
    return Promise.resolve(PRODUCTS);
  }

  addProducts() {

  }
}

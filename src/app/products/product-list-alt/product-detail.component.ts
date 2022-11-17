import { Component } from '@angular/core';
import { Supplier } from 'src/app/suppliers/supplier';
import { Product } from '../product';

import { ProductService } from '../product.service';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent {
  pageTitle = 'Product Detail';
  errorMessage = '';
  productSuppliers: Supplier[] | null = null;

  public selectedProduct$ = this.productService.selectedProduct$;

  constructor(private productService: ProductService) { }

}

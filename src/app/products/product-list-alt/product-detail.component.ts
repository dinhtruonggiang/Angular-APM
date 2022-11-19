import { Component } from '@angular/core';
import { map, combineLatest, filter } from 'rxjs';
import { Supplier } from 'src/app/suppliers/supplier';
import { Product } from '../product';

import { ProductService } from '../product.service';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent {
  errorMessage = '';

  public selectedProduct$ = this.productService.selectedProduct$;
  public productSuppliers$ = this.productService.selectedProductSuppliers$;

  pageTitle$ = this.productService.selectedProduct$
    .pipe(
      map(product => product ? `Product De tails: ${product.productName}` : '')
    );

  vm$ = combineLatest([this.selectedProduct$, this.productSuppliers$, this.pageTitle$])
    .pipe(
      filter(product => Boolean(product)),
      map(([product, productSuppliers, pageTitle]) => ({product, productSuppliers, pageTitle}))
  );

  constructor(private productService: ProductService) { }

}

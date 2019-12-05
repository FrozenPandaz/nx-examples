import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { select, Store } from '@ngrx/store';
import { concatMap, map } from 'rxjs/operators';

import {
  getProduct,
  getProductsState,
  ProductsPartialState
} from '@nx-example/shared/product/state';
import '@nx-example/shared/product/ui';
import { ProductsActionTypes } from '../../../../../shared/product/state/src/lib/+state/products.actions';

@Component({
  selector: 'nx-example-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.scss']
})
export class ProductDetailPageComponent implements OnInit {
  product = this.route.paramMap.pipe(
    map(paramMap => paramMap.get('productId')),
    concatMap(productId =>
      this.store.pipe(
        select(getProductsState),
        select(getProduct, productId)
      )
    )
  );
  constructor(
    private store: Store<ProductsPartialState>,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.store.dispatch({
      type: ProductsActionTypes.Action
    });
  }
}

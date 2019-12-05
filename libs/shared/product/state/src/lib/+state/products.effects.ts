import { Injectable } from '@angular/core';
import { createEffect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { ProductsActionTypes } from './products.actions';

@Injectable({
  providedIn: 'root'
})
export class ProductsEffects {
  public someEffect$ = createEffect(() =>
    this.dataPersistence.fetch(ProductsActionTypes.Action, {
      run: a => ({
        type: 'fake action'
      })
    })
  );
  constructor(private dataPersistence: DataPersistence<any>) {}
}

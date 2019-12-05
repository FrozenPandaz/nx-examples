import { Injectable } from '@angular/core';
import { Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { ProductsActionTypes } from './products.actions';

@Injectable({
  providedIn: 'root'
})
export class ProductsEffects {
  @Effect()
  public someEffect$ = this.dataPersistence.fetch(ProductsActionTypes.Action, {
    run: a => {
      console.log('fetching');
      return { type: 'fake action' };
    }
  });
  // public someEffect$ = createEffect(() =>
  //   this.dataPersistence.fetch(ProductsActionTypes.Action, {
  //     run: a => {
  //       console.log('fetching');
  //       return { type: 'fake action' };
  //     }
  //   })
  // );
  constructor(private dataPersistence: DataPersistence<any>) {}
}

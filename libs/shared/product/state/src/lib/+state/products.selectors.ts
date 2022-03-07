import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { createAction, props } from '@ngrx/store';
import { fetch } from '@nrwl/angular';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductsState } from './products.reducer';

export const getProducts = ({ products }: ProductsState) => products;

export const getProduct = ({ products }: ProductsState, productId: string) =>
  products.find((product) => product.id === productId);


interface Data {
name: string;
}

const doStuff = createAction('hi');
const doMoreStuff = createAction('more', props<Data>());

@Injectable()
export class SomeEffects {

  e$ = createEffect(() => this.actions.pipe(
    ofType(doStuff),
    fetch({
      run: () =>  of({} as Data).pipe(
          map(data => doMoreStuff(data))
        )

    })
  ));

  constructor(private actions: Actions) {}
}

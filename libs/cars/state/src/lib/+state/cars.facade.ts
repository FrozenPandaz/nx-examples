import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';

import { CarsState } from './cars.reducer';
import { carsQuery } from './cars.selectors';
import { LoadCars } from './cars.actions';

@Injectable()
export class CarsFacade {
  loaded$ = this.store.select(carsQuery.getLoaded);
  allCars$ = this.store.select(carsQuery.getAllCars);
  selectedCars$ = this.store.select(carsQuery.getSelectedCars);

  constructor(private store: Store<CarsState>) {}

  loadAll() {
    this.store.dispatch(new LoadCars());
  }
}

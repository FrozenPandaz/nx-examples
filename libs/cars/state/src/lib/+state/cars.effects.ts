import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import { CarsState } from './cars.reducer';
import {
  LoadCars,
  CarsLoaded,
  CarsLoadError,
  CarsActionTypes
} from './cars.actions';

@Injectable()
export class CarsEffects {
  @Effect()
  loadCars$ = this.dataPersistence.fetch(CarsActionTypes.LoadCars, {
    run: (action: LoadCars, state: CarsState) => {
      // Your custom REST 'load' logic goes here. For now just return an empty list...
      return new CarsLoaded([
        {
          id: '0',
          brand: 'Mazda',
          model: 'Mazda3',
          year: 2018
        },
        {
          id: '1',
          brand: 'Porsche',
          model: '911',
          year: 2018
        }
      ]);
    },

    onError: (action: LoadCars, error) => {
      console.error('Error', error);
      return new CarsLoadError(error);
    }
  });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<CarsState>
  ) {}
}

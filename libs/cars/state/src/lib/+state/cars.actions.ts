import { Action } from '@ngrx/store';
import { Car } from './cars.reducer';

export enum CarsActionTypes {
  LoadCars = '[Cars] Load Cars',
  CarsLoaded = '[Cars] Cars Loaded',
  CarsLoadError = '[Cars] Cars Load Error'
}

export class LoadCars implements Action {
  readonly type = CarsActionTypes.LoadCars;
}

export class CarsLoadError implements Action {
  readonly type = CarsActionTypes.LoadCars;
  constructor(public payload: any) {}
}

export class CarsLoaded implements Action {
  readonly type = CarsActionTypes.CarsLoaded;
  constructor(public payload: Car[]) {}
}

export type CarsAction = LoadCars | CarsLoaded | CarsLoadError;

export const fromCarsActions = {
  LoadCars,
  CarsLoaded,
  CarsLoadError
};

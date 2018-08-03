import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CarsState } from './cars.reducer';

// Lookup the 'Cars' feature state managed by NgRx
const getCarsState = createFeatureSelector<CarsState>('cars');

const getLoaded = createSelector(
  getCarsState,
  (state: CarsState) => state.loaded
);
const getError = createSelector(
  getCarsState,
  (state: CarsState) => state.error
);

const getAllCars = createSelector(getCarsState, (state: CarsState) => {
  console.log(state);
  return state.list;
});
const getSelectedId = createSelector(
  getCarsState,
  (state: CarsState) => state.selectedId
);
const getSelectedCars = createSelector(
  getAllCars,
  getSelectedId,
  (cars, id) => {
    const result = cars.find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const carsQuery = {
  getLoaded,
  getError,
  getAllCars,
  getSelectedCars
};

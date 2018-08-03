import { CarsAction, CarsActionTypes } from './cars.actions';

/**
 * Interface for the 'Cars' data used in
 *  - CarsState, and
 *  - carsReducer
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
}

export interface CarsState {
  list: Car[]; // list of Cars; analogous to a sql normalized table
  selectedId?: string | number; // which Cars record has been selected
  loaded: boolean; // has the Cars list been loaded
  error?: any; // last none error (if any)
}

export const initialState: CarsState = {
  list: [],
  loaded: false
};

export function carsReducer(
  state: CarsState = initialState,
  action: CarsAction
): CarsState {
  switch (action.type) {
    case CarsActionTypes.CarsLoaded: {
      state = {
        ...state,
        list: action.payload,
        loaded: true
      };
      break;
    }
  }
  return state;
}

import { CarsLoaded } from './cars.actions';
import { CarsState, Car, initialState, carsReducer } from './cars.reducer';

describe('Cars Reducer', () => {
  const getCarsId = it => it['id'];
  let createCars;

  beforeEach(() => {
    createCars = (id: string, name = ''): Car => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid Cars actions ', () => {
    it('should return set the list of known Cars', () => {
      const carss = [createCars('PRODUCT-AAA'), createCars('PRODUCT-zzz')];
      const action = new CarsLoaded(carss);
      const result: CarsState = carsReducer(initialState, action);
      const selId: string = getCarsId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = carsReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});

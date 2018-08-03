import { Car, CarsState } from './cars.reducer';
import { carsQuery } from './cars.selectors';

describe('Cars Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getCarsId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createCars = (id: string, name = ''): Car => ({
      id,
      name: name || `name-${id}`
    });
    storeState = {
      cars: {
        list: [
          createCars('PRODUCT-AAA'),
          createCars('PRODUCT-BBB'),
          createCars('PRODUCT-CCC')
        ],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('Cars Selectors', () => {
    it('getAllCars() should return the list of Cars', () => {
      const results = carsQuery.getAllCars(storeState);
      const selId = getCarsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedCars() should return the selected Entity', () => {
      const result = carsQuery.getSelectedCars(storeState);
      const selId = getCarsId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = carsQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = carsQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});

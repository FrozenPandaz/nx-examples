import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/nx/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/nx';

import { CarsEffects } from './cars.effects';
import { CarsFacade } from './cars.facade';

import { carsQuery } from './cars.selectors';
import { LoadCars, CarsLoaded } from './cars.actions';
import { CarsState, Car, initialState, carsReducer } from './cars.reducer';

interface TestSchema {
  cars: CarsState;
}

describe('CarsFacade', () => {
  let facade: CarsFacade;
  let store: Store<TestSchema>;
  let createCars;

  beforeEach(() => {
    createCars = (id: string, name = ''): Car => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature('cars', carsReducer, { initialState }),
          EffectsModule.forFeature([CarsEffects])
        ],
        providers: [CarsFacade]
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule
        ]
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.get(Store);
      facade = TestBed.get(CarsFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async done => {
      try {
        let list = await readFirst(facade.allCars$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.loadAll();

        list = await readFirst(facade.allCars$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `CarsLoaded` to manually submit list for state management
     */
    it('allCars$ should return the loaded list; and loaded flag == true', async done => {
      try {
        let list = await readFirst(facade.allCars$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(new CarsLoaded([createCars('AAA'), createCars('BBB')]));

        list = await readFirst(facade.allCars$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});

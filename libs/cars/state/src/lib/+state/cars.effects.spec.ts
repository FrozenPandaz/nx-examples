import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule } from '@nrwl/nx';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { CarsEffects } from './cars.effects';
import { LoadCars, CarsLoaded } from './cars.actions';

describe('CarsEffects', () => {
  let actions: Observable<any>;
  let effects: CarsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        CarsEffects,
        DataPersistence,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(CarsEffects);
  });

  describe('loadCars$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadCars() });
      expect(effects.loadCars$).toBeObservable(
        hot('-a-|', { a: new CarsLoaded([]) })
      );
    });
  });
});

import { Component, OnInit } from '@angular/core';

import { CarsFacade } from '../../../../../libs/cars/state/src'; // @myproj/cars/state

import { tap } from 'rxjs/operators';

@Component({
  selector: 'myproj-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {
  cars$ = this.carsFacade.allCars$.pipe(tap(console.log));

  constructor(private carsFacade: CarsFacade) {}

  ngOnInit() {
    this.carsFacade.loadAll();
  }
}

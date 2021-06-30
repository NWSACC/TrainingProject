import { ChangeDetectorRef, OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { Observable } from 'rxjs';
import { Users } from '../_helpers/interfaces/userDetails';

@Pipe({
  name: 'testAsync'
})
export class TestAsyncPipe implements PipeTransform, OnDestroy {
  private asyncPipe: AsyncPipe;

  constructor(private _ref: ChangeDetectorRef) {
    this.asyncPipe = new AsyncPipe(_ref);
  }

  transform(value: Observable<Users[]>): Users[] {
    return this.asyncPipe.transform(value);
  }

  ngOnDestroy() {
    this.asyncPipe.ngOnDestroy();
  }
}

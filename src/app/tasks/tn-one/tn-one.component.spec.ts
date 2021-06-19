import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TnOneComponent } from './tn-one.component';

describe('TnOneComponent', () => {
  let component: TnOneComponent;
  let fixture: ComponentFixture<TnOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TnOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TnOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

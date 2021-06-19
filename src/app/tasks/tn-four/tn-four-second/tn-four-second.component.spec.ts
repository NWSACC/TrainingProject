import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TnFourSecondComponent } from './tn-four-second.component';

describe('TnFourSecondComponent', () => {
  let component: TnFourSecondComponent;
  let fixture: ComponentFixture<TnFourSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TnFourSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TnFourSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

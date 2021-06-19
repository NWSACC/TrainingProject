import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TnFourFirstComponent } from './tn-four-first.component';

describe('TnFourFirstComponent', () => {
  let component: TnFourFirstComponent;
  let fixture: ComponentFixture<TnFourFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TnFourFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TnFourFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

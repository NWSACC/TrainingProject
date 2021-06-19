import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TnTwoComponent } from './tn-two.component';

describe('TnTwoComponent', () => {
  let component: TnTwoComponent;
  let fixture: ComponentFixture<TnTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TnTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TnTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

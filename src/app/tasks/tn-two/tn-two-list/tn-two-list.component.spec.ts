import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TnTwoListComponent } from './tn-two-list.component';

describe('TnTwoListComponent', () => {
  let component: TnTwoListComponent;
  let fixture: ComponentFixture<TnTwoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TnTwoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TnTwoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

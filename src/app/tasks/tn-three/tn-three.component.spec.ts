import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TnThreeComponent } from './tn-three.component';

describe('TnThreeComponent', () => {
  let component: TnThreeComponent;
  let fixture: ComponentFixture<TnThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TnThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TnThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

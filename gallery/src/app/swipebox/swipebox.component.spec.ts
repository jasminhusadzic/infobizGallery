import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwipeboxComponent } from './swipebox.component';

describe('SwipeboxComponent', () => {
  let component: SwipeboxComponent;
  let fixture: ComponentFixture<SwipeboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwipeboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwipeboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

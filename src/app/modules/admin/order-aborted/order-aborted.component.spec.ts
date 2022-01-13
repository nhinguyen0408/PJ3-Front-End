import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderAbortedComponent } from './order-aborted.component';

describe('OrderAbortedComponent', () => {
  let component: OrderAbortedComponent;
  let fixture: ComponentFixture<OrderAbortedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderAbortedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderAbortedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

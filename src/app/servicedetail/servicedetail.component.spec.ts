import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicedetailComponent } from './servicedetail.component';

describe('ServicedetailComponent', () => {
  let component: ServicedetailComponent;
  let fixture: ComponentFixture<ServicedetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicedetailComponent]
    });
    fixture = TestBed.createComponent(ServicedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

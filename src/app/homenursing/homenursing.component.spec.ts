import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomenursingComponent } from './homenursing.component';

describe('HomenursingComponent', () => {
  let component: HomenursingComponent;
  let fixture: ComponentFixture<HomenursingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomenursingComponent]
    });
    fixture = TestBed.createComponent(HomenursingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

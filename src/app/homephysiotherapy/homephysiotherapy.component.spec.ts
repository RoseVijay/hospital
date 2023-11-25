import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomephysiotherapyComponent } from './homephysiotherapy.component';

describe('HomephysiotherapyComponent', () => {
  let component: HomephysiotherapyComponent;
  let fixture: ComponentFixture<HomephysiotherapyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomephysiotherapyComponent]
    });
    fixture = TestBed.createComponent(HomephysiotherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

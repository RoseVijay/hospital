import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaregiverforelderlyComponent } from './caregiverforelderly.component';

describe('CaregiverforelderlyComponent', () => {
  let component: CaregiverforelderlyComponent;
  let fixture: ComponentFixture<CaregiverforelderlyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaregiverforelderlyComponent]
    });
    fixture = TestBed.createComponent(CaregiverforelderlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

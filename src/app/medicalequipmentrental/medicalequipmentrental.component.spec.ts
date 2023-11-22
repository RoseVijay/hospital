import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalequipmentrentalComponent } from './medicalequipmentrental.component';

describe('MedicalequipmentrentalComponent', () => {
  let component: MedicalequipmentrentalComponent;
  let fixture: ComponentFixture<MedicalequipmentrentalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicalequipmentrentalComponent]
    });
    fixture = TestBed.createComponent(MedicalequipmentrentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

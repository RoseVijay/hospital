import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParvathyhomecareComponent } from './parvathyhomecare.component';

describe('ParvathyhomecareComponent', () => {
  let component: ParvathyhomecareComponent;
  let fixture: ComponentFixture<ParvathyhomecareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParvathyhomecareComponent]
    });
    fixture = TestBed.createComponent(ParvathyhomecareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

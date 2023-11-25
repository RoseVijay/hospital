import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomedoctorconsultationComponent } from './homedoctorconsultation.component';

describe('HomedoctorconsultationComponent', () => {
  let component: HomedoctorconsultationComponent;
  let fixture: ComponentFixture<HomedoctorconsultationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomedoctorconsultationComponent]
    });
    fixture = TestBed.createComponent(HomedoctorconsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

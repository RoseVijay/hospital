import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomexrayComponent } from './homexray.component';

describe('HomexrayComponent', () => {
  let component: HomexrayComponent;
  let fixture: ComponentFixture<HomexrayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomexrayComponent]
    });
    fixture = TestBed.createComponent(HomexrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabtestathomeComponent } from './labtestathome.component';

describe('LabtestathomeComponent', () => {
  let component: LabtestathomeComponent;
  let fixture: ComponentFixture<LabtestathomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LabtestathomeComponent]
    });
    fixture = TestBed.createComponent(LabtestathomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomehealthcheckupsComponent } from './homehealthcheckups.component';

describe('HomehealthcheckupsComponent', () => {
  let component: HomehealthcheckupsComponent;
  let fixture: ComponentFixture<HomehealthcheckupsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomehealthcheckupsComponent]
    });
    fixture = TestBed.createComponent(HomehealthcheckupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

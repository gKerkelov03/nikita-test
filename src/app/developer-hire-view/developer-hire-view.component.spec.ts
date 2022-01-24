import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperHireViewComponent } from './developer-hire-view.component';

describe('DeveloperHireViewComponent', () => {
  let component: DeveloperHireViewComponent;
  let fixture: ComponentFixture<DeveloperHireViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeveloperHireViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperHireViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

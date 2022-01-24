import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperEditViewComponent } from './developer-edit-view.component';

describe('DeveloperEditViewComponent', () => {
  let component: DeveloperEditViewComponent;
  let fixture: ComponentFixture<DeveloperEditViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeveloperEditViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

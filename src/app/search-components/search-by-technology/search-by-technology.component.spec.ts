import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByTechnologyComponent } from './search-by-technology.component';

describe('SearchByTechnologyComponent', () => {
  let component: SearchByTechnologyComponent;
  let fixture: ComponentFixture<SearchByTechnologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchByTechnologyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByTechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

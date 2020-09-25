import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThSortingComponent } from './th-sorting.component';

describe('SortingComponent', () => {
  let component: ThSortingComponent;
  let fixture: ComponentFixture<ThSortingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThSortingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThSortingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BugsCreationComponent } from './bugs-creation.component';

describe('BugsCreationComponent', () => {
  let component: BugsCreationComponent;
  let fixture: ComponentFixture<BugsCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BugsCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BugsCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

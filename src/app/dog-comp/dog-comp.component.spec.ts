import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogCompComponent } from './dog-comp.component';

describe('DogCompComponent', () => {
  let component: DogCompComponent;
  let fixture: ComponentFixture<DogCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DogCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

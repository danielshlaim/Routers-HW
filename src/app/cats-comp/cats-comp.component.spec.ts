import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsCompComponent } from './cats-comp.component';

describe('CatsCompComponent', () => {
  let component: CatsCompComponent;
  let fixture: ComponentFixture<CatsCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatsCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatsCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

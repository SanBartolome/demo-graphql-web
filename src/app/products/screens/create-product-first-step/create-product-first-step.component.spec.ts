import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProductFirstStepComponent } from './create-product-first-step.component';

describe('CreateProductFirstStepComponent', () => {
  let component: CreateProductFirstStepComponent;
  let fixture: ComponentFixture<CreateProductFirstStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProductFirstStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProductFirstStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProductSecondStepComponent } from './create-product-second-step.component';

describe('CreateProductSecondStepComponent', () => {
  let component: CreateProductSecondStepComponent;
  let fixture: ComponentFixture<CreateProductSecondStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProductSecondStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProductSecondStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

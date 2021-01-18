import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductFirstStepComponent } from './edit-product-first-step.component';

describe('EditProductFirstStepComponent', () => {
  let component: EditProductFirstStepComponent;
  let fixture: ComponentFixture<EditProductFirstStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProductFirstStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProductFirstStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

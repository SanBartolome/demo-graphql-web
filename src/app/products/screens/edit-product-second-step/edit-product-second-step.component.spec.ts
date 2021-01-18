import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductSecondStepComponent } from './edit-product-second-step.component';

describe('EditProductSecondStepComponent', () => {
  let component: EditProductSecondStepComponent;
  let fixture: ComponentFixture<EditProductSecondStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProductSecondStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProductSecondStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

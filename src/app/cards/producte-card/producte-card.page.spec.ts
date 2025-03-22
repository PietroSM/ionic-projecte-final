import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProducteCardPage } from './producte-card.page';

describe('ProducteCardPage', () => {
  let component: ProducteCardPage;
  let fixture: ComponentFixture<ProducteCardPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducteCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductesPropisPage } from './productes-propis.page';

describe('ProductesPropisPage', () => {
  let component: ProductesPropisPage;
  let fixture: ComponentFixture<ProductesPropisPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductesPropisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

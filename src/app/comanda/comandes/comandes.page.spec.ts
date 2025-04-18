import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComandesPage } from './comandes.page';

describe('ComandesPage', () => {
  let component: ComandesPage;
  let fixture: ComponentFixture<ComandesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ComandesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

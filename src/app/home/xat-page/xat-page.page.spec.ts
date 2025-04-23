import { ComponentFixture, TestBed } from '@angular/core/testing';
import { XatPagePage } from './xat-page.page';

describe('XatPagePage', () => {
  let component: XatPagePage;
  let fixture: ComponentFixture<XatPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(XatPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

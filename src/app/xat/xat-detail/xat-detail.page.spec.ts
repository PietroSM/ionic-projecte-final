import { ComponentFixture, TestBed } from '@angular/core/testing';
import { XatDetailPage } from './xat-detail.page';

describe('XatDetailPage', () => {
  let component: XatDetailPage;
  let fixture: ComponentFixture<XatDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(XatDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CistellaPagePage } from './cistella-page.page';

describe('CistellaPagePage', () => {
  let component: CistellaPagePage;
  let fixture: ComponentFixture<CistellaPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CistellaPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComandaStatusPagePage } from './comanda-status-page.page';

describe('ComandaStatusPagePage', () => {
  let component: ComandaStatusPagePage;
  let fixture: ComponentFixture<ComandaStatusPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ComandaStatusPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

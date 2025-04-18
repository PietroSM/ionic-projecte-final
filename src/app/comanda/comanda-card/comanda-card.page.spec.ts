import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComandaCardPage } from './comanda-card.page';

describe('ComandaCardPage', () => {
  let component: ComandaCardPage;
  let fixture: ComponentFixture<ComandaCardPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ComandaCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

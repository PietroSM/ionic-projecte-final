import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallsProductePage } from './detalls-producte.page';

describe('DetallsProductePage', () => {
  let component: DetallsProductePage;
  let fixture: ComponentFixture<DetallsProductePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallsProductePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

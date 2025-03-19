import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AfegirProductePage } from './afegir-producte.page';

describe('AfegirProductePage', () => {
  let component: AfegirProductePage;
  let fixture: ComponentFixture<AfegirProductePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AfegirProductePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

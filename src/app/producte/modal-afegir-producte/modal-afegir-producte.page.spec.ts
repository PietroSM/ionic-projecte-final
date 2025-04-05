import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalAfegirProductePage } from './modal-afegir-producte.page';

describe('ModalAfegirProductePage', () => {
  let component: ModalAfegirProductePage;
  let fixture: ComponentFixture<ModalAfegirProductePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAfegirProductePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

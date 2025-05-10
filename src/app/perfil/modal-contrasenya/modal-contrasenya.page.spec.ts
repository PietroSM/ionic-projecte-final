import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalContrasenyaPage } from './modal-contrasenya.page';

describe('ModalContrasenyaPage', () => {
  let component: ModalContrasenyaPage;
  let fixture: ComponentFixture<ModalContrasenyaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalContrasenyaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

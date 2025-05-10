import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilFormPage } from './perfil-form.page';

describe('PerfilFormPage', () => {
  let component: PerfilFormPage;
  let fixture: ComponentFixture<PerfilFormPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

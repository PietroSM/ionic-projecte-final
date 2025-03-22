import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IniciProductePage } from './inici-producte.page';

describe('IniciProductePage', () => {
  let component: IniciProductePage;
  let fixture: ComponentFixture<IniciProductePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciProductePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

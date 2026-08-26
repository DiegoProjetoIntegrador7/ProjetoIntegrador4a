import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cadastroaluno } from './cadastroaluno';

describe('Cadastroaluno', () => {
  let component: Cadastroaluno;
  let fixture: ComponentFixture<Cadastroaluno>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Cadastroaluno],
    }).compileComponents();

    fixture = TestBed.createComponent(Cadastroaluno);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

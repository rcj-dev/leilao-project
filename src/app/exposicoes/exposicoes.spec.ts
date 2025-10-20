import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exposicoes } from './exposicoes';

describe('Exposicoes', () => {
  let component: Exposicoes;
  let fixture: ComponentFixture<Exposicoes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exposicoes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exposicoes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

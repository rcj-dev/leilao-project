import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Critico } from './critico';

describe('Critico', () => {
  let component: Critico;
  let fixture: ComponentFixture<Critico>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Critico]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Critico);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

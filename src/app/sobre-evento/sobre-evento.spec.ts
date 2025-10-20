import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreEvento } from './sobre-evento';

describe('SobreEvento', () => {
  let component: SobreEvento;
  let fixture: ComponentFixture<SobreEvento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SobreEvento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobreEvento);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

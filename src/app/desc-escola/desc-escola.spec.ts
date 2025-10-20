import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescEscola } from './desc-escola';

describe('DescEscola', () => {
  let component: DescEscola;
  let fixture: ComponentFixture<DescEscola>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescEscola]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescEscola);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerInicio } from './container-inicio';

describe('ContainerInicio', () => {
  let component: ContainerInicio;
  let fixture: ComponentFixture<ContainerInicio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerInicio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerInicio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

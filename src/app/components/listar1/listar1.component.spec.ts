import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listar1Component } from './listar1.component';

describe('Listar1Component', () => {
  let component: Listar1Component;
  let fixture: ComponentFixture<Listar1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Listar1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Listar1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfazInicial2Component } from './interfaz-inicial2.component';

describe('InterfazInicial2Component', () => {
  let component: InterfazInicial2Component;
  let fixture: ComponentFixture<InterfazInicial2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterfazInicial2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterfazInicial2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

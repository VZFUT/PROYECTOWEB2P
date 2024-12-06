import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfazLibros2Component } from './interfaz-libros2.component';

describe('InterfazLibros2Component', () => {
  let component: InterfazLibros2Component;
  let fixture: ComponentFixture<InterfazLibros2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterfazLibros2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterfazLibros2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

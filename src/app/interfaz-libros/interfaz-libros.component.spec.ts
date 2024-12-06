import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfazLibrosComponent } from './interfaz-libros.component';

describe('InterfazLibrosComponent', () => {
  let component: InterfazLibrosComponent;
  let fixture: ComponentFixture<InterfazLibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterfazLibrosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterfazLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

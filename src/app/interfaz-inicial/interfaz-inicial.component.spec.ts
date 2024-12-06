import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InterfazInicialComponent } from './interfaz-inicial.component';

describe('InterfazInicialComponent', () => {
  let component: InterfazInicialComponent;
  let fixture: ComponentFixture<InterfazInicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterfazInicialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterfazInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

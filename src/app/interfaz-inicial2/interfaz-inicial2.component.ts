import { Component, OnInit, HostListener  } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-interfaz-inicial2',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './interfaz-inicial2.component.html',
  styleUrls: ['./interfaz-inicial2.component.css'],
  encapsulation: ViewEncapsulation.None 
})
export class InterfazInicial2Component implements OnInit {
  libros: any[] = []; // Variable para almacenar los datos del JSON

  constructor(private http: HttpClient) {}

  /**
   * Función que escucha el evento de scroll para cambiar clases del encabezado.
   */
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    // Obtenemos el elemento del encabezado
    const header: HTMLElement | null = document.getElementById('main-header');

    // Validamos que el encabezado exista para evitar errores
    if (header) {
      if (window.scrollY > 100) {
        // Cambia a diseño sólido
        header.classList.remove('transparente');
        header.classList.add('solid');
      } else {
        // Cambia a diseño transparente
        header.classList.remove('solid');
        header.classList.add('transparente');
      }
    } else {
      console.error("El elemento con id 'main-header' no existe.");
    }
  }

  /**
   * Método que se ejecuta al inicializar el componente.
   * Carga los datos desde un archivo JSON y los asigna a la variable `libros`.
   */
  ngOnInit(): void {
    this.http.get<any[]>('/assets/data/libros.json').subscribe({
      next: (data) => {
        this.libros = data; // Guardar los datos en la variable `libros`
      },
      error: (err) => {
        console.error('Error al cargar el archivo JSON:', err);
      }
    });
  }
}


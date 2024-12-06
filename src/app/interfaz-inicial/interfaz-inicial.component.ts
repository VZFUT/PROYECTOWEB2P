import { Component, OnInit, HostListener  } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-interfaz-inicial',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ], 
  templateUrl: './interfaz-inicial.component.html',
  styleUrls: ['./interfaz-inicial.component.css'],
  encapsulation: ViewEncapsulation.None 
})

export class InterfazInicialComponent {
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

}

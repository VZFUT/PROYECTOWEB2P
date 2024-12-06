import { Component, OnInit, HostListener  } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-interfaz-libros',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './interfaz-libros.component.html',
  styleUrl: './interfaz-libros.component.css',
  encapsulation: ViewEncapsulation.None 
})
export class InterfazLibrosComponent implements OnInit {
  libros: any[] = []; // Variable para almacenar los datos del JSON

  constructor(private http: HttpClient) {}

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

    librosFiltrados = [...this.libros]; // Copia inicial para mostrar todos los libros
    buscarTexto: string = '';
    filtroAutor: string = '';

    buscarLibros() {
      this.librosFiltrados = this.libros.filter(libro =>
        libro.nombre.toLowerCase().includes(this.buscarTexto.toLowerCase()) &&
        libro.autor.toLowerCase().includes(this.filtroAutor.toLowerCase())
      );
    }

    filtrarPorAutor() {
      this.librosFiltrados = this.libros.filter(libro =>
        libro.autor.toLowerCase().includes(this.filtroAutor.toLowerCase())
      );
    }

}

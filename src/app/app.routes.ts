import { Routes } from '@angular/router';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { InterfazInicialComponent } from './interfaz-inicial/interfaz-inicial.component';
import { InterfazInicial2Component } from './interfaz-inicial2/interfaz-inicial2.component';
import { InterfazLibrosComponent } from './interfaz-libros/interfaz-libros.component';
import { InterfazLibros2Component } from './interfaz-libros2/interfaz-libros2.component';
import { RegistroComponent } from './registro/registro.component';

export const routes: Routes = [
  { path: '', component: InterfazInicialComponent },
  { path: 'interfaz-inicial2', component: InterfazInicial2Component },
  { path: 'inicio-sesion', component: InicioSesionComponent },
  { path: 'interfaz-libros', component: InterfazLibrosComponent },
  { path: 'interfaz-libros2', component: InterfazLibros2Component },
  { path: 'registro', component: RegistroComponent },
];

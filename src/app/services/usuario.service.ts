import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuariosUrl = 'assets/data/usuarios.xml';

  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<any> {
    return this.http.get(this.usuariosUrl, { responseType: 'text' }).pipe(
      map((data) => this.parseXML(data))
    );
  }

  private parseXML(data: string): any {
    const parser = new DOMParser();
    const xml = parser.parseFromString(data, 'application/xml');
    const usuarios = Array.from(xml.getElementsByTagName('usuario')).map((usuario) => ({
      username: usuario.getElementsByTagName('username')[0].textContent,
      password: usuario.getElementsByTagName('password')[0].textContent,
      email: usuario.getElementsByTagName('email')[0].textContent,
    }));
    return usuarios;
  }
}
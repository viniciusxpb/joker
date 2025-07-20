import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Piada {
  id: number;
  texto: string;
  categoria: string;
}

@Injectable({
  providedIn: 'root'
})
export class PiadaService {
  private baseUrl = 'https://api.exemplo.com/piadas'; // substitua pela real

  constructor(private http: HttpClient) {}

  buscarPiadas(categoria: string): Observable<Piada[]> {
    const params = new HttpParams().set('categoria', categoria);
    return this.http.get<Piada[]>(this.baseUrl, { params });
  }

  buscarPiadaPorTexto(texto: string): Observable<Piada[]> {
    const params = new HttpParams().set('texto', texto);
    return this.http.get<Piada[]>(this.baseUrl, { params });
  }
}

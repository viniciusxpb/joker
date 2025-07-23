import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PiadaService {
  private baseUrl = 'https://back-wni8.onrender.com/piada'; // ou '/api/piada' com proxy

  constructor(private http: HttpClient) {}

  /**
   * Busca uma piada a partir de um tópico específico
   * Exemplo: 'gato', 'programador', 'guerra emocional'
   */
  buscarPiada(topico: string): Observable<{ piada: string }> {
    const params = new HttpParams().set('topico', topico);
    return this.http.get<{ piada: string }>(this.baseUrl, { params });
  }
}

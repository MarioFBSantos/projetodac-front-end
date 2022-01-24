import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { Evento } from '../models/Evento';
import { Recurso } from '../models/Recurso';

@Injectable({
  providedIn: 'root'
})
export class EventoService {


  constructor(private httpClient: HttpClient) { }
  private eventoRecentUrl = 'http://localhost:8080/evento/recentes'
  private eventoUrl = 'http://localhost:8080/evento'

  retrieveRecents(): Observable<Evento> {
    return this.httpClient.get<Evento>(this.eventoRecentUrl);
  }
  retrieveAll(): Observable<Evento> {
    return this.httpClient.get<Evento>(this.eventoUrl);
  }

  deleteEvento(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.eventoUrl}/${id}`).pipe(take(1));;
  }

  postEvento(evento: Evento): Observable<any> {
    return this.httpClient.post<Evento>(this.eventoUrl, evento).pipe(take(1));
  }

  loadById(id: number): Observable<any> {
    return this.httpClient.get<Evento>(`${this.eventoUrl}/${id}`).pipe(take(1));
  }

  loadEventosRecursos(id: number): Observable<any> {
    return this.httpClient.get<Recurso>(`${this.eventoUrl}/${id}/recursos`).pipe(take(1));
  }
}

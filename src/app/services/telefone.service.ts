import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Telefone } from '../models/telefone.model';

@Injectable({
  providedIn: 'root'
})
export class TelefoneService {
  private baseURL: string =  'http://localhost:8080';

  constructor(private http: HttpClient) {}

  findAll(): Observable<Telefone[]> {
    return this.http.get<Telefone[]>(`${this.baseURL}/telefones`);
  }

  findById(id: string): Observable<Telefone> {
    return this.http.get<Telefone>(`${this.baseURL}/telefones/${id}`);
  }

  save(telefone: Telefone): Observable<Telefone> {
    return this.http.post<Telefone>(`${this.baseURL}/telefones`, telefone);
  }

  update(telefone: Telefone): Observable<Telefone> {
    return this.http.put<Telefone>(`${this.baseURL}/telefones/${telefone.id}`, telefone );
  }

  delete(telefone: Telefone): Observable<any> {
    return this.http.delete<Telefone>(`${this.baseURL}/telefones/${telefone.id}`);
  }

}

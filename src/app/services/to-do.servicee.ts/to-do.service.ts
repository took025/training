import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  private baseUrl = environment.base_Url;

  constructor( private http: HttpClient) { }
  getToDoes(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.baseUrl + 'todos');
  }
  // tslint:disable-next-line: ban-types
  getNewsByAuthor(id: Number): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.baseUrl}posts?userId=${id}`);
  }
  getAuthors() {

  }
  getAuthor(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}users/${id}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
// import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  touch: boolean;

  constructor( private httClient: HttpClient) { }
  addPost(post: any): Observable<any> {
    return this.httClient.post('https://jsonplaceholder.typicode.com/posts', {
      title: post.title,
      body: post.description
    });
  }
  toogle() {
    this.touch = !this.touch;
  }
}

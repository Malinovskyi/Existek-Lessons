import { Post } from './../models.ts/post';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  endpoint = environment.api;
  constructor(private httpClient: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${this.endpoint}` + 'posts');
  }

  addPost(newPost: Post): Observable<Post> {
    return this.httpClient.post<Post>(`${this.endpoint}` + 'posts', newPost);
  }

  updatePost(post: Post): Observable<Post> {
    return this.httpClient.put<Post>(
      `${this.endpoint}` + 'posts' + '/' + post.id,
      post
    );
  }

  deletePost(post: Post): Observable<Post[]> {
    return this.httpClient.delete<Post[]>(
      `${this.endpoint}` + 'posts' + '/' + post.id
    );
  }
}

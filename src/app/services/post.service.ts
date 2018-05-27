import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

//Angular 6 way of importing this classes
import { Observable, throwError } from 'rxjs'; 
import { catchError } from 'rxjs/operators'; 

import { AppError, NotFoundError, BadInput } from './../common/errors/app-error'; 

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) { }

  getPosts(){
    return this.http.get(this.url);
  }

  createPost(post){
    return this.http.post(this.url, JSON.stringify(post))
      .pipe(catchError((error: Response) => {
        if(error.status === 400)
          return throwError(new BadInput(error.json()));
        return throwError(new AppError(error));
      }));
  }

  updatePost(post){
    return this.http.patch(this.url + '/' + post.id, JSON.stringify(post));
  }

  deletePost(id){
    return this.http.delete(this.url + '/' + id)
      .pipe(catchError((error: Response) => {
        if(error.status === 404)
          return throwError(new NotFoundError());
        return throwError(new AppError(error.json()));
      }));
  }
}

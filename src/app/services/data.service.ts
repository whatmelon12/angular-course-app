import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

//Angular 6 way of importing this classes
import { Observable, throwError } from 'rxjs'; 
import { catchError, map } from 'rxjs/operators'; 

import { AppError, NotFoundError, BadInput } from './../common/errors/app-error'; 

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private url: string, private http: Http) { }

  getAll(){
    return this.http.get(this.url)
        .pipe(map(response => response.json()))
        .pipe(catchError(this.handleError));
  }

  create(resource){
    return this.http.post(this.url, JSON.stringify(resource))
        .pipe(map(response => response.json()))
        .pipe(catchError(this.handleError));
  }

  update(resource){
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify(resource))
        .pipe(map(response => response.json()))
        .pipe(catchError(this.handleError));
  }

  delete(id){
    return this.http.delete(this.url + '/' + id)
        .pipe(map(response => response.json()))
        .pipe(catchError(this.handleError));
  }

  private handleError(error: Response){
    if(error.status === 400)
      return throwError(new BadInput(error.json()));

    if(error.status === 404)
      return throwError(new NotFoundError(error.json()));

    return throwError(new AppError(error.json()));
  }
}

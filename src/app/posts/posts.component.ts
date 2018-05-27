import { Component, OnInit } from '@angular/core';

import { PostService } from './../services/post.service';
import { AppError, NotFoundError, BadInput } from './../common/errors/app-error';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  posts: any[];

  constructor(private service: PostService) { } 

  ngOnInit(){
    this.service.getPosts()
      .subscribe(
        (response) => {
        this.posts = response.json();
      });
  }

  createPost(input: HTMLInputElement){
    let post = { title: input.value };
    input.value = '';

    this.service.createPost(post)
      .subscribe(
        (response) => {
        post['id'] = response.json().id;
        this.posts.splice(0, 0, post);
        console.log(response.json());
      }, 
      (error: AppError) => {
        if(error instanceof BadInput){

        }
        else throw error;        
      });
  }

  updatePost(post){
    this.service.updatePost(post)
      .subscribe(
        (response) => {
        console.log(response.json());
      });
  }

  deletePost(post){
    this.service.deletePost(post.id)
      .subscribe(
        (response) => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      }, 
      (error: AppError) => {
        if(error instanceof NotFoundError)
          alert('This post has already been deleted');
        else throw error;      
      });
  }
  
}

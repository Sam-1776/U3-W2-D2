import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  post : Post[] = []
  constructor() { }

  createPost(): any{
    fetch('../assets/db.json')
    .then((resp) => resp.json())
    .then((data) =>{
     for (let i = 0; i < data.length; i++) {
      this.post.push(data[i])
      
     }
      
    } 
    )
  }
}


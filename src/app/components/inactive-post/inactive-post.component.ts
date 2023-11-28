import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/service/posts.service';

@Component({
  selector: 'app-inactive-post',
  templateUrl: './inactive-post.component.html',
  styleUrls: ['./inactive-post.component.scss']
})
export class InactivePostComponent implements OnInit {

  constructor(private postSrv: PostsService) { }

  posts: any[] = []

  ngOnInit(): void {
    this.postSrv.createPost()
    this.posts = this.postSrv.post
    console.log(this.posts);
  }

}

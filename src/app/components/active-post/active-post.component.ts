import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/service/posts.service';


@Component({
  selector: 'app-active-post',
  templateUrl: './active-post.component.html',
  styleUrls: ['./active-post.component.scss']
})
export class ActivePostComponent implements OnInit {

  constructor(private postSrv: PostsService) { }

  posts: any[] = []

  ngOnInit(): void {
    this.postSrv.createPost()
    this.posts = this.postSrv.post
    console.log(this.posts);
  }

}



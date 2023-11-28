import { Component, OnInit, Input} from '@angular/core';
import { PostsService } from 'src/app/service/posts.service';


@Component({
  selector: 'app-page-a',
  templateUrl: './page-a.component.html',
  styleUrls: ['./page-a.component.scss']
})
export class PageAComponent implements OnInit {
  
  @Input() post: any;
  id!: number
  body!: string
  title!: string
  active!: boolean

  constructor(private postSrv: PostsService) { }

  ngOnInit(): void {
  }

}

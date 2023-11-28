import { Component, OnInit, Input} from '@angular/core';


@Component({
  selector: 'app-page-a',
  templateUrl: './page-a.component.html',
  styleUrls: ['./page-a.component.scss']
})
export class PageAComponent implements OnInit {
  
  @Input() post: any;
 

  constructor() { }

  ngOnInit(): void {
  }

}

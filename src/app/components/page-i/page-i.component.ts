import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-i',
  templateUrl: './page-i.component.html',
  styleUrls: ['./page-i.component.scss']
})
export class PageIComponent implements OnInit {

  @Input() post: any

  constructor() { }

  ngOnInit(): void {
  }

}

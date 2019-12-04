import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor( private toogle: PostService) { }

  ngOnInit() {
  }
  click() {
    this.toogle.toogle();
    console.log(this.toogle.toogle);
  }

}

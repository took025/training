import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private toggle: PostService) { }

  ngOnInit() {
  }
  test() {
    console.log(this.toggle.touch);
  }
}

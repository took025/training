import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostService } from '../post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-apicall',
  templateUrl: './apicall.component.html',
  styleUrls: ['./apicall.component.scss']
})
export class ApicallComponent implements OnInit, OnDestroy {
  posts: FormGroup;
  post: any;
  subscription: Subscription = new Subscription();
  constructor( private fb: FormBuilder,
               private postService: PostService) { }

  ngOnInit() {
    this.posts = this.fb.group({
      title: ['' , Validators.required],
      description: ['', Validators.required]
    });
    console.log(this.posts.controls.title.dirty);
  }
  addPost( form: FormGroup) {
    const post = {
      title: form.value.title,
      description: form.value.description
    };
    this.subscription = this.postService.addPost(post).subscribe((res: any) => this.post = res);
    form.reset();
  }
  ngOnDestroy() {
    // tslint:disable-next-line: no-unused-expression
    this.subscription.unsubscribe;
  }
}

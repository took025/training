import { Component, OnInit } from '@angular/core';
import { ToDoService } from 'src/app/services/to-do.servicee.ts/to-do.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { Todo } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  todos: Todo[];

subscription: Subscription = new Subscription();
  constructor(  private todoService: ToDoService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id: number = this.route.snapshot.params.id;
    this.subscription = this.todoService.getNewsByAuthor(id).subscribe((res: Todo[]) => {
      this.todos = [...res];
      console.log(this.todos);
    });
  }

}

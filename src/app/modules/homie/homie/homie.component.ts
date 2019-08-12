import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToDoService } from 'src/app/services/to-do.servicee.ts/to-do.service';
import { Todo } from 'src/app/interfaces/todo';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-homie',
  templateUrl: './homie.component.html',
  styleUrls: ['./homie.component.scss']
})
export class HomieComponent implements OnInit , OnDestroy {
  todos: Todo[];
  subscription: Subscription = new Subscription();
  constructor(private todoService: ToDoService) { }

  ngOnInit() {
    this.subscription = this.todoService.getToDoes().subscribe(res => {
      this.todos = [...res];
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

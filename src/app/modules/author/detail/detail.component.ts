import { Component, OnInit } from '@angular/core';
import { ToDoService } from 'src/app/services/to-do.servicee.ts/to-do.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  todos: any[];
  constructor(private todoService: ToDoService , private route: ActivatedRoute) { }

  ngOnInit() {
    const id: number = this.route.snapshot.params.id;
    this.todoService.getAuthor(id).subscribe((res: any[]) => {
      this.todos = res;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from 'src/app/todos';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {
  localItem: string | null;
  todo : Todo | undefined;
  todos: Todo[];
  constructor(private route:ActivatedRoute) {
    this.localItem = localStorage.getItem('MyTodosList');
    if (this.localItem === null) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(this.localItem);
    }
  }


  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const todoIdfromRoute = routeParams.get("todoId");

    [this.todo] = this.todos.filter(item=>{
       return item.ind===todoIdfromRoute;
    })
    
  }
}

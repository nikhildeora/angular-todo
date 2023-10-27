import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/todos';

@Component({
  selector: 'app-all-todos',
  templateUrl: './all-todos.component.html',
  styleUrls: ['./all-todos.component.css'],
})
export class AllTodosComponent implements OnInit {
  // we stored our list at localstorge 
  localItem: string | null;
  todos: Todo[];
  constructor() {
    this.localItem = localStorage.getItem('MyTodosList');
    if (this.localItem === null) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(this.localItem);
    }
  }

  // here we are sorting our todos list on basis of deadline date at load time 
  ngOnInit(): void {
    this.todos = this.todos.sort((a,b)=> Number(new Date(a.deadline)) - Number(new Date(b.deadline)) )
  }

  // we changing todo status 
  toggleTodo(todoId: string) {
    this.todos = this.todos.map((el) => {
      if (el.ind === todoId) {
        return { ...el, status: !el.status };
      }
      return el;
    });
    localStorage.setItem('MyTodosList', JSON.stringify(this.todos));
  }

  // delete todo
  deleteTodo(todoId: string) {
    this.todos = this.todos.filter((el) => {
      return el.ind !== todoId;
    });
    localStorage.setItem('MyTodosList', JSON.stringify(this.todos));
  }

  // editing our todo 
  editTodo(editedTodo: Todo) {
    this.todos = this.todos.map((el) => {
      if (el.ind === editedTodo.ind) {
        return { ...el, ...editedTodo };
      }
      return el;
    });
    localStorage.setItem('MyTodosList', JSON.stringify(this.todos));
  }
}

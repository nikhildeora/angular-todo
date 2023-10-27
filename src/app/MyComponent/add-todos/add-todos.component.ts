import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/todos';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-todos',
  templateUrl: './add-todos.component.html',
  styleUrls: ['./add-todos.component.css'],
})
export class AddTodosComponent implements OnInit {
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
  todoName: string = '';
  todoDesc: string = '';
  todoLongDesc: string = '';
  todoDeadline: string = '';
  datevalid: string = '';

  ngOnInit(): void {
    let newDateis = new Date();
    let arr = [];
    arr.push(newDateis.getFullYear());
    let theMonth =
      newDateis.getMonth() + 1 < 10
        ? `0${newDateis.getMonth() + 1}`
        : newDateis.getMonth() + 1;
    arr.push(theMonth);
    let theday =
      newDateis.getDate() < 10
        ? `0${newDateis.getDate()}`
        : newDateis.getDate();
    arr.push(theday);
  
    this.datevalid = arr.join('-');
  }

  onSubmit() {
    if (
      this.todoName === '' ||
      this.todoDesc === '' ||
      this.todoLongDesc === '' ||
      this.todoDeadline === ''
    ) {
      alert('all fields are mandatory');
      return;
    }

    const newTodoItem: Todo = {
      ind: uuidv4(),
      name: this.todoName,
      desc: this.todoDesc,
      longDesc: this.todoLongDesc,
      deadline: this.todoDeadline,
      status: false,
    };

    this.todos.push(newTodoItem);
    localStorage.setItem('MyTodosList', JSON.stringify(this.todos));
    alert('new todo added');
    this.todoDesc = '';
    this.todoName = '';
    this.todoLongDesc = '';
    this.todoDeadline = '';
  }
}

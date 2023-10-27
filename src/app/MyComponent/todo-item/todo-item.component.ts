import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/todos';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  editTodo: boolean = false;
  todoName: string = '';
  todoDesc: string = '';
  todoDeadline : boolean = false;
  @Input() todo: Todo | undefined;
  @Output() todoToggle = new EventEmitter(); 
  @Output() todoDelete = new EventEmitter(); 
  @Output() todoEdit = new EventEmitter(); 

  // at load time we are checking that how many days we left till deadline. If it is less than or equal to 2 than this.todoDeadline will be true; 
  ngOnInit(): void {
    if (this.todo) {
      this.todoName = this.todo.name;
      this.todoDesc = this.todo.desc;
      
      this.todoDeadline = ( Math.abs(Number(new Date(this.todo.deadline)) - Date.now()) / (1000*3600*24)) <= 2
    
    }
  }

  todoToggleFun(id : string){
     this.todoToggle.emit(id);
  }

  todoDeleteFun(id : string){
     this.todoDelete.emit(id); 
  }

  // here we are checking if any field is empty or not and we only emit our function if user change something 
  todoEditFun(){
    if(this.editTodo){
      if(this.todoDesc==="" || this.todoName===""){
         alert("all fields are mandatory");
         return;
      }
       const editedTodo = {...this.todo, name: this.todoName, desc: this.todoDesc};
       
       if(this.todo && this.todoDesc!==this.todo.desc || this.todo && this.todoName!==this.todo.name){
         this.todoEdit.emit(editedTodo);
       }
    }
    
    this.editTodo = !this.editTodo;
  }

}

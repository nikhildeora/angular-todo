import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './MyComponent/home/home.component';
import { AllTodosComponent } from './MyComponent/all-todos/all-todos.component';
import { AddTodosComponent } from './MyComponent/add-todos/add-todos.component';
import { TodoDetailComponent } from './MyComponent/todo-detail/todo-detail.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"all-todo",component:AllTodosComponent},
  {path:"add-todo",component:AddTodosComponent},
  {path:"single-todo/:todoId",component:TodoDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

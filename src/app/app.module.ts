import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './MyComponent/home/home.component';
import { AllTodosComponent } from './MyComponent/all-todos/all-todos.component';
import { AddTodosComponent } from './MyComponent/add-todos/add-todos.component';
import { TodoItemComponent } from './MyComponent/todo-item/todo-item.component';
import { TodoDetailComponent } from './MyComponent/todo-detail/todo-detail.component';
import { CapitalizePipe } from './capitalize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllTodosComponent,
    AddTodosComponent,
    TodoItemComponent,
    TodoDetailComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

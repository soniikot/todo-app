import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Guid} from 'guid-typescript';
import {Todo} from "../models/todo.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
todoList: Todo []  =[]

onSubmit  (form:NgForm){
  const todo = new Todo (Guid.create(),   form.value.title,   false);
  this.todoList.push(todo);
  form.resetForm();
}

onComplete (id:Guid){
  const todo = this.todoList.find(item=>item.id ===id);
  todo ? todo.isDone = true : console.error("Something wrong") ;
}

onDelete(id: Guid) {
  const index = this.todoList.findIndex(item => item.id === id);
  if (index > -1) {
    this.todoList.splice(index, 1);
  }
}
}

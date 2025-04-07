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
  todoList: Todo[] = [
    { id: Guid.create(), title: 'Learn Angular', isDone: false },
    { id: Guid.create(), title: 'Build a To-Do App', isDone: true },
    { id: Guid.create(), title: 'Profit!', isDone: false }
  ];

onSubmit  (form:NgForm){
  const todo = new Todo (Guid.create(),   form.value.title,   false);
  this.todoList.push(todo);
  form.resetForm();
}

toggleComplete(id: Guid) {
  this.todoList = this.todoList.map(todo => {
    if (todo.id === id) {
      return { ...todo, isDone: !todo.isDone };
    }
    return todo;
  });
}

onDelete(id: Guid) {
  const index = this.todoList.findIndex(item => item.id === id);
  if (index > -1) {
    this.todoList.splice(index, 1);
  }
}
}

import { Component, OnInit } from '@angular/core';

import { Store } from '@ngxs/store';
import { Todo } from '../models/todos.model';
import { AddTodo, DeleteTodo, EditTodo } from '../actions/todo.action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  todos$: Observable<Todo>;

  constructor(private store: Store) {
    console.log('Constructor being called');
  }

  ngOnInit() {
    this.addToDo();
    this.getToDos();
    this.editToDo();
    //this.deleteToDo();
  }

  getToDos(): void {
    this.todos$ = this.store.select(state => state.todostate.todos);
  }

  addToDo() {
    this.store.dispatch(new AddTodo({ name: 'eating', description: 'I should eat' }));
  }

  editToDo() {
    this.store.dispatch(new EditTodo({ name: 'eating', description: 'I just eat' }));
  }

  deleteToDo() {
    this.store.dispatch(new DeleteTodo({ name: 'eating', description: 'I should eat' }));
  }
}

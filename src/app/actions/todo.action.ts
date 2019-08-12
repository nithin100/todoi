import { Todo } from '../models/todos.model';

export class GetTodos {
    static readonly type = '[Todo] Get All'
}

export class AddTodo {
    static readonly type = '[Todo] Add Todo'
    constructor(public toDoToBeAdded: Todo) { }
}

export class DeleteTodo {
    static readonly type = '[Todo] Delete Todo'
    constructor(public toDoToBeDeleted: Todo) { }
}

export class EditTodo {
    static readonly type = '[Todo] Edit Todo'
    constructor(public toDoToBeEdited: Todo) { }
}
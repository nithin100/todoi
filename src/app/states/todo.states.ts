import { Todo } from '../models/todos.model';
import { State, Selector, Action, StateContext } from '@ngxs/store';
import { patch, updateItem } from '@ngxs/store/operators';
import { AddTodo, DeleteTodo, EditTodo } from '../actions/todo.action';

export class TodosStateModel {
    todos: Todo[];
}

@State<TodosStateModel>({
    name: 'todostate',
    defaults: {
        todos: [{ name: 'sleep', description: 'I should sleep' }]
    }
})

export class TodosState {

    @Selector()
    static getTodos(ctx: TodosStateModel) {
        return ctx.todos;
    }

    @Action(AddTodo)
    addANewTodo({ patchState, getState }: StateContext<TodosStateModel>, { toDoToBeAdded }: AddTodo) {
        const state = getState();
        patchState({
            todos: [...state.todos,
                toDoToBeAdded]
        });
    };

    @Action(DeleteTodo)
    deleteExistingToDo({ patchState, getState }: StateContext<TodosStateModel>, { toDoToBeDeleted }: DeleteTodo) {
        const state = getState();
        patchState({
            todos: state.todos.filter(todo => todo.name != toDoToBeDeleted.name)
        });
    };

    @Action(EditTodo)
    editTodoAtIndexI({ setState }: StateContext<TodosStateModel>, { toDoToBeEdited }: EditTodo) {
        setState(patch({
            todos: updateItem<Todo>((todo) => todo.name === toDoToBeEdited.name, toDoToBeEdited)
        }));
    };

}
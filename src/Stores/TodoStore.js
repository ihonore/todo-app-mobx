import { action, makeObservable, observable } from 'mobx';

class TodoStore {
  todos = [];

  constructor() {
    makeObservable(this, {
      todos: observable,
      addTodo: action,
      removeTodo: action,
      markAsDone: action,
    });
  }
  addTodo(title) {
    let item = {
      id: Math.random().toFixed(2),
      title,
      isDone: false,
    };
    this.todos.push(item);
  }
  removeTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
  markAsDone(id) {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
  }
}

export default new TodoStore();

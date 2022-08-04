import { observer } from 'mobx-react';
import React from 'react';
import TodoStore from '../Stores/TodoStore';

const TodoList = observer(() => {
  const handleMarkAsRead = (id) => {
    TodoStore.markAsDone(id);
  };
  return (
    <div>
      <h3>Our Todos</h3>
      <ul>
        {TodoStore.todos.map((todo) => (
          <div className={todo.isDone ? 'todo-wrapper done' : 'todo-wrapper'}>
            <li className="todo-list" key={todo.id}>
              {todo.title}
            </li>
            <div
              className="actions"
              // onClick={() => console.log('actions clicked')}
            >
              <span className="mr" onClick={() => handleMarkAsRead(todo.id)}>
                MR
              </span>
              <span
                className="delete"
                onClick={() => TodoStore.removeTodo(todo.id)}
              >
                X
              </span>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
});

export default TodoList;

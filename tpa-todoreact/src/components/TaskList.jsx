import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editTodo, deleteTodo, filterTodo } from '../redux/actions';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  const filter = useSelector(state => state.filter);

  const handleEdit = (id, updatedTodo) => {
    dispatch(editTodo(id, updatedTodo));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleFilter = (e) => {
    dispatch(filterTodo(e.target.value));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'ACTIVE') {
      return !todo.completed;
    } else if (filter === 'COMPLETED') {
      return todo.completed;
    }
    return true;
  });

  return (
    <div>
      <label>
        Show:
        <select value={filter} onChange={handleFilter}>
          <option value="ALL">All</option>
          <option value="ACTIVE">Active</option>
          <option value="COMPLETED">Completed</option>
        </select>
      </label>
    <ul>
      {filteredTodos.map(todo => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleEdit(todo.id, { ...todo, completed: !todo.completed })}
          />
          {todo.title}
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
    </div>
  );
};

export default TodoList;

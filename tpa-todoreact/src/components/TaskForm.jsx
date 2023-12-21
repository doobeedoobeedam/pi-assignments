import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTodo, editTodo } from '../redux/actions';

const TodoForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');

  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      title,
      completed: false
    };
    dispatch(createTodo(newTodo));
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={handleInputChange} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
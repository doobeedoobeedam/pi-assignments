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
    <form onSubmit={handleSubmit} className="input">
      <input type="text" value={title} onChange={handleInputChange} id="input" />
      <button id="btn" type="submit">+</button>
    </form>
  );
};

export default TodoForm;
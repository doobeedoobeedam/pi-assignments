import React from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './index.css'

const App = () => {
  return (
    <div className="frame">
      <div className="container">
        <h1>📝 Todo List</h1>
        <div className="add-list">
          <TaskForm />
        </div>
        <TaskList />  
      </div>
    </div>
  );
};

export default App;
export const CREATE_TODO = 'CREATE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const FILTER_TODO = 'FILTER_TODO';


export const createTodo = (todo) => {
  return {
    type: CREATE_TODO,
    payload: todo
  };
};

export const editTodo = (todoId, updatedTodo) => {
  return {
    type: EDIT_TODO,
    payload: { todoId, updatedTodo }
  };
};

export const deleteTodo = (todoId) => {
  return {
    type: DELETE_TODO,
    payload: todoId
  };
};

export const filterTodo = (filter) => {
  return {
    type: FILTER_TODO,
    payload: filter
  };
};

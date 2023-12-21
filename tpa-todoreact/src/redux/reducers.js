import { CREATE_TODO, EDIT_TODO, DELETE_TODO, FILTER_TODO } from './actions';

const initialState = {
  todos: [],
  filter: 'ALL'
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case EDIT_TODO:
      const updatedTodos = state.todos.map(todo =>
        todo.id === action.payload.todoId ? action.payload.updatedTodo : todo
      );
      return {
        ...state,
        todos: updatedTodos
      };
    case DELETE_TODO:
      const filteredTodos = state.todos.filter(todo => todo.id !== action.payload);
      return {
        ...state,
        todos: filteredTodos
      };
    case FILTER_TODO:
      return {
        ...state,
        filter: action.payload
      };
    default:
      return state;
  }
};

export default todoReducer;



// Action value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const DELETE_TODO_DONE = "DELETE_TODO_DONE";
const DONE_TODO = "DONE_TODO";
const WORKING_TODO = "WORKING_TODO";

// Action Creator
export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};
export const deleteTodo = (payload) => {
  return { type: DELETE_TODO, payload };
};
export const deleteTodoDone = (payload) => {
  return { type: DELETE_TODO_DONE, payload };
};
export const doneTodo = (payload) => {
  return { type: DONE_TODO, payload };
};
export const workingTodo = (payload) => {
  return { type: WORKING_TODO, payload };
};

// initial State
const initialState = {
  todos: [],
  doneTodos: []
};

// Reducer
const todos = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };
        case DELETE_TODO :
            const newTodos = state.todos.filter((todo) => todo.id !== action.payload.id)
            return {
                ...state, todos: newTodos
            }
        case DELETE_TODO_DONE :
            const newTodosDone = state.doneTodos.filter((todo) => todo.id !== action.payload.id)
            return {
                ...state, doneTodos: newTodosDone
            }
        case DONE_TODO :
            const deleteDone = state.todos.filter((todo) => todo.id !== action.payload.id)
            const editTodo = state.todos.filter((todo) => todo.id === action.payload.id)
            console.log(editTodo)
            return {
                ...state,
                todos: deleteDone,
                doneTodos: [...state.doneTodos, editTodo[0]],
            };
        case WORKING_TODO :
            const cancelDone = state.doneTodos.filter((todo) => todo.id !== action.payload.id)
            const workTodo = state.doneTodos.filter((todo) => todo.id === action.payload.id)
            console.log(workTodo)
            return {
                ...state,
                todos: [...state.todos, workTodo[0]],
                doneTodos: cancelDone,
            };
        default:
            return state;
    }
};

export default todos;

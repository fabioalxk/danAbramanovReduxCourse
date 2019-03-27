import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import Footer from './components/Footer';
import AddTodo from './components/AddTodo';
import VisibleTodoList from './components/TodoList';
import store from './store';

const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
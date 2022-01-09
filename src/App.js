import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Container } from 'reactstrap';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoContextProvider from './contexts/TodoContext';

function App() {
  
  return (
    <div className="App">
      <Container className="text-center">
        <h1>Todoリスト</h1>
        <TodoContextProvider>
        <TodoForm />
        <TodoList />
        </TodoContextProvider>
      </Container>
    </div>
  );
}

export default App;

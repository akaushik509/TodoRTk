
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import store from './store';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

function App() {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <div className="App">
          <AddTodo />
          <TodoList />
        </div>
      </Provider>
    </ChakraProvider> 
  );
}

export default App;

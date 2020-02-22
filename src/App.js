import React from 'react';
import './App.css';
import TemperatureCard from './components/temperature-card';
import TodoList from './components/todo-list';

function App() {
  return (
    <div className="App-header">
      <TemperatureCard />
      <TodoList />
    </div>
  );
}

export default App;

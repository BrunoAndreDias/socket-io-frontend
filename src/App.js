import React from 'react';
import './App.css';
import TemperatureCard from './components/temperature-card';
import TodoList from './components/todo-list';
import { SocketCommunication } from './service/socket-communication';


function App() {
  const socket = SocketCommunication();
  return (
    <div className="App-header">
      <TemperatureCard socket={socket} />
      <TodoList socket={socket} />
    </div>
  );
}

export default App;

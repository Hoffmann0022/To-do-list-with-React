import { useState, useEffect } from "react";
import { TaskList } from "./components/TaskList";
import { NoTask } from "./components/noTask";
import './css/App.css'
import { PopUp } from "./components/Pop-up";
import { TodoProvider } from './contexts/TodoContext';

function App() {

  return (
    <TodoProvider>
      <TaskList/>
      <PopUp />
    </TodoProvider>
  );
}

export default App;

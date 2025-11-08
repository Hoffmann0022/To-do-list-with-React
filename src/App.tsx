import { useState, useEffect } from "react";
import { Task } from "./components/Task";
import { Button } from './components/Button';
import './css/App.css'

function App() {
  return (
    <>
      <Task />
      <Button />
    </>
  );
}

export default App;

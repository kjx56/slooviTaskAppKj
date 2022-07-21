import React,  {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import AddTask from './components/addTask';
import TaskInputs from './components/taskInputs';

function App() {
    
  return (
    <main class="border ">
       <AddTask></AddTask>
       <TaskInputs></TaskInputs>
        
     
      
    </main>
    
  );
  
}

export default App;
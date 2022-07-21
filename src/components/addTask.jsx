import React, {useState} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import ReactTooltip from 'react-tooltip';


const addTask = () => {
    
  return (
    
      
       <div className="App" class="border" id="AppName">
        <label>Tasks</label><button class="border border-top-0 border-right-0 border-bottom-0 " data-tip="Add Task"  >+</button>

         

<ReactTooltip place="top" type="dark" effect="solid"/>

         
      </div>
     
    
)
}
export default addTask
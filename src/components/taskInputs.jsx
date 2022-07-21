import React, { useState } from 'react';
import '../App.css';
import { useDispatch } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css';
import saveTodo from '../features/toDoSlice' ;

const taskInputs = () => {
  const [Description, setDescription] = useState("");
  const [Date, setDate] = useState("");
  const [Time, setTime] = useState("");
  const [User, setUser] = useState("");
  const dispatch = useDispatch;
  const addTodo = () => {
  

    dispatch(saveTodo({
      Description: Description
    }))

    
  }
  return (
    <div>
      <label>Task Description</label>
      <input type="text" id="typeText" class="form-control" value={Description} onChange={e => setDescription(e.target.value)} />

      <div class="row">
        <div class="column">
          <label>Date</label>
          <input type="date" id="typeText2" />


        </div>


        <div class="column">
          <label id="label2">Time</label>
          <div class="row">
            <input type="Time" id="typeText3" />

          </div>
        </div>
        <label>Assign User</label>
      </div>

      <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
        <option selected>Prem Kumar</option>
        <option value="1"></option>
        <option value="2"></option>
      </select>

      <button type="button" class="btn btn-success" id="save" onClick={addTodo}>Save</button>
      <button type="button" class="btn btn-light" id="save">Cancel</button>

      <button type="button" class="btn btn-danger" id="cancel" onClick={() => { alert('Are you sure you want to delete this task?'); }} ></button>




    </div>

















  )
}
export default taskInputs
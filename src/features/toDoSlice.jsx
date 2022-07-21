import {createSlice } from '@reduxjs/toolkit';



const toDoSlice = createSlice({
 name: 'todos',
  initialState: [{
    
    Description: "todo"
  }],
  reducers: {
 saveTodo: (state, action) => {
  const newTodo = {
    
    Description: action.payload.title
  };
  state.push(newTodo);
    
 }
    
}
  
});

export const { saveTodo} = toDoSlice.actions
export default  toDoSlice.reducer

import React, { useState } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Todo from './Todo'
import './App.css';

function App() {

  const [todos, setTodos] = useState(['Take dog for a walk', 'You know what to do']);
  const [input, setInput] = useState('');
  console.log(input);
  const addTodo = (event) => {
    //this will fire off when we click the button
    event.preventDefault(); //will stop the default event (reloading the page)
    console.log('Im working');
    // will spread the existing todos array in new array and add the input to that new array and assign that new array as the current todos
    setTodos([...todos, input]); 
    // will set the input to '', clearing the input area
    setInput('');
  }
  
  return (
    <div className="App">
      <h1>Hello Mohamed Rami 🚀🚀</h1>

      <form>
        <FormControl>
          <InputLabel>✅ Write a Todo:</InputLabel>
          <Input value={input} onChange= {event => setInput(event.target.value)} />
        </FormControl>
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
          add todo
        </Button>
        {/* <button type="submit" onClick={addTodo}>add todo</button> */}
      </form>

      <ul>
        {todos.map((todo) => (
          <Todo text={todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;

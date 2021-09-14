import React, { useState } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from './components/Counter';

function App() {

  const [likes, setLikes] = useState(0)
  const [value, setValue] = useState('текст в инпуте')

  function increment() {

    setLikes(likes + 1)
  }

  function decrement() {

    setLikes(likes - 1)
  }
  return (
    <div className="App">
      <h1>{likes}</h1>
      <button onClick={ increment }>Increment</button>
      <button onClick={ decrement }>Decrement</button>

      <h1>{value}</h1>
      <input  type="text" 
              value={value}
              onChange={event => setValue(event.target.value)}
      />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <hr />
      <ClassCounter/>
    </div>
  );
}

export default App;

import React, { useState } from 'react';

import './App.css';

function App() {

  const [name, setName]=useState([])

  const increment =  () =>{
     let x = document.getElementById('text').value
     setName([...name,x])
    }

  const remove = (e) =>{
    const arr = name.filter(item => item !== name[parseInt(e.target.name)] )
    setName(arr)
    }

  return (
    <div className="App">
      <textarea id="text"></textarea><br />
      <button onClick={increment}>Click Me</button>
      <ul>{name.map((item,i)=>{
          return <div key={i}>
                    <p>{item}</p>
                    <button name={i} onClick={remove}>Remove</button>
                 </div>
           })}
      </ul>
    </div>
  );
}

export default App;

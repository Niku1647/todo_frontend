import React, { useState } from 'react';

import './App.css';

function App() {
  
  const [name, setName]=useState([])
  const increment =  () =>{
    
    let x = document.getElementById('i').value
    
    setName([...name,x])
    
    

  }
  return (
    <div className="App">
      <textarea id="i"></textarea>
     <button onClick={increment}>Click Me</button>
  <ul>{name.map((item,i)=>{
    return <li>{item}</li>
  })}
       </ul>
        
      
       
    </div>
  );
}

export default App;

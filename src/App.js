import React, { useState } from "react";

import "./App.css";
import html2canvas from "html2canvas"
import  jsPDF from "jspdf"

function App() {
  const [todo, setTodo] = useState([]);

  const addElement = () => {
    let inputValue = document.getElementById("text").value;
    setTodo([...todo, inputValue]);
  };

  const remove = (e) => {
    const arr = todo.filter((item) => item !== todo[parseInt(e.target.name)]);
    setTodo(arr);
  };

  const printDocument=()=> {
    const input = document.getElementById('list');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0);
        // pdf.output('dataurlnewwindow');
        pdf.save("download.pdf");
      })
    ;
  }
  const update =(e)=>{
    console.log(e.target.name)
   const arr1 = todo.map(() =>
    todo[parseInt(e.target.name)] = "SP"
    
   )
   setTodo(arr1)

  }

  return (
    <div className="App" >
      <input type="text" id="text" />
      <br />
      <button onClick={addElement}>Click Me</button>
      <ul id="list">
        {todo.map((item, i) => {
          return (
            <div key={i} className="todo_class">
              <p>
                {i + 1}. {item}
              </p>
              <button name={i} onClick={remove}>
                Remove
              </button>
              <button name={i} onClick={update}>update</button>

            </div>
          );
        })}
      </ul>
      <button onClick={printDocument}>Print</button>
    </div>
  );
}

export default App;

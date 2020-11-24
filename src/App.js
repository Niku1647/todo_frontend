import React, { useState } from "react";
import cancelLogo from "./cancel.png";
import editLogo from "./edit.png";
import upLogo from "./up.png";
import "./App.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import AddCircleOutline from "@material-ui/icons/AddCircleOutlineOutlined";
import CheckBox from "@material-ui/icons/CheckBox";
import Close from "@material-ui/icons/Close";
import Print from "@material-ui/icons/Print";

function App() {
  const [todo, setTodo] = useState([]);
  const [display, setDisplay] = useState(true);
  const [count, setCount] = useState(0);

  const addElement = () => {
    let inputValue = document.getElementById("text").value;
    if (inputValue.length > 2) {
      setTodo([...todo, inputValue]);
      document.getElementById("text").value = "";
    }
  };

  const remove = (e) => {
    const arr = todo.filter((item) => item !== todo[parseInt(e.target.name)]);
    setTodo(arr);
  };

  const printDocument = () => {
    const input = document.getElementById("list");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      // pdf.output('dataurlnewwindow');
      pdf.save("download.pdf");
    });
  };
  const update = () => {
    let arr1 = [...todo];
    let newval = document.getElementById("text1").value;
    if (newval.length > 2) {
      arr1[count] = newval;
      setTodo(arr1);
      document.getElementById("text1").value = "";
    }
    setDisplay(true);
  };
  const edit = (e) => {
    setDisplay(false);
    let c = parseInt(e.target.name);
    setCount(c);
  };
  const handleDiv = (e) => {
    document.getElementById(parseInt(e.target.name)).style.textDecoration =
      "line-through";
  };
  const priority = (e) => {
    let arr2 = [...todo];
    let k = parseInt(e.target.name);
    let new1 = arr2[k];
    arr2 = todo.filter((item) => item !== todo[parseInt(e.target.name)]);

    arr2 = [new1, ...arr2];

    setTodo(arr2);
  };
  const handleClose = () => {
    setDisplay(true);
  };

  return (
    <div className="App">
      <Container maxWidth="sm"  id="contanier">
        <h1>What is your plan for today ? </h1>
        <div
          className="update_class"
          style={{ display: display ? "none" : "block" }}
        >
          <TextField
            id="text1"
            label="Update your plan"
            style={{ width: "400px"}}
            
          />
          <CheckBox
            style={{ "fontSize": "50px", fill: "white" }}
            onClick={update}
            className ="edit"
          />
          <Close
            style={{ "fontSize": "50px", fill: "white" }}
            onClick={handleClose}
            className ="edit"
          />
        </div>
        <div style={{ display: display ? "block" : "none" }}>
          <TextField
            id="text"
            label="Enter your plan"
            style={{ width: "400px",marginLeft:"50px" }}
          />

          <AddCircleOutline
            style={{ "fontSize": "50px", fill: "white" }}
            onClick={addElement}
            className ="edit"
          />

          <ul id="list">
            {todo.map((item, i) => {
              return (
                <div key={i} className="todo_class">
                  <img
                    name={i}
                    onClick={remove}
                    src={cancelLogo}
                    alt="Remove"
                    style={{ height: "20px", margin: "10px" }}
                  />

                  <div>
              {" "}{i + 1})
                    <button
                      id={i}
                      name={i}
                      onClick={handleDiv}
                      style={{ width: "200px" }}
                    >
                      {item}
                    </button>
                  </div>

                  <img
                    name={i}
                    onClick={edit}
                    src={editLogo}
                    alt="Edit"
                    style={{ height: "20px", margin:"10px" }}
                  />

                  <img
                    name={i}
                    onClick={priority}
                    src={upLogo}
                    alt="Edit"
                    style={{ height: "20px", margin:"10px" }}
                  />
                </div>
              );
            })}
          </ul>
        </div>

        <Print
          onClick={printDocument}
          style={{
            display: display ? "block" : "none",
            height: "20px",
            margin: "20px",
            fill: "white"
            
            
          }}
          className ="edit"
        />
      </Container>
    </div>
  );
}

export default App;

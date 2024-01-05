import "./App.css";
import { useState } from "react";

const messages = ["Learn React", "Apply Job", "Get Income"];
function App() {
  const [step, setState] = useState(1);
  const [isOpen, setisOpen] = useState(true);
  console.log(setisOpen);

  function handlePrevious() {
    if (step > 1) {
      setState((step) => step - 1);
    }
  }
  function handleNext() {
    if (step < 3) {
      setState((step) => step + 1);
    }
  }
  function openCLose() {
    setisOpen(!isOpen);
  }
  return (
    <div>
      {
        <button className={`${isOpen ? "open" : "close"}`} onClick={openCLose}>
          menu
        </button>
      }
      {/* {isOpen ? (
        <button onClick={openCLose}>Open</button>
      ) : (
        <button onClick={openCLose}>Close</button>
      )} */}
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <p className="message">
            Step{step} : {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              {/* comment start
      handlePrevious is passing function value ,it not function call 
      comment end
    */}
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              {/* comment start
    handleNext is passing function value ,it not function call 
    comment end
  */}
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

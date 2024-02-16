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
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>

          <Message step={step}>{messages[step - 1]}</Message>

          <div className="buttons">
            {/* comment start
               handlePrevious is passing function value ,it not function call 
               comment end
             */}
            <Buttons
              bgColor="#7950f2"
              textColor="#fff"
              onClick={handlePrevious}
            >
              <span>
                <em>👈</em>Previous
              </span>
            </Buttons>
            {/* comment start
            handleNext is passing function value ,it not function call 
            comment end
            */}
            <Buttons bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              <span>
                Next<em>👉</em>
              </span>
            </Buttons>
          </div>
        </div>
      )}
    </div>
  );
}

function Buttons({ bgColor, textColor, onClick, children }) {
  return (
    <div>
      <button
        style={{ backgroundColor: bgColor, color: textColor }}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}

function Message({ step, children }) {
  return (
    <div className="message">
      <p>{`Step ${step}`}</p>
      {messages[step - 1]}
    </div>
  );
}

export default App;

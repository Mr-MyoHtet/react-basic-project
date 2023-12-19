import logo from "./logo.svg";
import "./App.css";

const messages = ["Learn React", "Apply Job", "Get Income"];
function App() {
  const step = 1;
  function handlePrevious() {
    alert("Previous");
  }
  function handleNext() {
    alert("Next");
  }
  return (
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
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";

function App() {
  const [goal, setGoal] = useState("");
  const [submittedGoal, setSubmittedGoal] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    const goalNumber = parseInt(goal, 10);
    if (isNaN(goalNumber) || goalNumber < 0 || goalNumber > 100) {
      setMessage("bruh read the instructions, i said between 0 and 100");
      setSubmittedGoal("");
    } else if (goalNumber > 50) {
      setMessage("lol get trolled its 100 - ur number");
      setSubmittedGoal(100 - goal);
    } else {
      setMessage("ty for being nice");
      setSubmittedGoal(goal);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={"./image.png"} className="App-logo" alt="logo" />
        <p>
          jonathan didn’t even come close to finishing 75 problems by the end of
          the weekend
        </p>
        <h2>Enter a new number between 0 and 100 plz</h2>
        <input
          type="text"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          className="input-goal"
          placeholder="Enter new goal"
        />
        <button onClick={handleSubmit} className="submit-button">
          Submit
        </button>
        {message && <p className="message">{message}</p>}
        {submittedGoal && (
          <p className="submitted-goal">
            k im doing {submittedGoal} lc problem(s) then
          </p>
        )}
      </header>
    </div>
  );
}

export default App;

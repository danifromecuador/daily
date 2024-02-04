import { useState } from "react";

export const DailyGoals = () => {
  const [mainGoalsList, setMainGoalsList] = useState([]);
  const [secondaryGoalsList, setSecondaryGoalsList] = useState([]);
  const [input, setInput] = useState('');
  const [secondayGoalInput, setSecondaryGoalInput] = useState('');

  return (
    <div className="daily-goals">
      <h1>Daily Goals</h1>
      <div className="main-goals">
        <h2>Dead or alive goals:</h2>
        <ul>
          {mainGoalsList.map((goal, index) => {
            return <li key={index}>{goal}</li>
          })}
        </ul>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={() => {
          setMainGoalsList([...mainGoalsList, input]);
          setInput('');
        }} >Add</button>
      </div>
    </div>
  );
}
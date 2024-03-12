import { useState, useEffect } from "react";

export const DailyGoals = () => {
  const [input, setInput] = useState("");
  const [goals, setGoals] = useState(JSON.parse(localStorage.getItem("goals")) || []);
  const [editedGoal, setEditedGoal] = useState(null);

  useEffect(() => {
    localStorage.setItem("goals", JSON.stringify(goals));
  }, [goals]);

  const manageAddGoalBtn = () => {
    if (input) {
      setGoals([...goals, { index: goals.length, status: "pending", text: input }]);
      setInput("");
    }
  };

  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      manageAddGoalBtn();
    }
  };

  const handleStatusCheckBox = (i) => {
    if (goals[i].status === "pending") {
      goals[i].status = "done";
      setGoals([...goals]);
    } else {
      goals[i].status = "pending";
      setGoals([...goals]);
    }
  };

  const handleDeleteGoalBtn = (i) => {
    goals.splice(i, 1);
    for (let j = 0; j < goals.length; j++) {
      goals[j].index = j;
    }
    setGoals([...goals]);
  };

  const handleEditGoal = (i) => {
    setEditedGoal(i);
  };

  const handleEditedGoalChange = (e) => {
    goals[editedGoal].text = e.target.value;
    setGoals([...goals]);
  };

  const handleEditGoalKeyDown = (e) => {
    if (e.key === "Enter") {
      setEditedGoal(null);
    }
  };

  const manageDeleteAllGoalsBtn = () => setGoals([]);

  return (
    <div className="daily-goals">
      <h1>Daily Goals</h1>
      <ul>
        {goals.map((e, i) => (
          <div key={i}>
            <li className="li-goal">
              <input
                type="checkbox"
                className="checkbox"
                checked={goals[i].status === "pending" ? false : true}
                onChange={() => handleStatusCheckBox(i)}
              />
              {editedGoal === i ? (
                <input
                  type="text"
                  value={goals[i].text}
                  className={"input-text" + " " + goals[i].status}
                  onChange={handleEditedGoalChange}
                  onKeyDown={handleEditGoalKeyDown}
                  autoFocus
                />
              ) : (
                <span onClick={() => handleEditGoal(i)}>{e.text}</span>
              )}
              <input
                className="delete-goal-btn"
                type="button"
                value="X"
                onClick={() => handleDeleteGoalBtn(i)}
              />
            </li>
          </div>
        ))}
      </ul>
      <div className="input-and-add-button">
        <input
          type="text"
          className="goal-input"
          placeholder="add a new goal"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleEnterKey}
        />
        <button className="add-btn" onClick={manageAddGoalBtn}>
          Add
        </button>
      </div>
      <div className="delete-btn-container">
        <button className="delete-btn" onClick={manageDeleteAllGoalsBtn}>
          Delete All Goals
        </button>
      </div>
    </div>
  );
};

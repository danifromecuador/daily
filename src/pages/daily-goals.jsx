import { useState, useEffect } from "react";

export const DailyGoals = () => {
  const [input, setInput] = useState("")
  const [goals, setGoals] = useState(JSON.parse(localStorage.getItem('goals')) || [])

  useEffect(() => {  // update (or delete) localStorage whenever goals list changes
    localStorage.setItem('goals', JSON.stringify(goals))
  }, [goals])

  const manageAddGoalBtn = () => {
    if (input) {
      setGoals([...goals, { index: goals.length, status: 'pending', text: input }])
      setInput("")
    }
  }

  const handleEnterKey = (e) => {
    if (e.key == 'Enter') {
      manageAddGoalBtn()
    }
  }

  const handleStatusCheckBox = (i) => {
    // alert(i)
    if (goals[i].status == 'pending') {
      goals[i].status = 'done'
      setGoals([...goals])
    }
    else {
      goals[i].status = 'pending'
      setGoals([...goals])
    }
  }

  const manageDeleteAllGoalsBtn = () => setGoals([])

  return <div className="daily-goals">
    <h1>Daily Goals</h1>
    <ul>{goals.map((e, i) => <div key={i}>
      <input
        type="checkbox"
        checked={goals[i].status == 'pending' ? false : true}
        name=""
        id=""
        onChange={() => handleStatusCheckBox(i)}
      />
      <span className= {goals[i].status} >
        {e.text}
      </span>
    </div>)}</ul>
    <input
      type="text"
      value={input}
      onChange={(e) => { setInput(e.target.value) }}
      onKeyDown={handleEnterKey}
    />
    <button onClick={manageAddGoalBtn} >Add</button>
    <div><button onClick={manageDeleteAllGoalsBtn} >Delete All Goals</button></div>
  </div>
}

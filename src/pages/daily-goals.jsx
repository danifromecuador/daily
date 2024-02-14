import { useState, useEffect } from "react";

export const DailyGoals = () => {
  const [input, setInput] = useState("")
  const [goals, setGoals] = useState(JSON.parse(localStorage.getItem('goals')) || [])

  useEffect(() => {  // update (or delete) localStorage whenever goals list changes
    localStorage.setItem('goals', JSON.stringify(goals))
  }, [goals])

  const manageAddGoalBtn = () => {
    if (input) {
      setGoals([...goals, input])
      setInput("")
    }
  }

  const handleEnterKey = (e) => {
    if (e.key == 'Enter') {
      manageAddGoalBtn()
    }
  }

  const manageDeleteAllGoalsBtn = () => setGoals([])

  return <>
    <h1>Daily Goals</h1>
    <ul>{goals.map((e, i) => <div key={i}> <input type="checkbox" name="" id="" /> {e}</div>)}</ul>
    <input
      type="text"
      value={input} 
      onChange={(e) => { setInput(e.target.value) }}
      onKeyDown={handleEnterKey}
    />
    <button onClick={manageAddGoalBtn} >Add</button>
    <div><button onClick={manageDeleteAllGoalsBtn} >Delete All Goals</button></div>
  </>
}

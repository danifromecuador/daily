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

  const manageDeleteAllGoalsBtn = () => setGoals([])

  return <>
    <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
    <button onClick={manageAddGoalBtn} >Add</button>
    <ul>{goals.map((e, i) => <div key={i}>{e}</div>)}</ul>
    <button onClick={manageDeleteAllGoalsBtn} >Delete All Goals</button>
  </>
}

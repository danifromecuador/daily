import { useState, useEffect } from "react";

export const DailyGoals = () => {
  const [input, setInput] = useState("")  
  const [goals, setGoals] = useState(JSON.parse(localStorage.getItem('goals')) || [])
  // console.log("goals are: " + goals[0]);
  useEffect(() => { console.log("input is: " + input) }, [input]);
  useEffect(() => { console.log("goals are: " + goals) }, [goals]);

  // update localStorage whenever goals list changes
  useEffect(()=>{
    localStorage.setItem('goals', JSON.stringify(goals))
  }, [goals])

  const manageAddGoalBtn = () => {
    if (input) {
      setGoals([...goals, input]);
      setInput('');
    }
  }

  return (<>
    <input
      type="text"
      value={input}
      onChange={(e) => { setInput(e.target.value) }}
    />
    <button onClick={manageAddGoalBtn} >Add</button>
  </>)



}
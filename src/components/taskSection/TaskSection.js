import React, { useState } from "react";
import "./TaskSection.css";
import { BsFillTrash3Fill } from "react-icons/bs";

export default function TaskSection() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const handleRemoveTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="taskSectionContainer">
      <div>
        <h1>i miss my room</h1>
        <p className="para">cherish the comfort of your room.</p>
      </div>
      <div className="inputBox">
        <input
          value={newTask}
          placeholder="Add a task..."
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="btn" onClick={handleAddTask}>
          Add
        </button>
      </div>
      <div className="taskList">
        {tasks.map((task, index) => (
          <div className="task" key={index}>
            <p>{task}</p>

            <BsFillTrash3Fill
              className="delBtn"
              onClick={() => handleRemoveTask(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

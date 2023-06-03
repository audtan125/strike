import { task } from "../../App";
import React from "react";

export default function AddButton({ Tasks }: { Tasks: {tasks: task[], setTasks: React.Dispatch<React.SetStateAction<task[]>>}}) {

  const [newTask, setNewTask] = React.useState('');

  function handleChange(event: any) {
    setNewTask(event.target.value);
  }

  const addTask = (event: any) => {
    event.preventDefault();
    setNewTask('');
    Tasks.setTasks([ ...Tasks.tasks, {name: newTask}]);
  }
  
  return (
    <>
      <form onSubmit={addTask}>
        <label>
          {/* New Task */}
          <input type="text" value={newTask} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
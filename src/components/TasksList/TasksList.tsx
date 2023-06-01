import React from "react";
import AddButton from '../AddButton/AddButton';

export interface task {
  name: string
}

export default function TasksList() {
  const [tasks, setTasks] = React.useState<task[]>([{name: 'test task'}]);

  return (
    <>
      <div>
        {tasks.map(task => <li>{task.name}</li>)}
      </div>
      <AddButton Tasks={{tasks, setTasks}}/>
    </>  
  );
}
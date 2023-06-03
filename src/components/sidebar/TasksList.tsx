import React from "react";
import AddButton from './AddButton';
import { task } from "../../App";
import { completedTask } from "../../App";

export default function TasksList(
  { props }: { 
    props: {
        tasks: task[], 
        setTasks: React.Dispatch<React.SetStateAction<task[]>>, 
        completedTasks: completedTask[],
        setCompletedTasks: React.Dispatch<React.SetStateAction<completedTask[]>>
      }
    }
) {

  function markCompleted(task: task) {
    props.setCompletedTasks( [...props.completedTasks,
      { title: task.name, date: new Date() }
    ]);
  }

  return (
    <>
      <div>
        {props.tasks.map(task => <button onClick={() => markCompleted(task)} style={{display: "block"}}>{task.name}</button>)}
      </div>
      <AddButton Tasks={props}/>
    </>  
  );
}
import { task } from "../TasksList/TasksList";

export default function AddButton({ Tasks }: { Tasks: {tasks: task[], setTasks: React.Dispatch<React.SetStateAction<task[]>>}}) {

  const addTask = () => {
    console.log('add task button pressed');
    Tasks.setTasks([ ...Tasks.tasks, {name: 'Task Added'}]);
  }
  

  return (
    <>
      <button onClick={addTask}>New Task</button>
    </>
  );
}
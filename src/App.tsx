import './App.css';
import React from 'react';
import TasksList from './components/sidebar/TasksList';
import style from './App.module.css';
import { MonthCalendar } from './components/calendar/MonthCalendar';

export interface task {
  name: string
}

export interface completedTask {
  title: string,
  date: Date,
}

function App() {
  const [tasks, setTasks] = React.useState<task[]>([{name: 'test task'}]);
  const [completedTasks, setCompletedTasks] = React.useState<completedTask[]>([{title: 'test completed task', date: new Date()}]);

  return (
    <>
      
      <div className={style.page}>
        <div className={style.calendar}>
          Calendar in the works
          <MonthCalendar CompletedTasks={{completedTasks, setCompletedTasks}}/>
        </div>
        <div className={style.sidebar}>
          <TasksList props={{tasks, setTasks, completedTasks, setCompletedTasks}}/>
        </div>
      </div>
      
    </>
  );
}

export default App;

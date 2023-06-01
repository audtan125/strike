import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddButton from './components/AddButton/AddButton';
import TasksList from './components/TasksList/TasksList';
import style from './App.module.css';

function App() {
  return (
    <>
      <div className={style.page}>
        <div className={style.calendar}>
          Calendar placeholder
        </div>
        <div className={style.sidebar}>
          <TasksList/>
        </div>
      </div>
      
    </>
  );
}

export default App;

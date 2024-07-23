import { useState } from 'react'
import { Header } from './components/header/header'
import { AddTask } from './components/input/input'
import { TasksList } from './components/list/list'

import './main.css'


export function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <>
      <Header />

      <div className='content'>

        <AddTask addTask={addTask}/>

        <div className='tasks'>
          <p>Tarefas Criadas <span>{tasks.length}</span></p>
          <p>Concluídas <span>{0}</span></p>
        </div>

        <div>
          <TasksList tasks={tasks}/>
        </div>
      </div>

    </>
  )
}
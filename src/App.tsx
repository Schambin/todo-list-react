import { useState } from 'react'
import { Header } from './components/header/header'
import { AddTask } from './components/input/input'
import { TasksList } from './components/list/list'

import './main.css'


export function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(updatedTasks);
  }

  return (
    <>
      <Header />

      <div className='content'>

        <AddTask addTask={addTask}/>

        <div className='tasks'>
          <p>Tarefas Criadas <span>{tasks.length}</span></p>
          <p>Concluídas <span>{0} de {tasks.length}</span></p>
        </div>

        <div>
          <TasksList 
            tasks={tasks} 
            deleteTask={deleteTask}
          />
        </div>
      </div>

    </>
  )
}
import { Header } from './components/header/header'
import { AddTask, createTask } from './components/input/input'
import { TasksList } from './components/list/list'
import './main.css'

export function App() {
  return (
    <>
      <Header />


      <div className='content'>

        <AddTask />

        <div className='tasks'>
          <p>Tarefas Criadas <span>{0}</span></p>
          <p>Concluídas <span>{0}</span></p>
        </div>

        <div>
          <TasksList />
        </div>
      </div>

    </>
  )
}
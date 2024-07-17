import { Header } from './components/header/header'
import { AddTaskInput } from './components/input/input'
import './main.css'


export function App() {
  return (
    <>
      <Header />

      <div className='content'>

        <AddTaskInput />
        
      </div>

    </>
  )
}
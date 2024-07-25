import { useState } from 'react';
import { Header } from './components/header/header';
import { AddTask } from './components/input/input';
import { TasksList } from './components/list/list';

import './main.css';

export interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function addTask(newTask: string) {
    const newTaskObject: Task = {
      id: Date.now(), // Utiliza a data atual como identificador único
      text: newTask,
      completed: false
    };
    setTasks([...tasks, newTaskObject]);
  }

  function deleteTask(id: number) {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  }

  function toggleTaskCompletion(id: number) {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  const completedTasks = tasks.filter(task => task.completed);

  return (
    <>
      <Header />

      <div className='content'>
        <AddTask addTask={addTask} />

        <div className='tasks'>
          <p>Tarefas Criadas <span>{tasks.length}</span></p>
          <p>Concluídas <span>{completedTasks.length} de {tasks.length}</span></p>
        </div>

        <div>
          <TasksList tasks={tasks} deleteTask={deleteTask} toggleTaskCompletion={toggleTaskCompletion} />
        </div>
      </div>
    </>
  );
}

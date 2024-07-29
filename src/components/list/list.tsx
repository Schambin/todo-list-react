import './list.css';
import { TaskItem } from '../taskItem/taskItem';
import { ClipboardText } from '@phosphor-icons/react';

interface Task {
    id: number;
    text: string;
    completed: boolean;
  }
  
  interface TasksListProps {
    tasks: Task[];
    deleteTask: (id: number) => void;
    toggleTaskCompletion: (id: number) => void;
  }

export function TasksList({ tasks, deleteTask, toggleTaskCompletion }: TasksListProps) {    
    return (
        <div className='tasksContainer'>
            {tasks.length === 0 ? (
                <div className='withoutTasksContainer'>
                    <ClipboardText size={56} />
                    <p className='noTasksDec'>Você ainda não tem tarefas cadastradas</p>
                    <p className='noTasksDec'>Crie tarefas e organize seus itens a fazer</p>
                </div>
            ) : (
                tasks.map(task => (
                    <TaskItem 
                        key={task.id} 
                        task={task} 
                        deleteTask={deleteTask} 
                        toggleTaskCompletion={toggleTaskCompletion} 
                    />
                ))
            )}
        </div>
    );
}

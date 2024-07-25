import './taskItem.css';
import { Trash } from '@phosphor-icons/react';
import { Task } from '../../App'

interface TaskItemProps {
    task: Task;
    deleteTask: (id: number) => void;
    toggleTaskCompletion: (id: number) => void;
}

export function TaskItem({ task, deleteTask, toggleTaskCompletion }: TaskItemProps ){
    return (
        <div className="taskItem">
            <input 
                type="checkbox" 
                checked={task.completed}
                onChange={() => toggleTaskCompletion(task.id)} 
            />
            <label style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.text}
            </label>
            <button className="deleteButton" onClick={() => deleteTask(task.id)}>
                <Trash size={20} />
            </button>
        </div>
    );
}

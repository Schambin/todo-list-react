import './taskItem.css';
import { Trash } from '@phosphor-icons/react';

export function TaskItem({ task, deleteTask, toggleTaskCompletion }) {
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

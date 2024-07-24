import './taskItem.css';

import { Trash } from '@phosphor-icons/react';

export function TaskItem({ task, index, deleteTask }) {
    return (
        <div className="taskItem">
            <input 
                type="checkbox" 
            />
            <label>{task}</label>
            <button className="deleteButton">
                <Trash 
                    size={20} 
                    onClick={() => 
                    deleteTask(index)}
                />
            </button>
        </div>
    );
}
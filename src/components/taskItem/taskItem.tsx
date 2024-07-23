import { Trash } from '@phosphor-icons/react';

import './taskItem.css';


export function TaskItem({ task }) {
    return (
        <div className="taskItem">
            <input type="checkbox" />
            <p>{task}</p>
            <button className="deleteButton"><Trash size={20} /></button>
        </div>
    );
}
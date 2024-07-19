import { Trash } from '@phosphor-icons/react'
import './taskItem.css'

export function TaskItem() {
    return (
        <div className="taskItem">
            <input type="checkbox"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, </p>
            <button className="deleteButton"><Trash size={20}/></button>
        </div>
    )
}
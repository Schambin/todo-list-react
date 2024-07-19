import { useState } from 'react';
import './input.css'
import { PlusCircle } from '@phosphor-icons/react'

interface AddTaskProps {
    addTask: (task: string) => void;
}

export function AddTask({ addTask } : AddTaskProps) {
    const [task, setTask] = useState([
        1,
        2,
    ]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setTask([...task, 3])
    };
    
    return(
        <form className='container' onSubmit={handleSubmit}>
            <input 
                className='addTaskInput' 
                type="text" 
                placeholder='Adicione uma nova tarefa'
                onChange={(e) => setTask(e.target.value)}
            />
            <button type='submit' className='createButton'>Criar<PlusCircle size={18}/>
            </button>
        </form>
    )
}
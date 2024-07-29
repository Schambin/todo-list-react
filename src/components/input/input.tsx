import { useState } from 'react';
import { PlusCircle } from '@phosphor-icons/react'

import './input.css'

interface AddTaskProps {
    addTask: (task: string) => void;
}

export function AddTask({ addTask }: AddTaskProps) {
    const [taskInput, setTaskInput] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (taskInput.trim() === '') return;  // Verifica se o input não está vazio
        addTask(taskInput);
        setTaskInput('');
    };

    return (
        <form className='container' onSubmit={handleSubmit}>
            <input 
                className='addTaskInput' 
                type="text" 
                placeholder='Adicione uma nova tarefa'
                maxLength={65}
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
            />
            <button type='submit' className='createButton'>
                Criar<PlusCircle size={18} />
            </button>
        </form>
    );
}

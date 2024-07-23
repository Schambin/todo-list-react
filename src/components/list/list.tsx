import { TaskItem } from '../taskItem/taskItem';
import { ClipboardText } from '@phosphor-icons/react';

import './list.css'


export function TasksList({ tasks }) {
    return (
        <div className='tasksContainer'>
            {tasks.length === 0 ? (
                <div className='withoutTasksContainer'>
                    <ClipboardText size={56} />
                    <p className='noTasksDec'>Você ainda não tem tarefas cadastradas</p>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
            ) : (
                tasks.map((task, index) => <TaskItem key={index} task={task} />)
            )}
        </div>
    );
}
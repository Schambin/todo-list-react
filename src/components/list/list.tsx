import './list.css';
import { TaskItem } from '../taskItem/taskItem';
import { ClipboardText } from '@phosphor-icons/react';

export function TasksList({ tasks, deleteTask, toggleTaskCompletion }) {    
    return (
        <div className='tasksContainer'>
            {tasks.length === 0 ? (
                <div className='withoutTasksContainer'>
                    <ClipboardText size={56} />
                    <p className='noTasksDec'>Você ainda não tem tarefas cadastradas</p>
                    <p>Crie tarefas e organize seus itens a fazer</p>
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

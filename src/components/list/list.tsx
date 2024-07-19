import './list.css'
import { useState } from 'react';
// import { AddTask } from '../input/input'
import { TaskItem } from '../taskItem/taskItem';

interface Task {
    id: number;
    text: string;
    completed: boolean;
}

export function TasksList() {
    const [tasks, setTasks] = useState<Task[]>([]);

    return(
        <div className='tasksContainer'>
            {/* {tasks.length === 0 ? (
                <div className='withoutTasksContainer'>
                    <ClipboardText size={56}/>
                    <p className='noTasksDec'>Você ainda não tem tarefas cadastradas</p>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
            ) : ( */}
                <TaskItem />
                <TaskItem />
                <TaskItem />
                <TaskItem />
            {/* )} */}

        </div>
    )
}
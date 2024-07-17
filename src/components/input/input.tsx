import './input.css'

export function AddTaskInput() {
    return(
        <div className='container'>
            <input 
                className='addTaskInput' 
                type="text" 
                placeholder='Adicione uma nova tarefa' 
            />
            <button className='createButton'> Criar </button>
        </div>
    )
}
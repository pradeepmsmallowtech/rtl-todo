import React, {useState} from 'react';

const TodoInput = ({allTodos, setAllTodos}) => {
    const [todo, setTodo] = useState('')

    const addTodo = () => {
        const updatedTodos = [
            ...allTodos,{
                id: allTodos.length+1,
                name: todo,
            }
        ]
        setAllTodos(updatedTodos);
        setTodo('');
    }

    return (
        <div>
            <input
                value={todo}
                placeholder={"Enter the task name here"}
                onChange={e => setTodo(e.target.value)}
            />
            <button onClick={() => addTodo()}>Add Todo</button>
        </div>
    );
};

export default TodoInput;
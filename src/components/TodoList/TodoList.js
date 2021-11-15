import React from 'react';

const TodoList = ({allTodos,setAllTodos}) => {
    return (
        <div>
            {
                allTodos.map((todo) =>
                <h2 key={todo.id}>
                    {todo.id} - {todo.name}
                </h2>
                )
            }
        </div>
    );
};

export default TodoList;
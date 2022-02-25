import React, { FunctionComponent } from "react";
import { ITodo } from "../types/types";

interface TodoItemProps {
    todo: ITodo;
    onClick: (todo: ITodo) => void;
}

const TodoItem: FunctionComponent<TodoItemProps> = ({ todo, onClick }) => {

    const blockStyles = {
        width: '60%', 
        marginLeft: 'auto', 
        marginRight: 'auto', 
        border: '1px solid #ddd', 
        padding: 20, 
        marginBottom: 10, 
        cursor: 'pointer'
    }
    return (
        <div style={blockStyles}
            onClick={() => onClick(todo)}>
            <input type="checkbox" checked={todo.completed}/>
            <p>Дело номер {todo.id} {todo.title}</p>
        </div>
    )
}

export default TodoItem;
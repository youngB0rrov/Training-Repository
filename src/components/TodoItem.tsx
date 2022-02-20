import React, { FunctionComponent } from "react";
import { ITodo } from "../types/types";

interface TodoItemProps {
    todo: ITodo
}

const TodoItem: FunctionComponent<TodoItemProps> = ({ todo }) => {
    return (
        <div style={{width: '60%', marginLeft: 'auto', marginRight: 'auto'}}>
            <input type="checkbox" checked={todo.completed}/>
            <p>Дело номер {todo.id} {todo.title}</p>
        </div>
    )
}

export default TodoItem;
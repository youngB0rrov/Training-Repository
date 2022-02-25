import React, { FC, useState, useEffect } from "react";
import { ITodo } from "../types/types";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TodoItemPage: FC = () => {

    const [todo, setTodo] = useState<ITodo | null>(null);
    const history = useNavigate();

    const getTodo = async () => {
        axios.get<ITodo>('https://jsonplaceholder.typicode.com/todos')
          .then(response => setTodo(response.data))
          .catch(error => {
            console.log('Ошибка получения списка todo: ', error);
          });
    }

    useEffect(() => {
        getTodo();
    }, []);

    const blockStyles = {
        width: '70vw',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 100
    }

    return (
        <div style={blockStyles}>
            <button 
                onClick={() => history('/todos')}
                style={{cursor: 'pointer'}}
            >
                Вернуться к списку дел
            </button>

            <h3>
                Дело номер {todo?.id}
            </h3>
            <div>
                <p>Название дела: {todo?.title}</p>
                <p>Состояние дела: {todo?.completed ? 'Выполнено' : 'Еще не выполнено'}</p>
            </div>
        </div>
    )
}

export default TodoItemPage;
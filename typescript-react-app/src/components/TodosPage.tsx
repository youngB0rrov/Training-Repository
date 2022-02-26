import React, {FC, useState, useEffect} from "react";
import { ITodo } from "../types/types";
import axios from "axios";
import List from "./List";
import TodoItem from "./TodoItem";
import { useNavigate } from "react-router-dom";

const TodosPage:FC = () => {

    const [todos, setTodos] = useState<ITodo[]>([]);
    const history = useNavigate();
    const getTodosList = async () => {
        axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=20')
          .then(response => setTodos(response.data))
          .catch(error => {
            console.log('Ошибка получения списка todo: ', error);
          });
    }

    useEffect(() => {
        getTodosList();
    }, []);

    return (
        <div>
            <List 
                items={todos} 
                renderItem={(todo: ITodo) => <TodoItem 
                    todo={todo} 
                    key={todo.id}
                    onClick={(todo) => {history(`/todos/${todo.id}`)}}/>}
            />
        </div>
    )
}
export default TodosPage;
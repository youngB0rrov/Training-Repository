import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import axios from 'axios';
import UserList from './components/UserList';
import { ITodo, IUser } from './types/types';
import List from './components/List';
import User from './components/User';
import TodoItem from './components/TodoItem';

function App() {

  const [userList, setUserList] = useState<IUser[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    getUsersList();
    getTodosList();
  }, []);

  const url = 'https://jsonplaceholder.typicode.com/users';

  const getUsersList = async () => {
    axios.get<IUser[]>(url)
      .then((response) => setUserList(response.data))
      .catch((error) =>  {
        console.log('Не удалось получить данные с запроса: ', error);
      });
  }

  const getTodosList = async () => {
    axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=20')
      .then(response => setTodos(response.data))
      .catch(error => {
        console.log('Ошибка получения списка todo: ', error);
      });
  }

  return (
    <div className="App">
      
      <Card 
        height='200px' 
        width='200px'
        onClick={(num) => console.log(num)}
      >
        <button>Click</button>
      </Card>

      <UserList users={userList}/>

      <List 
        items={userList} 
        renderItem={(user: IUser) => {
          return <User userData={user} key={user.id}/>
        }}
      />

      <List 
        items={todos} 
        renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id}/>}
      />
    </div>
  );
}

export default App;

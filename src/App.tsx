import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import axios from 'axios';
import UserList from './components/UserList';
import { IUser } from './types/types';

function App() {

  const [userList, setUserList] = useState<IUser[]>([]);

  useEffect(() => {
    getUsersList();
  }, []);

  const url = 'https://jsonplaceholder.typicode.com/users';

  const getUsersList = async () => {
    axios.get<IUser[]>(url)
      .then((response) => setUserList(response.data))
      .catch((error) =>  {
        console.log('Не удалось получить данные с запроса: ', error);
      })
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
    </div>
  );
}

export default App;

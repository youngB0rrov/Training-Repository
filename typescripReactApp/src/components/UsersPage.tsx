import React, { FunctionComponent, useState, useEffect} from "react";
import axios from "axios";
import UserList from "./UserList";
import List from "./List";
import { IUser } from "../types/types";
import User from "./User";
import { useNavigate } from "react-router-dom";

const UsersPage:FunctionComponent = () => {

    const url = 'https://jsonplaceholder.typicode.com/users';

    const history = useNavigate();

    const getUsersList = async () => {
        axios.get<IUser[]>(url)
        .then((response) => setUserList(response.data))
        .catch((error) =>  {
            console.log('Не удалось получить данные с запроса: ', error);
        });
    }

    const [userList, setUserList] = useState<IUser[]>([]);
    useEffect(() => {
        getUsersList();
    }, []);

    return (
        <div>
            <UserList users={userList}/>
            <List 
                items={userList} 
                renderItem={(user: IUser) => {
                return <User 
                    userData={user} 
                    key={user.id}
                    // function defenition
                    onClick={(user) => {history(`/users/${user?.id}`)}}/>
            }}
            />
        </div>
    )
}

export default UsersPage;
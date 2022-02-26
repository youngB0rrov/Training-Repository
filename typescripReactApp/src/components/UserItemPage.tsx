import React, {FC, useEffect, useState} from "react";
import axios from "axios";
import { IUser } from "../types/types";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


interface UserItemPageParams {
    id: string;
}

const UserItemPage: FC = () => {

    const params = useParams();
    const history = useNavigate();
    const [user, setUser] = useState<IUser | null>(null);

    useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/${params?.id}`)
        .then((response) => setUser(response.data))
        .catch((error) =>  {
            console.log('Не удалось получить данные с запроса: ', error);
        });
    }

    const blockStyles = {
        width: '70vw',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 100
    }
    
    return (
        <div style={blockStyles}>
            <button
                onClick={() => history('/users')}
                style={{cursor: 'pointer'}}
            >
                Вернуться к списку пользователей
            </button>

            <h3>Страница пользователя {user?.name}</h3>
            <div>
                <p>
                    {user?.address.city}, {user?.address.street}, {user?.address?.zipcode}
                </p>
                <p>
                    {user?.username}
                </p>
            </div>
        </div>
    )
}

export default UserItemPage;
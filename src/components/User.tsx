import React, { FunctionComponent } from "react";
import { IUser } from "../types/types";

interface UserProps {
    userData: IUser
}
const User: FunctionComponent<UserProps> = ({ userData }) => {
    return (
        <div style={{width: '60%', marginLeft: 'auto', marginRight: 'auto'}}>
            <div style={{border: '1px solid #ddd', padding: '15px', marginBottom: '20px'}}>
                <p>Пользователь с уникальным номером {userData.id}) по имени {userData.name} проживает в городе {userData.address.city} по адресу {userData.address.street} </p>
            </div>
        </div>
    )
}

export default User;
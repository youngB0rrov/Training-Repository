import React, { FunctionComponent } from "react";
import { IUser } from "../types/types";
import User from "./User";

interface UserInterfaceProps {
    // тип провсов - список пользователей типа IUser
    users: IUser[];
}

const UserList: FunctionComponent<UserInterfaceProps> = ({ users }) => {
    return (
        <div>
            {users.map(user => {
                return <User key={user.id} userData={user}/>
            })}
        </div>
    )
}

export default UserList;
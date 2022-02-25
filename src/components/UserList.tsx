import React, { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import { IUser } from "../types/types";
import User from "./User";

interface UserInterfaceProps {
    // тип пропсов - список пользователей типа IUser
    users: IUser[];
}

const UserList: FunctionComponent<UserInterfaceProps> = ({ users }) => {
    const history = useNavigate();

    return (
        <div>
            {users.map(user => {
                return <User 
                key={user.id} 
                userData={user}
                // function defenition
                onClick={(user) => {history(`/users/${user?.id}`)}}/>
            })}
        </div>
    )
}

export default UserList;
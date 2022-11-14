import React, { useEffect, useState } from 'react'
import { UserService } from '../services/users';

function Users() {
    const [ users, setUsers ] = useState([]);
    const userService = new UserService();

    const fetchData = () => {
        userService.getUsers().then(u => {
            setUsers(u)
            console.log(u);            
        })
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <h1>User1</h1>
        // {users.length > 0 && (
        //     {users.map(u => (
        //         <h3>{u.first_name}</h3>
        //     ))}
        // )}
    )
}

export default Users;
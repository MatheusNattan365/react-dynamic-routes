import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
// import { Container } from './styles';

export default function Shop() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetchItems();
    }, [])

    const fetchItems = async () => {
        const data = await fetch('https://api.github.com/users')
        const dataUsers = await data.json()
        setUsers(dataUsers)
        // console.log(dataUsers)
    }

    return (
        <>
            <h1>Users</h1>

            {users.map(user => (
                <Link key={user.id} to={`/users/${user.login}`}>
                    <div>
                        <p>{user.login}</p>
                    </div>
                </Link>
            ))}

        </>

    );
}

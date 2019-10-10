import React, { useState, useEffect } from 'react';

// import { Container } from './styles';

export default function Item({ match }) {
  const [user, setUser] = useState({})

  useEffect(() => {
    fetchUser()
    // eslint-disable-next-line
  }, [])

  const fetchUser = async () => {
    const dataUser = await fetch(`https://api.github.com/users/${match.params.login}`)
    const userData = await dataUser.json()
    setUser(userData)
    // console.log(userData)
  }

  return (
    <>
      <h1>User: {user.login}</h1>
      <img src={user.avatar_url} alt="" />
      <p>{user.name}</p>
      <p>{user.location}</p>
      <p>{user.html_url}</p>
    </>
  );
}

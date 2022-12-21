import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { getWeather } from '../redux/actions/weatherActions';
import { Card } from './CardComponent';

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users?.users);
  const loading = useSelector(state => state?.users?.loading);
  const error = useSelector(state => state.users?.error);
  // console.log('===== GET USERS =====',getWeather)

  // useEffect(() => {
  //   dispatch(getUsers([
  //     {
  //       id: 1,
  //       name: 'Leanne Graham',
  //       company: {
  //         name: "Romaguera-Crona",
  //         catchPhrase: "Multi-layered client-server neural-net",
  //       }
  //     }
  //   ]));
  // }, [])

  // useEffect(() => {
  //   dispatch(getUsers())
  //   dispatch(userSaga())
  // }, [])

  return (
    <>
      USER
      {users?.loading && <p>Loading...</p>}
      {users.length === 0 && !loading && <p>No users available!</p>}
      {error && !loading && <p>{error}</p>}
      {users.length > 0 && users.map((user) => (
        <Card key={user.id} user={user}/>
      ))}
    </>
  )
}

export default Users;
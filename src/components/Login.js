import React, { useContext, useEffect, useState, useRef } from 'react';
import io from "socket.io-client"
import MainContext from "../context/MainContext";
import { useNavigate } from "react-router-dom";

const socket = io.connect('http://localhost:4001');


const Login = () => {
  const nav = useNavigate()


  const { username, setUsername,
    userPhoto, setUserPhoto } = useContext(MainContext)


  const user = useRef()
  const photo = useRef()


  const register = () => {
    const data = {
      name: username,
      photo: userPhoto,
    }
    socket.emit('register', data)
    nav("/users")
  }
  const displayCard = () => {
    setUsername(user.current.value)
    setUserPhoto(photo.current.value)
  }



  return (
    <div className=''>
      {(username && userPhoto) && <div className='usercard'>
        <img src={userPhoto} alt="" />
        <h6>{username}</h6>
        <button onClick={register}> Register</button>
      </div>}
      <div className='inputbox'> <input onChange={() => { setUserPhoto(photo.current.value) }} type="text" ref={user} placeholder={'Enter username'} />
        <input type="text" ref={photo} placeholder={'Enter photo'} />
        <button onClick={displayCard}> Enter</button>
      </div>
    </div>




  );
};

export default Login;
import React, { useContext, useEffect, useState, useRef } from 'react';
import io from "socket.io-client"
import MainContext from "../context/MainContext";
import { useNavigate } from "react-router-dom";
import SingleUser from './SingleUser';
import Fan from './Fan';
import Message from './Message';
import OneMessage from './OneMessage';

const socket = io.connect('http://localhost:4001');


const Users = () => {
  // const nav = useNavigate()
  const { username, users, setUsers, showAll, setShowAll, fans, setFans, messageField, messages, setMessages, userPhoto } = useContext(MainContext)




  useEffect(() => {

    socket.emit('usersAvailable', '')

    socket.on('newUser', (data) => {
      setUsers(data);
      // console.log(data)
    })
    socket.on('newFan', (data) => {
      // setUsers(data);
      console.log('fansdata', data)
      setFans(data)
      console.log(fans)
    })
    socket.on('newMessage', (data) => {
      // console.log('data', data)
      // const messagesCopy = [...messages]
      // messagesCopy.push(data)
      setMessages(data)
      console.log('messages', messages)
    })


  }, [])


  return (
    <div >
      <h4>{username}</h4>
      <img className='smallround' src={userPhoto} alt="" />
      <div className='buttonsline d-flex'>
        <button className='grow1' onClick={() => setShowAll(true)}>All users <strong>{users.length - 1}</strong></button>
        <button className='grow1' onClick={() => setShowAll(false)} >Users who liked me <strong>{fans.filter((e) => e.liked === username).length}</strong></button>
      </div>
      {showAll && <div className='cardwrapper d-flex f-wrap' >
        {users.filter((e) => e.name !== username).map((x, i) => <SingleUser user={x} key={i} />)}
      </div>}
      {!showAll && <div className='cardwrapper d-flex f-wrap' >
        {fans.filter((e) => e.liked === username).
          map((x, i) => <Fan fan={x} key={i} />
          )}
      </div>}
      {messageField && <Message />}
      <div className='cardwrapper ovf-auto'> {messages.filter((e) => e.sender === username || e.receiver === username).map((x, i) => <OneMessage message={x} key={i} />)}</div>





      {/* <div>
        <h2>Room {selectedRoom} Chat</h2>

        <div className='chatbox'>
          {log.map((x, i) => <div key={i} className="d-flex f-wrap" ><h6>{x.name} :</h6> {x.message} <h6>{x.time}</h6></div>)}

        </div>
        <div className='messagebox'>
          <h6>{entered}</h6>
          <h5>{username}</h5>
          <input type="text" ref={message} />
          <button onClick={sendMessage} placeholder={'Enter message'}>Send </button>
          <button onClick={leaveTheRoom}> Logout</button>
        </div>
      </div> */}
    </div>
  );
};

export default Users;
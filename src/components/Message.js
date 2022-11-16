import React, { useContext, useRef } from 'react';
import MainContext from "../context/MainContext";
import io from "socket.io-client"
const socket = io.connect('http://localhost:4001');

const Message = () => {
  const { username, reciever, setReciever, setMessageField } = useContext(MainContext)
  const text = useRef()


  const send = () => {
    // console.log('I like u so much, ', user.name)
    console.log('sender',
      username)
    console.log('reciever', reciever)
    console.log(text.current.value)
    const data = {
      sender: username,
      receiver: reciever,
      text: text.current.value
    }
    socket.emit('message', data)
    setMessageField(false)
    setReciever('')

  }


  return (
    <div >
      <h6>Send message to {reciever}</h6>

      <input type="text" ref={text} placeholder={'Your message'} />
      <button onClick={send}>Send</button>
    </div>
  );
};

export default Message;
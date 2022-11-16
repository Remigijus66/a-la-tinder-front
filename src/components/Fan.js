import React, { useContext } from 'react';
import MainContext from "../context/MainContext";
import io from "socket.io-client"
const socket = io.connect('http://localhost:4001');

const Fan = ({ fan }) => {
  const { username, messageField, setMessageField, setSender, setReciever } = useContext(MainContext)



  const message = () => {

    console.log('message to',
      fan.fanName)
    console.log('message from', username)
    console.log('messageField ===', messageField);

    setMessageField(true)
    // setSender(username)
    setReciever(fan.fanName)

    console.log('messageField ===', messageField);
  }


  return (
    <div className='usercard'>
      <img src={fan.fanPhoto} alt="" />
      <h6>{fan.fanName}</h6>
      <button onClick={message}> Message </button>
    </div>
  );
};

export default Fan;
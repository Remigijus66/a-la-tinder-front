import React, { useContext } from 'react';
import MainContext from "../context/MainContext";
import io from "socket.io-client"
const socket = io.connect('http://localhost:4001');

const OneMessage = ({ message }) => {





  return (
    <div className='messages'>
      <h6> {message.sender} --> {message.receiver} </h6>
      {message.text}
      ---
    </div>
  );
};

export default OneMessage;
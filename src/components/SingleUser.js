import React, { useContext } from 'react';
import MainContext from "../context/MainContext";
import io from "socket.io-client"
const socket = io.connect('http://localhost:4001');

const SingleUser = ({ user }) => {
  const { username, userPhoto } = useContext(MainContext)


  // const { cellSelected, setCellSelected, lands } = useContext(MainContext)

  // const findLand = () => {
  //   const land = lands.find(x => x.index === cell)

  //   if (land) {
  //     return <div className="circle" style={{ backgroundColor: land.color }}></div>
  //   } else {
  //     return <div></div>
  //   }
  // }
  const like = () => {
    // console.log('I like u so much, ', user.name)
    console.log('the one liked',
      user.name)
    console.log('the one who likes', username)
    const data = {
      liked: user.name,
      fanName: username,
      fanPhoto: userPhoto
    }
    // const data = {
    //   room: user.name,
    //   photo: userPhoto,
    // }
    socket.emit('like', data)
  }


  return (
    <div className='usercard'>
      <img src={user.photo} alt="" />
      <h6>{user.name}</h6>
      <button onClick={like}> Like </button>
    </div>
  );
};

export default SingleUser;
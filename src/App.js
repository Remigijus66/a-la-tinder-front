import './App.css';
import io from "socket.io-client"
import { useEffect, useRef, useState } from "react";
import MainContext from "./context/MainContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from './pages/LoginPage';
import UsersPage from './pages/UsersPage';

const socket = io.connect('http://localhost:4001');


function App() {
    const [username, setUsername] = useState('')
    const [users, setUsers] = useState([])
    const [fans, setFans] = useState([])
    const [userPhoto, setUserPhoto] = useState('')
    const [messageField, setMessageField] = useState(false)
    const [sender, setSender] = useState('')
    const [reciever, setReciever] = useState('')
    const [showAll, setShowAll] = useState(true)
    const [messages, setMessages] = useState([])
    const states = {
        users, setUsers,
        username, setUsername,
        userPhoto, setUserPhoto,
        showAll, setShowAll,
        fans, setFans,
        messageField, setMessageField,
        sender, setSender,
        reciever, setReciever,
        messages, setMessages
    }



    return (
        <div className="p50">


            <MainContext.Provider value={states}>


                <BrowserRouter>

                    <Routes>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/users" element={<UsersPage />} />
                        {/* <Route path="/rooms" element={<RoomsPage />} /> */}


                    </Routes>

                </BrowserRouter>


            </MainContext.Provider>

        </div>
    );
}

export default App;

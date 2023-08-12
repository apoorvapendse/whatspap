import LoginContext from "./UserLoginContext";

import React, { useEffect, useRef, useState } from 'react'
import {io} from 'socket.io-client'

const UserState = (props) => {
  const [currentUser,setCurrentUser] = useState();
  const [currentChatter,setCurrentChatter] = useState();
  const [convo,setConvo] = useState({});
  const[activeSocketUsers, setActiveSocketUsers] = useState([]);
  const socket = useRef();
  useEffect(()=>{
    socket.current = io('ws://localhost:7000')

  },[])

  return (
    <LoginContext.Provider value={{convo:convo,setConvo:setConvo,currentUser:currentUser,setCurrentUser:setCurrentUser,currentChatter:currentChatter,setCurrentChatter:setCurrentChatter,socket:socket,
    setActiveUsers:setActiveSocketUsers,activeUsers:activeSocketUsers}}>
      {props.children} 
      {/* all the components wrapped within UserState will have access to LoginContext's value */}
    </LoginContext.Provider>
  )
}

export default UserState
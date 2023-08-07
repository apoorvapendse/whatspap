import LoginContext from "./UserLoginContext";

import React, { useState } from 'react'

const UserState = (props) => {
  const [currentUser,setCurrentUser] = useState();
  const [currentChatter,setCurrentChatter] = useState();

  return (
    <LoginContext.Provider value={{currentUser:currentUser,setCurrentUser:setCurrentUser,currentChatter:currentChatter,setCurrentChatter:setCurrentChatter}}>
      {props.children} 
      {/* all the components wrapped within UserState will have access to LoginContext's value */}
    </LoginContext.Provider>
  )
}

export default UserState
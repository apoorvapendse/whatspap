import LoginContext from "./UserLoginContext";

import React, { useState } from 'react'

const UserState = (props) => {
  const [currentUser,setCurrentUser] = useState();

  return (
    <LoginContext.Provider value={{currentUser:currentUser,setCurrentUser:setCurrentUser}}>
      {props.children} 
      {/* all the components wrapped within UserState will have access to LoginContext's value */}
    </LoginContext.Provider>
  )
}

export default UserState
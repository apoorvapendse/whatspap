import React, { useContext } from 'react'
import LoginPage from './auth/LoginPage'
import { userContext } from './user-context/UserLoginState'
import ChatScreen from './messageScreen/ChatScreen';
import LoginContext from './user-context/UserLoginContext';
const Whatspap = () => {
  const {currentUser} = useContext(LoginContext);

  return (
    <>
    {
      currentUser!==undefined?<ChatScreen/>:<LoginPage/>
    }
    </>
   
  )
}

export default Whatspap
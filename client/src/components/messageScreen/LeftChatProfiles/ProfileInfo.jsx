import React, { useContext } from 'react'
import { Box } from '@mui/material';
import LoginContext from '../../user-context/UserLoginContext';

const ProfileInfo = () => {

    const {currentUser,setCurrentUser} = useContext(LoginContext);
    console.log(currentUser)

  return (
    <Box sx={{
        margin:"6%",
        height:"100%",
        display:"flex",
        gap:"3vh",
        flexDirection:"column",
        alignItems:"center"
}}>

        <Box>
            <img src={currentUser.picture} style={{
                borderRadius:"50%"
            }} alt="" />
        </Box>    
        <Box>
                {currentUser.name}
            </Box>    
        <Box>{currentUser.email}</Box>    




    </Box>
  )
}

export default ProfileInfo
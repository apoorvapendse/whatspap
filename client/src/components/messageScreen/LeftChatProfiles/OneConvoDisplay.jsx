import { Box } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import LoginContext from '../../user-context/UserLoginContext'
import { setConversation,getConvo } from '../../../apis/api.js'


const OneConvoDisplay = ({user}) => {
    const {currentChatter,setCurrentChatter,currentUser,setConvo,activeUsers} = useContext(LoginContext);

    async function showUserInfo(){
        
        await setConversation({senderID:currentUser.sub,receiverID:user.sub})
        let convoDetails = await getConvo(currentUser.sub, user.sub);
        setConvo(convoDetails)

        setCurrentChatter(user)
      
    }
   
  return (
      <Box
          sx={{

              height: "9%",
              backgroundColor: "whitesmoke",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              borderBottom: "0.3px solid rgba(0,0,0,0.12)"

            
          }}
          onClick = {()=>{showUserInfo()}}

         
      >

          <Box
              sx={{ height: "100%", width: "18%", display: "flex", justifyContent: "center", alignItems: "center" }}
          >

              <img src={user.picture} style={{ height: "50px", borderRadius: "50%" }} alt="" />
          </Box>
          <Box
              sx={{
                  marginLeft: "12px",
                  display: "flex",
                  marginTop: "23px",
                  fontSize: "15px",
                  height: "100%",
                  width: "100%",
                  flexDirection: "column"
              }}

          >
              {user.name}

          </Box>

      </Box>
  )
}

export default OneConvoDisplay
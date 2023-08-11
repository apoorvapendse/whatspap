// This will display all the messages for selected chat
import { Box } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { getConvo, getMessages } from '../../../apis/api'
import LoginContext from '../../user-context/UserLoginContext'
import { Typography } from '@mui/material';

const ChatDisplayMsgs = ({sender,receiver}) => {
    const {convo,setConvo,currentUser} = useContext(LoginContext)
    
    const [previousMessages, setPreviousMessages] = useState([]);

    useEffect(() => {
        console.log("receiver changed to",receiver)
        console.log("convoid:",convo._id)


      
        let getConvoDetails = async()=>{
            let convoDetails = await getConvo(sender,receiver);
            setConvo(convoDetails)
        }
        getConvoDetails();
        const getPrevMessages = async () => {
            
            let messages = await getMessages(convo._id);
            setPreviousMessages(messages)
            console.log(previousMessages)
        }
        getPrevMessages();
        
        
    },[receiver] )
    

  return (
    <Box
        sx={{
            
            color:"white",
            width:"100%",
            height:"84%",
            boxSizing:"border-box",
            padding:"10px",
            backgroundColor:"#2f2f2f", 
                overflowY:"scroll",
            scrollbarColor:"transparent",
            paddingTop:"4px",
              "&::-webkit-scrollbar": {
                  width: 0,
              },
              "&::-webkit-scrollbar-thumb": {
                  background: "transparent",
              },
              "&::-moz-scrollbar": {
                  width: 0,
              },
              "&::-moz-scrollbar-thumb": {
                  background: "transparent",
              },
        }}
    >
           

        {previousMessages && previousMessages.map(message=>(
            <Box sx={{
                display:"flex",
                flexDirection:'column'
            }}>
                {message.senderID === currentUser.sub ? (<Box sx={{
                    backgroundColor: "whitesmoke"
                    , color: "#4169e1",
                    alignSelf: "flex-end",

                    margin: "4px",
                    maxWidth: "60%",
                    width: "30%",
                    borderRadius: "18px",
                    padding: "12px"
                }}>

                    <Typography><h4 style={{ margin: 0 }}>{message.text}</h4></Typography>
                    <Typography sx={{ fontSize: "small", textAlign: 'right' }}>{message.createdAt}</Typography>
                </Box>) : (<Box sx={{
                    backgroundColor: "royalblue"
                    , color: "white",
                    margin: "4px",
                    maxWidth: "60%",
                    width: "30%",
                    borderRadius: "18px",
                    padding: "12px"
                }}>

                    <Typography><h4 style={{ margin: 0 }}>{message.text}</h4></Typography>
                    <Typography sx={{ fontSize: "small", textAlign: 'right' }}>{message.createdAt}</Typography>
                </Box>)}
            
                

                
            
            
            
            </Box>
            ))
            
        }
        
    </Box>
    )
}

export default ChatDisplayMsgs
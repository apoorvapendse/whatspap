import { Box } from '@mui/material'
import React, { useContext } from 'react'
import LoginContext from '../../user-context/UserLoginContext'
import { More, MoreVert, Search } from '@mui/icons-material'


const ChatDisplayHeader = () => {
    const {currentUser,setCurrentUser,currentChatter} = useContext(LoginContext);
    return (
    <Box
    sx={{
        height:"8%",
        width:"100%",
        color:"white",
                backgroundColor: "royalblue"
        
        
}}
>
            <Box sx={{
                display: "flex", backgroundColor: "royalblue", height: "85%", boxSizing:"border-box",
                padding: "2px",
                justifyContent:"space-between"
            }}>
    {/* left side box below */}
    <Box sx={{display:"flex"}}>

    <img src= {currentChatter.picture} style={{height:"50px",borderRadius:"50%"}}srcset="" />
    <Box sx={{color:"white",fontSize:"15px",display:"flex",flexDirection:"column",gap:"5px",margin:"4px",}}>
                        <span style={{ fontSize: "16px" }}>{currentChatter.name}</span>
                        <span style={{ fontSize: "11.5px" }}>Online</span>
    </Box>
    </Box>
                <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",gap:"12px"}}>
                    <Search style={{ fontSize: "25px" }}/>
                    <MoreVert style={{ fontSize: "25px" }}/>

                </Box>
    </Box>
    {/* right side box below */}
  
    
    </Box>

  )
}

export default ChatDisplayHeader
import { Box, Dialog, Toolbar } from '@mui/material'
import React from 'react'
import LeftMenu from './LeftChatProfiles/LeftMenu'
import EmptyChat from './RightChatDisplay/EmptyChat';

const ChatScreen = () => {
  return (
    <div>

    <Box height={"100%"} width={"100%"} sx={{
        backgroundColor:'white'
    }}>
        <Toolbar 
            style={{
                height:"20vh",
                backgroundColor:"royalblue"
            }}
        />
              <Dialog
                  hideBackdrop
                  sx={{
                      backgroundColor: "rgba(0,0, 0, 0.16)"
                  }}
                  open={true}
                  PaperProps={{

                      sx: {
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "97%",
                          border:"1px solid rgba(255,255,255,0.2)",
                          backgroundColor: "whitesmoke"
                          , minWidth: "98%", marginTop: "5vh",
                          boxShadow: "none"
                      }
                  }}
              >

                  <Box display={'flex'}
                      sx={{
                          width: "100%",
                          height: "100%",
                      }}
                  >
                    <Box 
                        sx={{
                            minWidth:"250px",
                            width:"25%",
                            height:"100%",
                              backgroundColor:"#f6f6f6",
                            display:"flex",
                            justifyContent:"center"
                        }}
                        
                        >
                        <LeftMenu/>
                    </Box>

                      <Box sx={{
                        minWidth:"700px",
                          width: "75%",
                          height: "100%",
                          backgroundColor: "blue",
                          display:"flex",
                          justifyContent:"center"
                      }}>
                       <EmptyChat/>
                    </Box>
                  </Box>
                </Dialog>
        </Box>
        </div>
  )
}

export default ChatScreen
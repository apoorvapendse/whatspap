import React from 'react'
import logo1 from '../../../../src/1.png'
import { Box } from '@mui/material'
const EmptyChat = () => {
  return (
    <Box 
      sx={{
        display:"flex",
        justifyContent:"center"
        ,alignItems:"center"
      }}
    >
      <img src={logo1} alt="" style={{
        height:"300px",
        width:"300px",
        border: "12px solid rgba( 65, 105, 225,0.4)",
        borderRadius:"50%"
      }} />

    </Box>
  )
}

export default EmptyChat
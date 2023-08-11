import { Box, InputBase } from '@mui/material'
import React from 'react'
import {Search} from '@mui/icons-material'

const SearchBar = ({setQuery}) => {
  return (
    <Box
        sx={{
            height:"5vh",
            backgroundColor:"#f1f2f3",
            display:"flex",
            padding:"0 12px",
            justifyContent:"left",
            alignItems:"center"
        }}
    >
        <Box
            sx={{
                height:"60%",
                width:"80%",
                backgroundColor:"white",
                display:"flex",
                alignItems:"center",
                justifyContent:"space-around",
                padding:"0 8px"
                ,borderRadius:"8px"
        }}
        >
            <Search /> <InputBase
            placeholder='search or start a new chat'
            onChange={(e)=>{console.log("changed");
            setQuery(e.target.value) 
        }}
            /> 
        </Box>

    </Box>

    )
}

export default SearchBar
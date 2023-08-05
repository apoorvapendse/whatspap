import { Box } from '@mui/material'
import React, { useContext, useState } from 'react'
import TopIcons from './TopIcons'
import LoginContext from '../../user-context/UserLoginContext'
const TopIconsContainer = () => {

    const { currentUser, setCurrentUser } = useContext(LoginContext)
    let [showDrawer, setshowDrawer] = useState(false)

    function toggleDrawer() {
        setshowDrawer(!showDrawer);
        console.log(showDrawer)
    }

  return (
      <Box
          sx={{
              height: "50px",
              backgroundColor: "whitesmoke",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "4px 15px",
          }}
      >
          <img
              src={currentUser.picture}
              alt=""
              style={{
                  borderRadius: "50%",
                  height: "50px",
                  width: "50px",
              }}
              onClick={() => {
                  toggleDrawer();
              }}
          />
          
         <TopIcons/>
      </Box>
  )
}

export default TopIconsContainer    
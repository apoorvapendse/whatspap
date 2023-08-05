import { Box } from '@mui/material'
import React, {  useContext } from 'react'
import LoginContext from '../../user-context/UserLoginContext'
import { Chat, DonutLarge } from '@mui/icons-material'
import TripleDotMenu from './TripleDotMenu'
import ProfileDetailsDrawer from './ProfileDetailsDrawer'
import { useDrawerContext } from './profile-drawer-manager/ProfileDetailsContext'


const TopIcons = () => {
    const { currentUser, setCurrentUser } = useContext(LoginContext)
    let [showDrawer, setshowDrawer] = useDrawerContext()
    

    function toggleDrawer() {
        setshowDrawer(!showDrawer);
        console.log(showDrawer)
    }

    return (
        <>
            {showDrawer === false ? (
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
                            cursor:'pointer'
                        }}
                        onClick={() => {
                            toggleDrawer();
                        }}
                    />
                    <Box
                        sx={{
                            height: "100%",
                            width: "70%",
                            display: "flex",
                            justifyContent: "right",
                            alignItems: "center",
                            gap: "10%"
                        }}
                    >
                        <DonutLarge color="black" height="100%" />
                        <Chat color="black" height="100%" />
                        <TripleDotMenu />
                    </Box>
                </Box>
            ) : (
                <ProfileDetailsDrawer />
            )}
        </>
    )
}

export default TopIcons

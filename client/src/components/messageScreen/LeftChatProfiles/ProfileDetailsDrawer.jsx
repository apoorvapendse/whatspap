import { Box, Typography } from '@mui/material';
import React from 'react';
import { useDrawerContext } from './profile-drawer-manager/ProfileDetailsContext';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { motion } from 'framer-motion';
import ProfileInfo from './ProfileInfo';

const ProfileDetailsDrawer = () => {
    const [showDrawer, setshowDrawer] = useDrawerContext();

    // Function to handle the closing of the drawer
    const handleCloseDrawer = () => {
        setshowDrawer(false);
    };

    return (
        <motion.div
        className='drawerContainer'
            initial={{ x: '-100%' }} 
            animate={{ x: 0 }} 
            exit={{ x: '-100%' }} 
        >
            <Box
                sx={{
                    height: "91.5vh",
                    width: "100%",
                    backgroundColor:"#e6e6e6",
                    zIndex: 3,
                }}
            >
                {/* Box to contain the arrow key and profile details heading  */}
                <Box 
                    sx={{
                        display:"flex",
                        color:"white"
                        ,justifyContent:"left",
                        height:"15%",
                        alignItems:"end",
                        backgroundColor:"royalblue"
                    }}
                >


                <div onClick={handleCloseDrawer}>
                    <ArrowBackIcon
                        sx={{
                            color: "white",
                            fontSize: "32px",
                            cursor: 'pointer'
                        }}
                        />
                </div>
                <Typography sx={{
                    textAlign:"center",
                    fontSize:"21px",
                    marginLeft:"14px",
                    fontFamily:"system-ui"
                }}>Profile</Typography>
                        </Box>
                <ProfileInfo/>
                        
            </Box>
        </motion.div>
    );
};

export default ProfileDetailsDrawer;

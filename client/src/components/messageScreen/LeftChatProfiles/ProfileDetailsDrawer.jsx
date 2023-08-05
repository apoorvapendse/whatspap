import { Box } from '@mui/material';
import React from 'react';
import { useDrawerContext } from './profile-drawer-manager/ProfileDetailsContext';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { motion } from 'framer-motion';

const ProfileDetailsDrawer = () => {
    const [showDrawer, setshowDrawer] = useDrawerContext();

    // Function to handle the closing of the drawer
    const handleCloseDrawer = () => {
        setshowDrawer(false);
    };

    return (
        <motion.div
            initial={{ x: '-100%' }} // Initial position: off the screen to the left
            animate={{ x: 0 }} // Animate to the position with x = 0 (center)
            exit={{ x: '-100%' }} // Exit animation: off the screen to the left
        >
            <Box
                sx={{
                    height: "91vh",
                    width: "100%",
                    backgroundColor: "teal",
                    zIndex: 3,
                }}
            >
                <div onClick={handleCloseDrawer}>
                    <ArrowBackIcon
                        sx={{
                            color: "white",
                            margin: "5px",
                            fontSize: "32px",
                            cursor: 'pointer'
                        }}
                    />
                </div>
            </Box>
        </motion.div>
    );
};

export default ProfileDetailsDrawer;

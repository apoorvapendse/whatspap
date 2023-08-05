import React, { useContext } from 'react';
import TopIcons from './TopIcons';
import { Box } from '@mui/material';
import SearchBar from './SearchBar';
import { useDrawerContext } from './profile-drawer-manager/ProfileDetailsContext';

const LeftMenu = () => {
  const [showDrawer, setshowDrawer] = useDrawerContext();

  return (
    <Box height={'100%'} width={'100%'}>
      <TopIcons />
      {showDrawer === true ? (<></>) : (<SearchBar />)}
     
    </Box>
  );
};

export default LeftMenu;

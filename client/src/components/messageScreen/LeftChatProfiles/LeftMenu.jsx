import React, { useContext, useState } from 'react';
import TopIcons from './TopIcons';
import { Box } from '@mui/material';
import SearchBar from './SearchBar';
import { useDrawerContext } from './profile-drawer-manager/ProfileDetailsContext';
import Conversations from './Conversations';

const LeftMenu = () => {
  const [showDrawer, setshowDrawer] = useDrawerContext();
  const [query,setQuery] = useState();
  return (
    <Box height={'100%'} width={'100%'}>
      <TopIcons />
      {showDrawer === true ? (<></>) : (<SearchBar setQuery={setQuery}/>)}
      <Conversations query={query}/>
    </Box>
  );
};

export default LeftMenu;

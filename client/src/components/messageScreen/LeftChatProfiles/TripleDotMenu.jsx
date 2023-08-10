import React from 'react'
import {MoreVert} from '@mui/icons-material'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useDrawerContext } from './profile-drawer-manager/ProfileDetailsContext';

export default function TripleDotMenu() {

    let [showDrawer, setshowDrawer] = useDrawerContext()

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <button
               style={{border:"none"}}
                onClick={handleClick}
                sx={{
                padding:"0px !important",
                margin:"0px !important"
            }}
            >
               <MoreVert/>
            </button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                anchorOrigin={{
                    vertical:'bottom',
                    horizontal:'center'
                }}
                transformOrigin={{
                    vertical:"top",
                    horizontal:"right"
                }}
            >
                <MenuItem onClick={() => { setshowDrawer(true) }}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </div>
    );
}

import * as React from 'react';
import {IconButton, Menu, MenuItem} from "@material-ui/core";
import logo from '../../Assets/Logo.png';


export default function BasicMenu() {
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
      <IconButton
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      > 
      <img src= {logo} alt='' height='30vm'/>
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>About</MenuItem>
        <MenuItem onClick={handleClose}>Portfolio Projects</MenuItem>
        <MenuItem onClick={handleClose}>Get in contact</MenuItem>
      </Menu>
    </div>
  );
}
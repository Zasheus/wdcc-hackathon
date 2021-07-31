import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Cram Day
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Monday</MenuItem>
        <MenuItem onClick={handleClose}>Tuesday</MenuItem>
        <MenuItem onClick={handleClose}>Wednesday</MenuItem>
        <MenuItem onClick={handleClose}>Thursday</MenuItem>
        <MenuItem onClick={handleClose}>Friday</MenuItem>
        <MenuItem onClick={handleClose}>Saturday</MenuItem>
        <MenuItem onClick={handleClose}>Sunday</MenuItem>
      </Menu>
    </div>
  );
}

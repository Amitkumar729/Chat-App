import { Menu, MenuItem, Stack } from "@mui/material";
import React from "react";
import { Message_options } from "../../data";
import { DotsThreeVertical } from "phosphor-react";
// import MoreVertIcon from '@mui/icons-material/MoreVert';

export const MessageOptions = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
    <Stack sx={{cursor: "pointer"}} >
    <DotsThreeVertical
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        size={24}
        
      />
    </Stack>
      

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Stack spacing={1} px={1}>
          {Message_options.map((item) => (
            <MenuItem onClick={handleClick}>{item.title}</MenuItem>
          ))}
        </Stack>
      </Menu>
    </>
  );
};

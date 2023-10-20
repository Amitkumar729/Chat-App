import { faker } from "@faker-js/faker";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import {
  Bell,
  CaretLeft,
  Image,
  Info,
  Key,
  Keyboard,
  Lock,
  Note,
  PencilCircle,
} from "phosphor-react";
import React from "react";
import Shortcuts from "../../sections/settings/Shortcuts";
import { useState } from "react";

const Settings = () => {
  const theme = useTheme();

  const [openShortcuts, setOpenShortcuts] = useState(false);

  const handleOpenShortcuts = () => {
    setOpenShortcuts(true);
  };

  const handleCloseShortcuts = () => {
    setOpenShortcuts(false);
  };

  const list = [
    {
      key: 0,
      icon: <Bell size={20} />,
      title: "Notifications",
      onclick: () => {},
    },
    {
      key: 1,
      icon: <Lock size={20} />,
      title: "Privacy",
      onclick: () => {},
    },
    {
      key: 2,
      icon: <Key size={20} />,
      title: "Security",
      onclick: () => {},
    },
    {
      key: 3,
      icon: <PencilCircle size={20} />,
      title: "Theme",
      //   onclick: handleOpenTheme,
      onclick: () => {},
    },
    {
      key: 4,
      icon: <Image size={20} />,
      title: "Chat Wallpaper",
      onclick: () => {},
    },
    {
      key: 5,
      icon: <Note size={20} />,
      title: "Request Account Info",
      onclick: () => {},
    },
    {
      key: 6,
      icon: <Keyboard size={20} />,
      title: "Keyboard Shortcuts",
      onclick: handleOpenShortcuts,
      //   onclick: () => {},
    },
    {
      key: 7,
      icon: <Info size={20} />,
      title: "Help",
      onclick: () => {},
    },
  ];

  return (
    <>
    <Stack direction="row" sx={{ width: "100%" }}>
      {/* LeftPane */}
      <Box
        sx={{
            
            overflowY: "scroll",
            onMouseWheel: "enableScrolling()",
            "&::-webkit-scrollbar": { width: 8 },
            "&::-webkit-scrollbar-track": {
              background: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background.paper,
              borderRadius: 10,
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor:
                theme.palette.mode === "light"
                  ? "#E5E4E2"
                  : "#36454F",
              borderRadius: 10,
            },
   
          height: "100vh",
          width: 320,
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F8FAFF"
              : theme.palette.background,

          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        }}
      >
        
        <Stack p={4} spacing={5}>
          {/* Header */}
          <Stack direction="row" alignItems={"center"} spacing={3}>
            <IconButton>
              <CaretLeft size={24} color={"#4B4B4B"} />
            </IconButton>

            <Typography variant="h5">Settings</Typography>
          </Stack>

          {/* Profile */}
          <Stack direction="row" spacing={3}>
            <Avatar
              src={faker.image.avatar()}
              sx={{ height: 56, width: 56 }}
            />
            <Stack spacing={0.5}>
              <Typography variant="article">{`${faker.name.firstName()} ${faker.name.lastName()}`}</Typography>
              <Typography variant="body2">{faker.random.words()}</Typography>
            </Stack>
          </Stack>
          {/* List */}
          <Stack spacing={4}>
            {list.map(({ key, icon, title, onclick }) => {
              return (
                <>
                  <Stack
                    onClick={onclick}
                    sx={{ cursor: "pointer" }}
                    spacing={2}
                  >
                    <Stack alignItems={"center"} direction="row" spacing={2}>
                      {icon}
                      <Typography variant="body2">{title}</Typography>
                    </Stack>
                    {key !== 7 && <Divider />}
                  </Stack>
                </>
              );
            })}
          </Stack>
        </Stack>
      </Box>
      {/* Right Pane */}
      <Box
        sx={{
            
          height: "100%",
          width: "calc(100vw - 420px )",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#FFF"
              : theme.palette.background.paper,
          borderBottom: "6px solid #0162C4",
        }}
      ></Box>
    </Stack>
   
    {openShortcuts && <Shortcuts open={openShortcuts} handleClose={handleCloseShortcuts} /> }
    
  </>
  );
};

export default Settings;

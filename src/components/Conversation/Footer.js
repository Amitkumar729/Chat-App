import React, { useState } from "react";
import {
  Box,
  Fab,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Tooltip,
  styled,
  useTheme,
} from "@mui/material";
import {
  Camera,
  File,
  Image,
  LinkSimple,
  PaperPlaneTilt,
  Smiley,
  Sticker,
  User,
} from "phosphor-react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

export const Footer = () => {
  const theme = useTheme();
  const [openPicker, setOpenPicker] = useState(false);

  const StyledInput = styled(TextField)(({ theme }) => ({
    "& .MuiInputBase-input": {
      paddingTop: "12px",
      paddingBottom: "12px",
    },
  }));

  const Actions = [
    {
      icon: <Image size={24} />,
      y: 80,
      title: "Photo/Video",
    },
    {
      icon: <Sticker size={24} />,
      y: 138,
      title: "Stickers",
    },
    {
      icon: <Camera size={24} />,
      y: 197,
      title: "Image",
    },
    {
      icon: <File size={24} />,
      y: 255,
      title: "Document",
    },
    {
      icon: <User size={24} />,
      y: 312,
      title: "Contact",
    },
  ];

  const ChatInput = ({ setOpenPicker }) => {
    const [openActions, setOpenActions] = useState(false);

    return (
      <StyledInput
        fullWidth
        placeholder="Write a message..."
        variant="filled"
        InputProps={{
          disableUnderline: true,
          startAdornment: (
            <Stack width={"max-content"}>
              <Stack position={"relative"}>
                {Actions.map((item) => (
                  <Tooltip
                    placement="right"
                    sx={{ backgroundColor: theme.palette.mode }}
                    title={item.title}
                    arrow
                  >
                    <Fab
                      size="medium"
                      sx={{
                        position: "absolute",
                        top: -item.y,
                        backgroundColor: theme.palette.mode,
                        display: openActions ? "inline-block" : "none"
                      }}
                    >
                      {item.icon}
                    </Fab>
                  </Tooltip>
                ))}
              </Stack>

              <InputAdornment>
                <IconButton onClick={() => {
                    setOpenActions((prev) => !prev);
                }} >
                  <LinkSimple />
                </IconButton>
              </InputAdornment>
            </Stack>
          ),
          endAdornment: (
            <InputAdornment>
              <IconButton
                onClick={() => {
                  setOpenPicker((prev) => !prev);
                }}
              >
                <Smiley />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    );
  };

  return (
    <Box
      p={2}
      sx={{
        width: "100%",
        backgroundColor:
          theme.palette.mode === "light"
            ? "F8FAFF"
            : theme.palette.background.paper,
        boxShadow: "0px, 0px, 2px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Stack direction={"row"} alignItems={"center"} spacing={3}>
        {/* Chat Input */}
        <Stack width={"100%"}>
          <Box
            sx={{
              display: openPicker ? "inline" : "none",
              zIndex: 10,
              position: "fixed",
              bottom: 81,
              right: 100,
            }}
          >
            <Picker
              theme={theme.palette.mode}
              data={data}
              onEmojiSelect={console.log}
            />
          </Box>
          <ChatInput setOpenPicker={setOpenPicker} />
        </Stack>
        <Box
          sx={{
            height: 48,
            width: 48,
            backgroundColor: theme.palette.primary.main,
            borderRadius: 1.5,
          }}
        >
          <Stack
            sx={{ height: "100%", width: "100%" }}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <IconButton>
              <PaperPlaneTilt color="#fff" />
            </IconButton>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

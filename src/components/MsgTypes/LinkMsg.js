import { Box, Link, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import { MessageOptions } from "./MessageOptions";

export const LinkMsg = ({ item, menu }) => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} justifyContent={item.incoming ? "start" : "end"}>
      <Box
        p={0.5}
        sx={{
          backgroundColor: item.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: "max-content",
        }}
      >
        <Stack spacing={2}>
          <Stack
            p={0.5}
            spacing={1}
            alignItems={"center"}
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: 1,
            }}
          >
            <img
              src={item.preview}
              alt={item.message}
              style={{ maxHeight: 210, borderRadius: "10px" }}
            />
            <Stack spacing={0.5}>
              <Typography variant="subtitle2"> Creating Chat App </Typography>
              <Typography
                variant="subtitle2"
                sx={{ color: theme.palette.primary.main }}
                component={Link}
                to="//https//www.google.com"
              >
                www.google.com
              </Typography>
            </Stack>
            <Typography variant="body2" color={item.incoming 
                ? theme.palette.text 
                : "#fff"} >
                {item.message}
            </Typography>
          </Stack>
        </Stack>
      </Box>
      {menu &&   <MessageOptions/> }
    </Stack>
  );
};

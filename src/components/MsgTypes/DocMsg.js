import { Box, IconButton, Stack, Typography, useTheme } from "@mui/material";
import { DownloadSimple, Image } from "phosphor-react";
import React from "react";
import { MessageOptions } from "./MessageOptions";

export const DocMsg = ({ item, menu }) => {
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
        <Stack spacing={1}>
          <Stack
            p={2}
            direction={"row"}
            spacing={3}
            alignItems={"center"}
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: 1,
            }}
          >
            <Image size={48} />
            <Typography variant="caption">imag.png</Typography>
            <IconButton>
              <DownloadSimple />
            </IconButton>
          </Stack>
          <Typography
            variant="bosy2"
            color={item.incoming ? theme.palette.text : "#fff"}
          > {item.message} </Typography>
        </Stack>
      </Box>
      {menu &&   <MessageOptions/> }
    </Stack>
  );
};

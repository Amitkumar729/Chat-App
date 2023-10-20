import { Box, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import { MessageOptions } from "./MessageOptions";

export const ReplyMsg = ({ item, menu }) => {
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
        <Stack spacing={0.5}>
          <Stack
            p={1}
            direction="column"
            spacing={3}
            alignItems="center"
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: 1,
            }}
          >
            <Typography variant="body2" color={theme.palette.text}>
              {item.message}
            </Typography>
          </Stack>
          <Typography
            variant="body2"
            color={item.incoming ? theme.palette.text : "#fff"}
          >{item.reply}</Typography>
        </Stack>
      </Box>
      {menu &&   <MessageOptions/> }
    </Stack>
  );
};

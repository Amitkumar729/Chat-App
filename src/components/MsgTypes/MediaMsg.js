import { Box, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import { MessageOptions } from "./MessageOptions";

export const MediaMsg = ({ item, menu }) => {
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
          <img
            src={item.img}
            alt={item.message}
            style={{ maxHeight: 210, borderRadius: "10px" }}
          />
          <Typography
            variant="body2"
            color={item.incoming ? theme.palette.text : "#fff"}
          >  {item.message} </Typography>
        </Stack>
      </Box>
      {menu &&   <MessageOptions/> }
    
    </Stack>
  );
};

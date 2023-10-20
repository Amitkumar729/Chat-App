import { Box, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import { MessageOptions } from "./MessageOptions";

export const TextMsg = ({ item, menu }) => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} justifyContent={item.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: item.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: "max-content",
        }}
      >
        <Typography
          variant="body2"
          color={item.incoming ? theme.palette.text : "#fff"}
        >
          {item.message}
        </Typography>
      </Box>
      {menu &&   <MessageOptions/> }
    </Stack>
  );
};

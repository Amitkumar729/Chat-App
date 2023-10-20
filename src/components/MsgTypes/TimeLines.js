import { Divider, Stack, Typography, useTheme } from "@mui/material";
import React from "react";

export const TimeLines = ({ item }) => {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Divider width="46%" />
      <Typography variant="caption" sx={{ color: theme.palette.text }}>
        {item.text}
      </Typography>
      <Divider width="46%" />
    </Stack>
  );
};

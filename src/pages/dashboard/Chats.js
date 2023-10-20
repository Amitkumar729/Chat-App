import {
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { ArchiveBox, CircleDashed, MagnifyingGlass } from "phosphor-react";
import React from "react";

import { ChatList } from "../../data";
import {
  Search,
  SearchIconWrapper,
  SearchInputbase,
} from "../../components/Search";
import ChatElement from "../../components/ChatElement";

const Chats = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        // main container...
        position: "relative",
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.45)",

        width: 320,
        backgroundColor:
          theme.palette.mode === "light"
            ? "#F8FAFF"
            : theme.palette.background.paper,
         
      }}
    >
      <Stack p={3} spacing={2} sx={{ height: "100vh" }}>
        {" "}
        {/* containing chats & circle... */}
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography variant="h5">chats</Typography>
          <IconButton>
            <CircleDashed />
          </IconButton>
        </Stack>
        <Stack>
          <Search>
            <SearchIconWrapper>
              <MagnifyingGlass color="#709CE6" />
            </SearchIconWrapper>
            <SearchInputbase placeholder="Search..." />
          </Search>
        </Stack>
        <Stack spacing={1}>
          <Stack direction={"row"} alignItems={"center"} spacing={1.5}>
            <ArchiveBox size={24} />
            <Button>Archive</Button>
          </Stack>

          <Divider />
        </Stack>{" "}
        {/* All chats */}
        <Stack
          spacing={2}
          direction={"column"}
          sx={{
            //"#36454F" "#E5E4E2"
            flexGrow: 1,
            overflowY: "scroll",
            onMouseWheel: "enableScrolling()",
            "&::-webkit-scrollbar": { width: 8 },
            "&::-webkit-scrollbar-track": {
              background: theme.palette.mode === "light" ? "#fff" : "#36454F",
              borderRadius: 10,
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor:
                theme.palette.mode === "light"
                  ? "#E5E4E2"
                  : theme.palette.background.paper,
              borderRadius: 10,
            },
            height: "100%",
          }}
        >
          <Stack spacing={2.4}>
            <Typography variant="subtitle2" sx={{ color: "#676767" }}>
              Pinned
            </Typography>
            {ChatList.filter((item) => item.pinned).map((item) => {
              return <ChatElement {...item} />;
            })}
          </Stack>
          <Stack spacing={2.4}>
            <Typography variant="subtitle2" sx={{ color: "#676767" }}>
              All Chats
            </Typography>
            {ChatList.filter((item) => !item.pinned).map((item) => {
              return <ChatElement {...item} />;
            })}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Chats;

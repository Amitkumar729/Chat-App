import { useState } from "react";
import { Box, Divider, IconButton, Link, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import {
  Search,
  SearchIconWrapper,
  SearchInputbase,
} from "../../components/Search";
import { MagnifyingGlass, Plus } from "phosphor-react";
import { ChatList } from "../../data";
import ChatElement from "../../components/ChatElement";
import CreateGroups from "../../sections/main/CreateGroups";

const Group = () => {
  const theme = useTheme();

  const [openDialog, setOpenDialog] = useState(false);

  const handleCloseDialog = () => {
    setOpenDialog(false);
  }


  return (
    <>
      <Stack direction={"row"} sx={{ width: "100%" }}>
        {/* Left */}

        <Box
          sx={{
            height: "100vh",
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background.paper,
            width: 320,
            boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.45)",
          }}
        >
          <Stack p={3} spacing={2} sx={{ maxHeight: "100vh" }}>
            <Stack>
              <Typography variant="h5"> Groups </Typography>
            </Stack>

            <Stack sx={{ width: "100%" }}>
              <Search>
                <SearchIconWrapper>
                  <MagnifyingGlass color="#709CE6" />
                </SearchIconWrapper>
                <SearchInputbase placeholder="Search..." />
              </Search>
            </Stack>

            <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} >
              <Typography variant="subtitle2" component={Link}>
                Create New Group
              </Typography>
              <IconButton onClick={() => {
                setOpenDialog(true);
              }} >
                <Plus style={{color: theme.palette.primary.main}} />
              </IconButton>
            </Stack>
            <Divider/>
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
              All Groups
            </Typography>
            {ChatList.filter((item) => !item.pinned).map((item) => {
              return <ChatElement {...item} />;
            })}
          </Stack>
        </Stack>
          </Stack>
        </Box>

        {/* Right */}
        {/* TODO we will just reuse the Conversation component here later on... */}
      </Stack>
      {openDialog && <CreateGroups open={openDialog} handleClose={handleCloseDialog} />}
    </>
  );
};

export default Group;

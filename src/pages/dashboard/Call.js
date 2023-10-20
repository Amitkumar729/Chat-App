import React from "react";
import {
  Box,
  Divider,
  IconButton,
  Link,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import {
  Search,
  SearchIconWrapper,
  SearchInputbase,
} from "../../components/Search";
import { MagnifyingGlass, Plus } from "phosphor-react";
import { CallLogElement } from "../../components/CallElement";
import { CallLogs } from "../../data";
import { useState } from "react";
import StartCall from "../../sections/main/StartCall";

const Call = () => {
  const theme = useTheme();

  const [openDialog, setOpenDialog] = useState(false);

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

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
              <Typography variant="h5"> Call Logs </Typography>
            </Stack>

            <Stack sx={{ width: "100%" }}>
              <Search>
                <SearchIconWrapper>
                  <MagnifyingGlass color="#709CE6" />
                </SearchIconWrapper>
                <SearchInputbase placeholder="Search..." />
              </Search>
            </Stack>

            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography variant="subtitle2" component={Link}>
                Start Conversation
              </Typography>
              <IconButton
                onClick={() => {
                    setOpenDialog(true);
                }}
              >
                <Plus style={{ color: theme.palette.primary.main }} />
              </IconButton>
            </Stack>
            <Divider />
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
                  background:
                    theme.palette.mode === "light" ? "#fff" : "#36454F",
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
                  Recents
                </Typography>
                {/* Call List */}
                {CallLogs.map((el) => (
                  <CallLogElement {...el} />
                ))}
              </Stack>
            </Stack>
          </Stack>
        </Box>

        {/* Right */}
        {/* TODO we will just reuse the Conversation component here later on... */}
      </Stack>
      {openDialog && (
        <StartCall open={openDialog} handleClose={handleCloseDialog} />
      )}
    </>
  );
};

export default Call;

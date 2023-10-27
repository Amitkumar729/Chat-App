import {
  Box,
  Grid,
  IconButton,
  Stack,
  Tab,
  Tabs,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { UpdateSidebarType } from "../redux/slices/app";
import { CaretLeft } from "phosphor-react";
import { faker } from "@faker-js/faker";
import { SHARED_DOCS, SHARED_LINKS } from "../data";
import { LinkMsg } from "./MsgTypes/LinkMsg";
import { DocMsg } from "./MsgTypes/DocMsg";

const SharedMessages = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 320, height: "100vh" }}>
      <Stack sx={{ height: "100%" }}>
        {/* Header */}
        <Box
          sx={{
            boxShadow: "0px, 0px, 2px rgba(0, 0, 0, 0.25)",
            width: "100%",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background.paper,
          }}
        >
          <Stack
            sx={{ height: "100%", p: 2 }}
            direction={"row"}
            alignItems={"center"}
            spacing={3}
          >
            <IconButton
              onClick={() => {
                dispatch(UpdateSidebarType("CONTACT"));
              }}
            >
              <CaretLeft />
            </IconButton>
            <Typography variant="subtitle2">Shared Messages</Typography>
          </Stack>
        </Box>
        <Tabs
          sx={{ px: 2, pt: 2 }}
          value={value}
          onChange={handleChange}
          centered
        >
          <Tab label="Media" />
          <Tab label="Links" />
          <Tab label="Docs" />
        </Tabs>
        {/* Body */}
        <Stack
          sx={{
            height: "100%",
            position: "relative",
            flexGrow: 1,
            overflowY: "scroll",
            onMouseWheel: "enableScrolling()",
            "&::-webkit-scrollbar": { width: 8 },
            "&::-webkit-scrollbar-track": {
              background:
                theme.palette.mode === "light"
                  ? "#F8FAFF"
                  : theme.palette.background.paper,
              borderRadius: 10,
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor:
                theme.palette.mode === "light" ? "#E5E4E2" : "#36454F",
              borderRadius: 10,
            },
          }}
          p={3}
          spacing={ value === 1 ? 1 : 3}
        >
          {(() => {
            switch (value) {
                case 0:
                  //images
                  return (
                    <Grid container spacing={2}>
                      {[0, 1, 2, 3, 4, 5, 6].map((el) => {
                        return  <Grid item xs={4}>
                            <img
                              src={faker.image.avatar()}
                              alt={faker.name.fullName()}
                            />
                          </Grid>
                      
                      })}
                    </Grid>
                  );
  
                case 1:
                  //links
                  return (
                    SHARED_LINKS.map((item) => <LinkMsg item={item} />)
                  )
                 
                case 2:
                  //docs
                  return (
                    SHARED_DOCS.map((item) => <DocMsg item={item} />)
                  )
  
                default:
                  break;
              }
  
          })()}
        </Stack>
      </Stack>
    </Box>
  );
};

export default SharedMessages;
